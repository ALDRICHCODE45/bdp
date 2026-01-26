"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function ValuesSection() {
  const t = useTranslations("values");
  const { ref, isIntersecting } = useIntersectionObserver();

  const values = [
    {
      title: t("value1.title"),
      description: t("value1.description"),
    },
    {
      title: t("value2.title"),
      description: t("value2.description"),
    },
    {
      title: t("value3.title"),
      description: t("value3.description"),
    },
    {
      title: t("value4.title"),
      description: t("value4.description"),
    },
  ];

  return (
    <section
      ref={ref}
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

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-24">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group space-y-4 transition-all duration-700 ${
                isIntersecting
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              {/* Number */}
              <span className="text-xs text-white/40 font-light">
                _{String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-light text-white group-hover:text-white/90 transition-colors">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/60 font-light leading-relaxed">
                {value.description}
              </p>

              {/* Subtle divider */}
              <div className="pt-4">
                <div className="h-px w-12 bg-white/10 group-hover:w-24 group-hover:bg-white/20 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Accent Image */}
        <div
          className={`relative aspect-[21/9] overflow-hidden rounded-lg transition-all duration-1000 delay-500 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Image
            src="/newimages/cuadro.webp"
            alt={t("title")}
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
