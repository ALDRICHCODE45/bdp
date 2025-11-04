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
            Solucionamos tu{" "}
            <span className="font-normal">problema</span>
          </h2>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 font-light leading-relaxed">
            Contáctanos hoy para una consulta inicial. Nuestro equipo de
            expertos está listo para analizar tu caso y ofrecerte soluciones
            estratégicas.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white text-sm font-light uppercase tracking-wider hover:bg-gray-800 transition-colors"
            >
              Contáctanos
            </a>
            <a
              href="tel:+525512345678"
              className="w-full sm:w-auto px-8 py-4 border border-gray-900 text-gray-900 text-sm font-light uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-colors"
            >
              Llámanos: (55) 1234.5678
            </a>
          </div>

          {/* Contact Methods */}
          <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto flex items-center justify-center border border-gray-300">
                <svg
                  className="w-6 h-6 text-gray-700"
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
              <h3 className="text-sm font-light text-gray-900 uppercase tracking-wider">
                Email
              </h3>
              <p className="text-sm text-gray-600 font-light">
                info@bdp.com.mx
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto flex items-center justify-center border border-gray-300">
                <svg
                  className="w-6 h-6 text-gray-700"
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
              <h3 className="text-sm font-light text-gray-900 uppercase tracking-wider">
                Teléfono
              </h3>
              <p className="text-sm text-gray-600 font-light">
                (55) 1234.5678
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto flex items-center justify-center border border-gray-300">
                <svg
                  className="w-6 h-6 text-gray-700"
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
              <h3 className="text-sm font-light text-gray-900 uppercase tracking-wider">
                Oficina
              </h3>
              <p className="text-sm text-gray-600 font-light">
                Ciudad de México
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

