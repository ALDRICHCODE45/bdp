"use client";

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
      className="relative py-24 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Image with overlay/blur */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <img
            src="/gallery/jardin3.jpeg"
            alt={t("title")}
          className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/65 to-slate-950/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all ease-out ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDuration: "1600ms" }}
        >
          <p className="text-sm text-gray-400 font-light tracking-[0.3em] uppercase mb-4">
            {t("label")}
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            {t("title").split(" ").map((word, i) => (
              <span key={i}>
                {i === 1 ? <span className="font-normal">{word}</span> : word}
                {i < t("title").split(" ").length - 1 && " "}
              </span>
            ))}
          </h2>
          <p className="max-w-3xl mx-auto text-base text-gray-300 font-light leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group p-8 bg-white/3 hover:bg-white/5 transition-all duration-300 border-l-2 border-white/10 hover:border-white/20 ${
                isIntersecting
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${200 + index * 100}ms`,
                transitionDuration: "1200ms",
              }}
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

