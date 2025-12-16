"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function WhyChooseUs() {
  const t = useTranslations("whyChooseUs");

  const highlights = [
    t("feature1.title"),
    t("feature2.title"),
    t("feature3.title"),
    t("feature4.title"),
  ].filter(Boolean);

  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-slate-950 text-white"
    >
      <div className="absolute inset-0">
        <Image
          src="/gallery/jardin2.jpeg"
          alt={t("overlay.description")}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="absolute inset-0 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/85" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 py-24 md:py-28">
        <div
          className={`max-w-3xl space-y-8 transition-all duration-1000 ease-out ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center space-x-3 text-white/70 tracking-[0.3em] text-xs uppercase font-light">
            <span className="h-px w-8 bg-white/30" />
            <span>{t("label")}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light leading-tight text-white">
            {t("title")}
          </h2>

          <p className="text-base md:text-lg text-white/80 font-light leading-relaxed">
            {t("description")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`rounded-2xl border border-white/8 bg-white/5 backdrop-blur-sm p-6 flex items-start space-x-3 transition-all duration-800 ease-out ${
                  isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${200 + index * 120}ms` }}
              >
                <span className="mt-1 text-sm text-white/50">•</span>
                <div className="text-white/90 text-sm md:text-base font-light leading-relaxed">
                  {item}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <div
              className={`inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/20 px-5 py-3 backdrop-blur-sm transition-all duration-800 ease-out ${
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.25em] text-white/60 font-light">
                  {t("overlay.first")}
                </span>
                <span className="text-sm text-white/85 font-light">
                  {t("overlay.description")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

