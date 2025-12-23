"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function IndustriasSection() {
  const t = useTranslations("industries");
  const { ref, isIntersecting } = useIntersectionObserver();

  // Definir industries directamente desde las traducciones
  const industries: string[] = [
    t("industries.0") || "Energía",
    t("industries.1") || "Infraestructura",
    t("industries.2") || "Gobierno y Sector Público",
    t("industries.3") || "Finanzas",
    t("industries.4") || "Minería",
    t("industries.5") || "Agroindustria",
    t("industries.6") || "Inmobiliario",
  ].filter(Boolean) as string[];

  return (
    <section
      ref={ref}
      id="industrias"
      className="relative py-24 text-white overflow-hidden"
    >
      {/* Background Map Image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0">
          <Image
            src="/gallery/mapa.jpeg"
            alt="Mapa de México"
            fill
            className="object-cover"
            quality={100}
            sizes="100vw"
            priority={false}
          />
        </div>
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/55 to-slate-900/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.1)_100%)]" />
      </div>

      {/* Subtle blurred gradient effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/3 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/4 rounded-full blur-3xl opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all ease-out ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDuration: "1400ms" }}
        >
          <p className="text-sm text-white/70 font-light tracking-[0.3em] uppercase mb-4">
            {t("label")}
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            {t("title")
              .split(" ")
              .map((word, i) => (
                <span key={i}>
                  {i === 1 ? <span className="font-normal">{word}</span> : word}
                  {i < t("title").split(" ").length - 1 && " "}
                </span>
              ))}
          </h2>
          <p className="max-w-3xl mx-auto text-base text-white/80 font-light leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group relative h-40 bg-white/4 hover:bg-white/6 transition-all duration-500 flex items-center justify-center p-6 border border-white/10 hover:border-white/20 cursor-pointer overflow-hidden ${
                isIntersecting
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${200 + index * 60}ms`,
                transitionDuration: "1100ms",
              }}
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
      </div>
    </section>
  );
}
