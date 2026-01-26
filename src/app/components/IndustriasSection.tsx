"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function IndustriasSection() {
  const t = useTranslations("industries");
  const { ref, isIntersecting } = useIntersectionObserver();

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
      className="relative py-24 md:py-32 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Border divider with label */}
        <div className="border-t border-white/10 pt-6">
          <span
            className={`inline-block text-xs text-white/50 uppercase tracking-widest mb-12 md:mb-16 -mt-3 bg-slate-900 pr-4 transition-all duration-1000 ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {t("label")}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Image */}
          <div
            className={`relative aspect-[4/3] overflow-hidden rounded-lg transition-all duration-1000 delay-100 ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Image
              src="/newimages/banderas.webp"
              alt={t("title")}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              quality={100}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 delay-150 ${
                isIntersecting
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
                {t("title")}
              </h2>
              <p className="text-base text-white/60 font-light leading-relaxed">
                {t("description")}
              </p>
            </div>

            {/* Industries as simple list */}
            <div className="space-y-0 pt-8 border-t border-white/10">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`group flex items-center justify-between py-4 border-b border-white/5 hover:border-white/20 transition-all duration-300 ${
                    isIntersecting
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${250 + index * 60}ms` }}
                >
                  <span className="text-base text-white/80 font-light group-hover:text-white transition-colors">
                    {industry}
                  </span>
                  <span className="text-xs text-white/30 font-light">
                    _{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
