"use client";

import Image from "next/image";

const features = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
    title: "Experiencia Comprobada",
    description:
      "Más de dos décadas asesorando a empresas líderes y entidades gubernamentales en casos de alto impacto.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    ),
    title: "Resultados Rápidos",
    description:
      "Estrategias efectivas que minimizan tiempos de resolución sin comprometer la calidad del servicio.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
    ),
    title: "Equipo Multidisciplinario",
    description:
      "Profesionales especializados en diversas áreas del derecho trabajando de forma integrada.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
    ),
    title: "Enfoque en Negocios",
    description:
      "Soluciones legales alineadas con los objetivos comerciales y estratégicos de nuestros clientes.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative h-[600px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
                alt="Oficina moderna"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>
            {/* Overlay Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white p-8 shadow-lg">
              <p className="text-4xl font-light text-gray-900 mb-2">95%</p>
              <p className="text-sm text-gray-600 font-light">
                De nuestros clientes nos recomiendan
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <p className="text-sm text-gray-500 font-light tracking-[0.3em] uppercase mb-4">
              Por Qué Elegirnos
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              La mejor <span className="font-normal">elección</span>
              <br />
              para tu caso
            </h2>
            <p className="text-base text-gray-600 font-light leading-relaxed mb-12">
              Somos un despacho que se destaca por la resolución de situaciones
              complejas, preventivas o correctivas, con visión de negocio, a
              través de un profundo conocimiento del marco jurídico y de una
              adecuada interacción con grupos de interés.
            </p>

            {/* Features */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center border border-gray-200 text-gray-900">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-light text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

