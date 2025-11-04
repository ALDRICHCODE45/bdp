"use client";

import Link from "next/link";
import Image from "next/image";

export default function NewFooter() {
  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      {/* Prominent Address Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                Visítanos
              </h3>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
                Prado Sur 245
                <br />
                Lomas - Virreyes, Lomas de Chapultepec
                <br />
                Miguel Hidalgo, 11000
                <br />
                Ciudad de México, CDMX
              </p>
            </div>
            <div className="pt-4">
              <a
                href="https://maps.google.com/?q=Prado+Sur+245+Lomas+de+Chapultepec+Ciudad+de+Mexico"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 text-sm font-light hover:bg-gray-100 transition-colors rounded-lg"
              >
                Ver en Google Maps
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-light tracking-tight">BDP</span>
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Firma especializada en litigio y consultoría multidisciplinaria.
              Soluciones inteligentes, resultados seguros.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-light tracking-[0.2em] uppercase mb-6">
              Contacto
            </h3>
            <div className="space-y-4 text-sm text-gray-400 font-light">
              <div>
                <p className="text-white mb-1">Correo Electrónico</p>
                <a
                  href="mailto:info@bdp.com.mx"
                  className="hover:text-white transition-colors"
                >
                  info@bdp.com.mx
                </a>
              </div>
              <div>
                <p className="text-white mb-1">Teléfono</p>
                <a
                  href="tel:+525555255593"
                  className="hover:text-white transition-colors"
                >
                  55-55255593
                </a>
              </div>
              <div>
                <p className="text-white mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/525555255593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  55-55255593
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-light tracking-[0.2em] uppercase mb-6">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li>
                <Link
                  href="#inicio"
                  className="hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="hover:text-white transition-colors"
                >
                  Áreas de Práctica
                </Link>
              </li>
              <li>
                <Link
                  href="#industrias"
                  className="hover:text-white transition-colors"
                >
                  Industrias
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Todos los Servicios
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs text-gray-500 font-light">
              © BDP / {new Date().getFullYear()}
            </div>
            <div className="flex space-x-8">
              <Link
                href="/aviso-privacidad"
                className="text-xs text-gray-500 font-light hover:text-white transition-colors uppercase tracking-wider"
              >
                Aviso de Privacidad
              </Link>
              <div className="flex space-x-4">
                <span className="text-xs text-gray-500 font-light">
                  ESP / ENG / ZH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
