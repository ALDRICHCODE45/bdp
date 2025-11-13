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
      className="relative py-24 bg-slate-900 text-white overflow-hidden"
    >
      {/* Subtle blurred gradient effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
      
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

