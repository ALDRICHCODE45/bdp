"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function WhyChooseUs() {
  const t = useTranslations("whyChooseUs");
  const { ref, isIntersecting } = useIntersectionObserver();

  const highlights = [
    t("feature1.title"),
    t("feature2.title"),
    t("feature3.title"),
    t("feature4.title"),
  ].filter(Boolean);

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Border divider with label */}
        <div className="border-t border-white/10 pt-6">
          <span
            className={`inline-block text-xs text-white/50 uppercase tracking-widest mb-12 md:mb-16 -mt-3 bg-slate-950 pr-4 transition-all duration-1000 ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {t("label")}
          </span>

          {/* Header grid */}
          <div
            className={`grid md:grid-cols-2 gap-6 md:gap-12 mb-16 md:mb-24 transition-all duration-1000 delay-100 ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
              {t("title")}
            </h2>
            <p className="text-base text-white/60 font-light leading-relaxed self-end">
              {t("description")}
            </p>
          </div>
        </div>

        {/* Features Grid - 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-24">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`group p-6 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1 ${
                isIntersecting
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              <span className="text-xs text-white/40 font-light mb-4 block">
                _{String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm md:text-base text-white/80 font-light leading-relaxed group-hover:text-white transition-colors">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Panoramic Accent Image */}
        <div
          className={`relative aspect-[21/9] overflow-hidden rounded-lg transition-all duration-1000 delay-500 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Image
            src="/newimages/recepcion.webp"
            alt={t("overlay.description")}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            quality={100}
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
