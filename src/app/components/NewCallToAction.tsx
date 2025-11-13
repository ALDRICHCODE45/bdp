"use client";

export default function NewCallToAction() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <div className="space-y-8">
          <p className="text-sm text-gray-500 font-light tracking-[0.3em] uppercase">
            ¿Necesitas Asesoría Legal?
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
            Solucionamos tu <span className="font-normal">problema</span>
          </h2>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 font-light leading-relaxed">
            Contáctanos hoy para una consulta inicial. Nuestro equipo de profesionales legales con amplia experiencia en Derecho Público está listo para analizar tu caso y ofrecerte soluciones integrales orientadas a la resolución de problemas.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white text-sm font-light uppercase tracking-wider hover:bg-gray-800 transition-colors"
            >
              Contáctanos
            </a>
            <a
              href="tel:+525555255593"
              className="w-full sm:w-auto px-8 py-4 border border-gray-900 text-gray-900 text-sm font-light uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-colors"
            >
              Llámanos: 55-55255593
            </a>
          </div>

          {/* Contact Methods */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto flex items-center justify-center border border-gray-300">
                <svg
                  className="w-8 h-8 text-gray-700"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-base font-light text-gray-900 uppercase tracking-wider">
                Email
              </h3>
              <a
                href="mailto:info@bdp.com.mx"
                className="text-base text-gray-600 font-light hover:text-gray-900 transition-colors block"
              >
                info@bdp.com.mx
              </a>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto flex items-center justify-center border border-gray-300">
                <svg
                  className="w-8 h-8 text-gray-700"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-base font-light text-gray-900 uppercase tracking-wider">
                Teléfono
              </h3>
              <a
                href="tel:+525555255593"
                className="text-base text-gray-600 font-light hover:text-gray-900 transition-colors block"
              >
                55-55255593
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
