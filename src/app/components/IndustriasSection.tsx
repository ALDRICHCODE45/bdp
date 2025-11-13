"use client";

const industries = [
  "Energía",
  "Infraestructura",
  "Gobierno y Sector Público",
  "Finanzas",
  "Minería",
  "Agroindustria",
  "Inmobiliario",
];

export default function IndustriasSection() {
  return (
    <section id="industrias" className="relative py-24 bg-slate-900 text-white overflow-hidden">
      {/* Subtle blurred gradient effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/4 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500/4 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-white/70 font-light tracking-[0.3em] uppercase mb-4">
            Industrias
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Experiencia <span className="font-normal">Multisectorial</span>
          </h2>
          <p className="max-w-3xl mx-auto text-base text-white/80 font-light leading-relaxed">
            Ofrecemos servicios especializados a sectores estratégicos, aplicando programas de cumplimiento integrales y asesoría legal altamente especializada.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative h-40 bg-white/3 hover:bg-white/5 transition-all duration-300 flex items-center justify-center p-6 border border-white/8 hover:border-white/15 cursor-pointer overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent" />
              </div>
              
              {/* Content */}
              <h3 className="relative z-10 text-center text-sm md:text-base font-light text-white transition-colors">
                {industry}
              </h3>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
              Proyectos Clave Liderados
            </h3>
            <p className="max-w-3xl mx-auto text-base text-white/80 font-light leading-relaxed">
              Los socios y asociados de BDP han liderado proyectos clave que han impactado significativamente el marco jurídico y regulatorio de México.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white/3 border border-white/8 hover:bg-white/5 transition-colors">
              <p className="text-sm text-white/90 font-light">
                La regulación del cannabis en México
              </p>
            </div>
            <div className="p-6 bg-white/3 border border-white/8 hover:bg-white/5 transition-colors">
              <p className="text-sm text-white/90 font-light">
                El modelo para el federalismo energético sostenible
              </p>
            </div>
            <div className="p-6 bg-white/3 border border-white/8 hover:bg-white/5 transition-colors">
              <p className="text-sm text-white/90 font-light">
                Desarrollo de inversión público-privada en infraestructura
              </p>
            </div>
            <div className="p-6 bg-white/3 border border-white/8 hover:bg-white/5 transition-colors">
              <p className="text-sm text-white/90 font-light">
                La transición al nuevo sistema de justicia penal
              </p>
            </div>
            <div className="p-6 bg-white/3 border border-white/8 hover:bg-white/5 transition-colors">
              <p className="text-sm text-white/90 font-light">
                La recuperación de activos públicos
              </p>
            </div>
            <div className="p-6 bg-white/3 border border-white/8 hover:bg-white/5 transition-colors">
              <p className="text-sm text-white/90 font-light">
                El programa para el control de importaciones de armas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

