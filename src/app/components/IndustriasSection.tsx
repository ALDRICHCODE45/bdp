"use client";

import { useTranslations } from "next-intl";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import ProjectCard from "./ProjectCard";

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
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
      {/* Subtle blurred gradient effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/4 rounded-full blur-3xl" />
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
            {t("title").split(" ").map((word, i) => (
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

        {/* Projects Section */}
        <div className="mt-32 md:mt-40">
          <div
            className={`text-center mb-16 md:mb-20 transition-all ease-out ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDuration: "1400ms", transitionDelay: "200ms" }}
          >
            <p className="text-sm text-white/70 font-light tracking-[0.3em] uppercase mb-4">
              {t("projects.label")}
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
              {t("projects.title").split(" ").map((word, i) => (
                <span key={i}>
                  {word}
                  {i < t("projects.title").split(" ").length - 1 && " "}
                </span>
              ))}
            </h3>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-white/80 font-light leading-relaxed">
              {t("projects.description")}
            </p>
          </div>
          
          {/* Projects Grid - Asymmetric Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            <ProjectCard
              number={1}
              title={t("projects.project1.title")}
              category={t("projects.project1.category")}
              year={t("projects.project1.year")}
              description={t("projects.project1.description")}
              index={0}
              isVisible={isIntersecting}
              size="medium"
            />
            <ProjectCard
              number={2}
              title={t("projects.project2.title")}
              category={t("projects.project2.category")}
              year={t("projects.project2.year")}
              description={t("projects.project2.description")}
              index={1}
              isVisible={isIntersecting}
              size="medium"
            />
            <ProjectCard
              number={3}
              title={t("projects.project3.title")}
              category={t("projects.project3.category")}
              year={t("projects.project3.year")}
              description={t("projects.project3.description")}
              index={2}
              isVisible={isIntersecting}
              size="large"
            />
            <ProjectCard
              number={4}
              title={t("projects.project4.title")}
              category={t("projects.project4.category")}
              year={t("projects.project4.year")}
              description={t("projects.project4.description")}
              index={3}
              isVisible={isIntersecting}
              size="medium"
            />
            <ProjectCard
              number={5}
              title={t("projects.project5.title")}
              category={t("projects.project5.category")}
              year={t("projects.project5.year")}
              description={t("projects.project5.description")}
              index={4}
              isVisible={isIntersecting}
              size="medium"
            />
            <ProjectCard
              number={6}
              title={t("projects.project6.title")}
              category={t("projects.project6.category")}
              year={t("projects.project6.year")}
              description={t("projects.project6.description")}
              index={5}
              isVisible={isIntersecting}
              size="medium"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

