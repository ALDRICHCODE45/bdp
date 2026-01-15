"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const t = useTranslations("industries");
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      id="proyectos"
      className="relative py-24 text-white overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />

      {/* Subtle blurred gradient effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/3 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-white/4 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start mb-12 md:mb-20">
          {/* Left Column - Image */}
          <div
            className={`relative transition-all ease-out ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDuration: "1400ms" }}
          >
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl">
              <Image
                src="/gallery2/salajuntas.webp"
                alt="Balcón"
                fill
                className="object-cover"
                quality={100}
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Column - Header Content */}
          <div
            className={`flex flex-col lg:justify-center transition-all ease-out delay-200 ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDuration: "1400ms" }}
          >
            <p className="text-sm text-white/70 font-light tracking-[0.3em] uppercase mb-4">
              {t("projects.label")}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 md:mb-6">
              {t("projects.title")
                .split(" ")
                .map((word, i) => (
                  <span key={i}>
                    {word}
                    {i < t("projects.title").split(" ").length - 1 && " "}
                  </span>
                ))}
            </h2>
            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed mb-6 md:mb-8">
              {t("projects.description")}
            </p>

            {/* First Project Card */}
            <div className="lg:mt-auto">
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
            </div>
          </div>
        </div>

        {/* Projects Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-8 md:mt-0">
          <ProjectCard
            number={2}
            title={t("projects.project2.title")}
            category={t("projects.project2.category")}
            year={t("projects.project2.year")}
            description={t("projects.project2.description")}
            index={0}
            isVisible={isIntersecting}
            size="medium"
          />
          <ProjectCard
            number={3}
            title={t("projects.project3.title")}
            category={t("projects.project3.category")}
            year={t("projects.project3.year")}
            description={t("projects.project3.description")}
            index={1}
            isVisible={isIntersecting}
            size="large"
          />
          <ProjectCard
            number={4}
            title={t("projects.project4.title")}
            category={t("projects.project4.category")}
            year={t("projects.project4.year")}
            description={t("projects.project4.description")}
            index={2}
            isVisible={isIntersecting}
            size="medium"
          />
          <ProjectCard
            number={5}
            title={t("projects.project5.title")}
            category={t("projects.project5.category")}
            year={t("projects.project5.year")}
            description={t("projects.project5.description")}
            index={3}
            isVisible={isIntersecting}
            size="medium"
          />
          <ProjectCard
            number={6}
            title={t("projects.project6.title")}
            category={t("projects.project6.category")}
            year={t("projects.project6.year")}
            description={t("projects.project6.description")}
            index={4}
            isVisible={isIntersecting}
            size="medium"
          />
        </div>
      </div>
    </section>
  );
}
