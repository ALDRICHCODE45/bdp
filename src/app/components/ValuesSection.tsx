"use client";

const values = [
  {
    title: "Calidad Profesional",
    description:
      "Para asegurar la más alta calidad profesional y optimizar las soluciones ofrecidas a nuestros clientes, hemos establecido alianzas estratégicas con Firmas de Abogados nacionales y extranjeras.",
  },
  {
    title: "Integridad y Compliance",
    description:
      "Hemos desarrollado un nuevo enfoque en la práctica de la integridad y el buen gobierno corporativo, ofreciendo soluciones de due diligence preventivas y resilientes.",
  },
  {
    title: "Disciplinas Innovadoras",
    description:
      "BDP innova mediante técnicas esenciales para el desarrollo humano sostenible, como el federalismo y el municipalismo, aplicados a áreas como el Derecho Energético, Ambiental, del Agua y Agrario.",
  },
  {
    title: "Valor Añadido",
    description:
      "Nuestro enfoque está orientado a la resolución de problemas, siempre buscando ofrecer valor añadido a nuestros clientes a través de soluciones integrales y personalizadas.",
  },
];

export default function ValuesSection() {
  return (
    <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2022/11/28/141163-777038894_large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm text-gray-400 font-light tracking-[0.3em] uppercase mb-4">
            Nuestra Cultura
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Nuestros <span className="font-normal">Valores</span>
          </h2>
          <p className="max-w-3xl mx-auto text-base text-gray-300 font-light leading-relaxed">
            Los principios fundamentales que guían nuestra práctica profesional y definen nuestro compromiso con la excelencia, la integridad y la innovación en el derecho público.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 border-l-2 border-white/20 hover:border-white"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-white/30 group-hover:border-white transition-colors">
                  <span className="text-2xl font-light">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light mb-4 group-hover:text-white transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

