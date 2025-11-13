"use client";

export default function NewCallToAction() {
  return (
    <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
      {/* Subtle blurred gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <div className="space-y-8">
          <p className="text-sm text-white/70 font-light tracking-[0.3em] uppercase">
            ¿Necesitas Asesoría Legal?
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            Solucionamos tu <span className="font-normal">problema</span>
          </h2>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-white/80 font-light leading-relaxed">
            Contáctanos hoy para una consulta inicial. Nuestro equipo de profesionales legales con amplia experiencia en Derecho Público está listo para analizar tu caso y ofrecerte soluciones integrales orientadas a la resolución de problemas.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 text-sm font-light uppercase tracking-wider hover:bg-white/90 transition-colors"
            >
              Contáctanos
            </a>
            <a
              href="tel:+525555255593"
              className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white text-sm font-light uppercase tracking-wider hover:bg-white/10 hover:border-white/50 transition-colors"
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
              <h3 className="text-base font-light text-white uppercase tracking-wider">
                Email
              </h3>
              <a
                href="mailto:info@bdp.com.mx"
                className="text-base text-white/80 font-light hover:text-white transition-colors block"
              >
                info@bdp.com.mx
              </a>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto flex items-center justify-center border border-white/10 bg-white/3">
                <svg
                  className="w-8 h-8 text-white"
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
              <h3 className="text-base font-light text-white uppercase tracking-wider">
                Teléfono
              </h3>
              <a
                href="tel:+525555255593"
                className="text-base text-white/80 font-light hover:text-white transition-colors block"
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
