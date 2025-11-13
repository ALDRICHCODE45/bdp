"use client";

import Image from "next/image";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

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
    title: "Reconocimiento en Litigio Estratégico",
    description:
      "El equipo de BDP ha sido reconocido entre las Firmas líderes en litigio estratégico, posicionándonos como un referente en el campo del derecho público.",
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
    title: "Proyectos Clave Liderados",
    description:
      "Hemos liderado proyectos clave como la regulación del cannabis, el federalismo energético sostenible, y el desarrollo de inversión público-privada en infraestructura.",
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
    title: "Enfoque Multidisciplinario",
    description:
      "La naturaleza de nuestros litigios requiere habilidades sólidas en diseño de estrategias integrales, políticas públicas aplicadas, gestión de crisis y riesgo reputacional.",
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
    title: "Enfoque en Resolución de Problemas",
    description:
      "Nuestro enfoque está orientado a la resolución de problemas, siempre buscando ofrecer valor añadido a nuestros clientes a través de soluciones integrales y personalizadas.",
  },
];

export default function WhyChooseUs() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      className="relative py-24 bg-slate-900 text-white overflow-hidden"
    >
      {/* Subtle blurred gradient effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div
            className={`relative transition-all ease-out ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDuration: "1600ms" }}
          >
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
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 p-8 shadow-xl border border-white/10">
              <p className="text-4xl font-light text-slate-900 mb-2">Primera</p>
              <p className="text-sm text-slate-700 font-light">
                Firma boutique en México en integrar litigio, derecho regulatorio y consultoría en políticas públicas
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            className={`transition-all ease-out delay-200 ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDuration: "1600ms" }}
          >
            <p className="text-sm text-white/70 font-light tracking-[0.3em] uppercase mb-4">
              Por Qué Elegirnos
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              La mejor <span className="font-normal">elección</span>
              <br />
              para tu caso
            </h2>
            <p className="text-base text-white/80 font-light leading-relaxed mb-12">
              BDP cuenta con un equipo de profesionales legales con amplia experiencia en la práctica de Derecho Público y disciplinas relacionadas. Contamos con alianzas estratégicas con Firmas de Abogados nacionales y extranjeras, y colaboramos activamente con organizaciones de la sociedad civil en litigios estratégicos y proyectos pro-bono.
            </p>

            {/* Features */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 transition-all ease-out ${
                    isIntersecting
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: `${300 + index * 100}ms`,
                    transitionDuration: "1200ms",
                  }}
                >
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center border border-white/10 text-white bg-white/3 hover:bg-white/5 transition-colors">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-light text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/70 font-light leading-relaxed">
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

