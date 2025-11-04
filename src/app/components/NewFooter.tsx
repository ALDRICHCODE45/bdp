"use client";

import Link from "next/link";
import Image from "next/image";

export default function NewFooter() {
  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="BDP Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-2xl font-light tracking-tight">BDP</span>
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Firma especializada en litigio y consultoría multidisciplinaria.
              Soluciones inteligentes, resultados seguros.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-light tracking-[0.2em] uppercase mb-6">
              Dirección
            </h3>
            <div className="space-y-4 text-sm text-gray-400 font-light">
              <p className="leading-relaxed">
                Av. Principal 123
                <br />
                Colonia Centro
                <br />
                Ciudad de México, CDMX
                <br />
                CP. 01000
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-light tracking-[0.2em] uppercase mb-6">
              Contacto
            </h3>
            <div className="space-y-4 text-sm text-gray-400 font-light">
              <div>
                <p className="text-white mb-1">Correo</p>
                <a
                  href="mailto:info@bdp.com.mx"
                  className="hover:text-white transition-colors"
                >
                  info@bdp.com.mx
                </a>
              </div>
              <div>
                <p className="text-white mb-1">Teléfonos</p>
                <a
                  href="tel:+525512345678"
                  className="hover:text-white transition-colors"
                >
                  (55) 1234.5678
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-light tracking-[0.2em] uppercase mb-6">
              Enlaces
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
                  href="#equipo"
                  className="hover:text-white transition-colors"
                >
                  Equipo
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

