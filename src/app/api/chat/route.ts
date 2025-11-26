import { openai } from '@ai-sdk/openai';
import { streamText, convertToModelMessages } from 'ai';
import { readFileSync } from 'fs';
import { join } from 'path';

// Permitir respuestas de streaming hasta 30 segundos
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Leer el contenido del archivo de datos del chatbot
    const dataFilePath = join(process.cwd(), 'src', 'docs', 'bdp-chatbot-data.txt');
    const contextData = readFileSync(dataFilePath, 'utf-8');

    // System prompt que instruye al modelo a usar solo la información del archivo
    const systemPrompt = `Eres un asistente virtual profesional de BDP, un despacho de abogados especializado en derecho público en México. 

Tu función es proporcionar información sobre BDP, sus servicios, áreas de práctica y equipo de trabajo.

INSTRUCCIONES IMPORTANTES:
1. Responde ÚNICAMENTE basándote en la información proporcionada en el contexto a continuación.
2. Si no tienes información sobre algo, indícalo claramente y sugiere contactar directamente al despacho.
3. Mantén un tono profesional, cortés y formal apropiado para un despacho jurídico.
4. Sé conciso pero informativo en tus respuestas.
5. No inventes información que no esté en el contexto.
6. Si te preguntan sobre casos específicos o asesoría legal personalizada, indica que deben contactar directamente al despacho.

CONTEXTO SOBRE BDP:
${contextData}

Responde de manera profesional y precisa basándote únicamente en esta información.`;

    const result = streamText({
      model: openai('gpt-4o'),
      system: systemPrompt,
      messages: convertToModelMessages(messages),
      temperature: 0.7,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error('Error en el endpoint de chat:', error);
    return new Response(
      JSON.stringify({ error: 'Error procesando la solicitud' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

