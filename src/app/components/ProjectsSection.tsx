"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const t = useTranslations("industries");
  const { ref, isIntersecting } = useIntersectionObserver();

  const projects = [
    {
      number: 1,
      title: t("projects.project1.title"),
      category: t("projects.project1.category"),
      year: t("projects.project1.year"),
      description: t("projects.project1.description"),
    },
    {
      number: 2,
      title: t("projects.project2.title"),
      category: t("projects.project2.category"),
      year: t("projects.project2.year"),
      description: t("projects.project2.description"),
    },
    {
      number: 3,
      title: t("projects.project3.title"),
      category: t("projects.project3.category"),
      year: t("projects.project3.year"),
      description: t("projects.project3.description"),
    },
    {
      number: 4,
      title: t("projects.project4.title"),
      category: t("projects.project4.category"),
      year: t("projects.project4.year"),
      description: t("projects.project4.description"),
    },
    {
      number: 5,
      title: t("projects.project5.title"),
      category: t("projects.project5.category"),
      year: t("projects.project5.year"),
      description: t("projects.project5.description"),
    },
    {
      number: 6,
      title: t("projects.project6.title"),
      category: t("projects.project6.category"),
      year: t("projects.project6.year"),
      description: t("projects.project6.description"),
    },
  ];

  return (
    <section
      ref={ref}
      id="proyectos"
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
            {t("projects.label")}
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
              {t("projects.title")}
            </h2>
            <p className="text-base text-white/60 font-light leading-relaxed self-end">
              {t("projects.description")}
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              number={project.number}
              title={project.title}
              category={project.category}
              year={project.year}
              description={project.description}
              index={index}
              isVisible={isIntersecting}
            />
          ))}
        </div>

        {/* Accent Image */}
        <div
          className={`relative aspect-[21/9] overflow-hidden rounded-lg transition-all duration-1000 delay-700 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Image
            src="/newimages/sala.webp"
            alt={t("projects.title")}
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
