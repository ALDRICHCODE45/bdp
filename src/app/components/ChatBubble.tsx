'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Chatbot from './Chatbot';
import { useLocale } from 'next-intl';

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Burbuja flotante */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          aria-label={locale === 'es' ? 'Abrir chat' : 'Open chat'}
        >
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          
          {/* Indicador de pulso */}
          <span className="absolute top-0 right-0 h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
        </button>
      )}

      {/* Componente del chatbot */}
      {isOpen && <Chatbot onClose={closeChat} locale={locale} />}
    </>
  );
}

