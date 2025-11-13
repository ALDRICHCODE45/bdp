"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Litigio en Derecho Público",
    description:
      "BDP cuenta con una extensa experiencia en procedimientos de juicios de amparo, acciones de inconstitucionalidad y controversias constitucionales ante el Poder Judicial Federal, con una presencia particularmente fuerte ante la Suprema Corte de Justicia de la Nación. Nuestra Firma representa tanto a particulares —nacionales y extranjeros— como a autoridades públicas legítimas. A través de nuestras estrategias y argumentos de litigio constitucional, hemos logrado interpretaciones legales innovadoras y la expansión de derechos.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80",
  },
  {
    id: 2,
    title: "Derecho Regulatorio y Compliance",
    description:
      "Desarrollamos estrategias integrales para la prevención, gestión y remediación de riesgos regulatorios, integrando perspectivas de derecho público y corporativo. BDP ha desarrollado un nuevo enfoque en la práctica de la integridad y el buen gobierno corporativo, ofreciendo soluciones de due diligence preventivas y resilientes en áreas como anticorrupción, antilavado de dinero, fiscal, ambiental y agrario.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80",
  },
  {
    id: 3,
    title: "Derecho de la Energía y Sostenibilidad",
    description:
      "Área central de la firma que ofrece asesoría, consultoría y litigio de alta especialización regulatoria y técnica, cubriendo todos los eslabones del sector energético, desde la exploración hasta la distribución minorista. BDP ha desarrollado el concepto de Federalismo Energético para maximizar la utilización del potencial energético de México, promoviendo modelos de coinversión y proyectos estratégicos.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80",
  },
  {
    id: 4,
    title: "Contratación Pública y Proyectos Estratégicos",
    description:
      "Trayectoria comprobada en procesos de contratación pública y somos pioneros en el desarrollo e implementación de proyectos bajo el modelo de asociación público-privada (APP) en México. Los abogados de BDP han brindado asesoría a empresas y gobiernos locales en todas las fases del proceso, desde el diseño del proyecto y la evaluación de riesgos hasta licitación, concesión, adjudicación, financiamiento y bursatilización.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    bgImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80",
  },
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const currentService = services[currentIndex];

  return (
    <section
      id="servicios"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          key={currentService.id}
          src={currentService.bgImage}
          alt={currentService.title}
          fill
          className="object-cover transition-opacity duration-700 ease-in-out"
          priority={currentIndex === 0}
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/96 via-gray-900/92 to-gray-900/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_transparent_0%,_rgba(0,0,0,0.4)_70%)]" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Left Column - Content */}
          <div className="space-y-8 text-white">
            {/* Pagination */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-light tracking-wider">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(services.length).padStart(2, "0")}
              </span>
            </div>

            {/* Section Label */}
            <div>
              <p className="text-xs font-light tracking-[0.3em] uppercase text-white/70 mb-4">
                Áreas de Práctica
              </p>
            </div>

            {/* Service Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              {currentService.title}
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-white/90 font-light leading-relaxed max-w-2xl">
              {currentService.description}
            </p>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={prevService}
                className="w-12 h-12 rounded-full border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
                aria-label="Servicio anterior"
              >
                <svg
                  className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button
                onClick={nextService}
                className="w-12 h-12 rounded-full border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
                aria-label="Siguiente servicio"
              >
                <svg
                  className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>

            {/* Service Indicators */}
            <div className="flex items-center space-x-2 pt-4">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-white"
                      : "w-1 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Ir al servicio ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative hidden lg:block">
            <div className="relative h-[600px] lg:h-[700px] overflow-hidden rounded-3xl">
              <Image
                key={currentService.id}
                src={currentService.image}
                alt={currentService.title}
                fill
                className="object-cover transition-opacity duration-700 ease-in-out"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
