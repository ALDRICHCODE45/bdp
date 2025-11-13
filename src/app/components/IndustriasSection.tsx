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
    <section id="industrias" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-gray-500 font-light tracking-[0.3em] uppercase mb-4">
            Industrias
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Experiencia <span className="font-normal">Multisectorial</span>
          </h2>
          <p className="max-w-3xl mx-auto text-base text-gray-600 font-light leading-relaxed">
            Ofrecemos servicios especializados a sectores estratégicos, aplicando programas de cumplimiento integrales y asesoría legal altamente especializada.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative h-40 bg-white hover:bg-gray-900 transition-all duration-300 flex items-center justify-center p-6 border border-gray-200 hover:border-gray-900 cursor-pointer overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-transparent" />
              </div>
              
              {/* Content */}
              <h3 className="relative z-10 text-center text-sm md:text-base font-light text-gray-900 group-hover:text-white transition-colors">
                {industry}
              </h3>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
              Proyectos Clave Liderados
            </h3>
            <p className="max-w-3xl mx-auto text-base text-gray-600 font-light leading-relaxed">
              Los socios y asociados de BDP han liderado proyectos clave que han impactado significativamente el marco jurídico y regulatorio de México.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-gray-200">
              <p className="text-sm text-gray-700 font-light">
                La regulación del cannabis en México
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200">
              <p className="text-sm text-gray-700 font-light">
                El modelo para el federalismo energético sostenible
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200">
              <p className="text-sm text-gray-700 font-light">
                Desarrollo de inversión público-privada en infraestructura
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200">
              <p className="text-sm text-gray-700 font-light">
                La transición al nuevo sistema de justicia penal
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200">
              <p className="text-sm text-gray-700 font-light">
                La recuperación de activos públicos
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200">
              <p className="text-sm text-gray-700 font-light">
                El programa para el control de importaciones de armas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

