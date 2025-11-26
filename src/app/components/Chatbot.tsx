'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Send, Loader2 } from 'lucide-react';

interface ChatbotProps {
  onClose: () => void;
  locale?: string;
}

export default function Chatbot({ onClose, locale = 'es' }: ChatbotProps) {
  const [input, setInput] = useState('');
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });

  // Auto-scroll al final cuando hay nuevos mensajes
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && status === 'ready') {
      sendMessage({ text: input });
      setInput('');
    }
  };

  const isLoading = status !== 'ready' && status !== 'error';

  return (
    <div className="chatbot-container fixed bottom-4 right-4 w-[400px] h-[600px] max-sm:w-[calc(100vw-2rem)] max-sm:h-[calc(100vh-8rem)] max-sm:max-h-[600px] bg-white border border-gray-200 rounded-lg shadow-2xl flex flex-col z-50 animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <div>
          <h3 className="font-semibold text-gray-900">
            {locale === 'es' ? 'BDP - Asistente Virtual' : 'BDP - Virtual Assistant'}
          </h3>
          <p className="text-xs text-gray-500">
            {locale === 'es' ? 'Estamos aquí para ayudarte' : 'We are here to help'}
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="h-8 w-8 text-gray-500 hover:text-gray-700 hover:bg-gray-200"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages Area */}
      <div 
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 scroll-smooth chatbot-messages"
        style={{ maxHeight: 'calc(600px - 140px)' }}
      >
        <div className="space-y-4">
          {/* Mensaje de bienvenida */}
          {messages.length === 0 && (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p className="text-sm text-gray-700">
                {locale === 'es' 
                  ? '¡Hola! Soy el asistente virtual de BDP. Puedo ayudarte con información sobre nuestros servicios, áreas de práctica y equipo. ¿En qué puedo asistirte hoy?'
                  : 'Hello! I am BDP\'s virtual assistant. I can help you with information about our services, practice areas, and team. How can I assist you today?'}
              </p>
            </div>
          )}

          {/* Mensajes del chat */}
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-lg p-3 break-words ${
                  message.role === 'user'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-50 text-gray-900 border border-gray-200'
                }`}
              >
                <div className="text-sm">
                  {message.parts.map((part, index) => {
                    if (part.type === 'text') {
                      return (
                        <p key={index} className="whitespace-pre-wrap break-words">
                          {part.text}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          ))}

          {/* Indicador de carga */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin text-gray-600" />
                  <span className="text-sm text-gray-600">
                    {locale === 'es' ? 'Escribiendo...' : 'Typing...'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-sm text-red-600">
                {locale === 'es' 
                  ? 'Ocurrió un error. Por favor, intenta de nuevo.'
                  : 'An error occurred. Please try again.'}
              </p>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={locale === 'es' ? 'Escribe tu mensaje...' : 'Type your message...'}
            disabled={isLoading}
            className="flex-1 border-gray-300 focus:border-gray-900 focus:ring-gray-900"
          />
          <Button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-gray-900 hover:bg-gray-800 text-white"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
        <p className="text-xs text-gray-400 mt-2 text-center">
          {locale === 'es' 
            ? 'Este asistente proporciona información general sobre BDP.'
            : 'This assistant provides general information about BDP.'}
        </p>
      </div>
    </div>
  );
}

