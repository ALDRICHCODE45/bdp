"use client";

const industries = [
  "Energía",
  "Infraestructura",
  "Gobierno y Sector Público",
  "Tecnología",
  "Telecomunicaciones",
  "Inmobiliario",
  "Minería",
  "Manufactura",
  "Servicios Financieros",
  "Healthcare",
  "Retail",
  "Educación",
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
            La trayectoria de la firma se ve fortalecida con el liderazgo de
            nuestros clientes que participan en las siguientes industrias.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-light text-gray-900 mb-2">
              20+
            </div>
            <p className="text-sm text-gray-600 font-light tracking-wider uppercase">
              Años de Experiencia
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-light text-gray-900 mb-2">
              500+
            </div>
            <p className="text-sm text-gray-600 font-light tracking-wider uppercase">
              Casos Exitosos
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-light text-gray-900 mb-2">
              95%
            </div>
            <p className="text-sm text-gray-600 font-light tracking-wider uppercase">
              Tasa de Éxito
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

