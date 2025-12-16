"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ServicesSection() {
  const t = useTranslations("services");
  const tCommon = useTranslations("common");

  const services = [
    {
      id: 1,
      title: t("service1.title"),
      description: t("service1.description"),
      image: "/gallery/edificio.jpeg",
      bgImage: "/gallery/edificio.jpeg",
    },
    {
      id: 2,
      title: t("service2.title"),
      description: t("service2.description"),
      image: "/gallery/jardin.jpeg",
      bgImage: "/gallery/jardin.jpeg",
    },
    {
      id: 3,
      title: t("service3.title"),
      description: t("service3.description"),
      image: "/gallery/comedor.jpeg",
      bgImage: "/gallery/comedor.jpeg",
    },
    {
      id: 4,
      title: t("service4.title"),
      description: t("service4.description"),
      image: "/gallery/comedor2.jpeg",
      bgImage: "/gallery/comedor2.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextService = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const prevService = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const goToService = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const currentService = services[currentIndex];

  return (
    <section
      id="servicios"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div
          key={`bg-${currentService.id}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={currentService.bgImage}
            alt={currentService.title}
            fill
            className="object-cover"
            priority={currentIndex === 0}
            quality={90}
          />
        </div>
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
            <div
              className={`flex items-center space-x-4 transition-all duration-500 ease-out ${
                isTransitioning
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <span className="text-sm font-light tracking-wider">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(services.length).padStart(2, "0")}
              </span>
            </div>

            {/* Section Label */}
            <div
              className={`transition-all duration-500 ease-out delay-75 ${
                isTransitioning
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <p className="text-xs font-light tracking-[0.3em] uppercase text-white/70 mb-4">
                {t("sectionLabel")}
              </p>
            </div>

            {/* Service Title */}
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight transition-all duration-700 ease-out delay-100 ${
                isTransitioning
                  ? "opacity-0 translate-y-8"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {currentService.title}
            </h2>

            {/* Description */}
            <p
              className={`text-base md:text-lg text-white/90 font-light leading-relaxed max-w-2xl transition-all duration-700 ease-out delay-150 ${
                isTransitioning
                  ? "opacity-0 translate-y-8"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {currentService.description}
            </p>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={prevService}
                className="w-12 h-12 rounded-full border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
                aria-label={tCommon("servicioAnterior")}
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
                aria-label={tCommon("siguienteServicio")}
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
            <div
              className={`flex items-center space-x-2 pt-4 transition-all duration-500 ease-out delay-300 ${
                isTransitioning
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToService(index)}
                  className={`h-1 transition-all duration-500 ease-out ${
                    index === currentIndex
                      ? "w-8 bg-white"
                      : "w-1 bg-white/30 hover:bg-white/50 hover:w-2"
                  }`}
                  aria-label={`${tCommon("irAlServicio")} ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative hidden lg:block">
            <div
              className={`relative h-[600px] lg:h-[700px] overflow-hidden rounded-3xl transition-all duration-1000 ease-out delay-200 ${
                isTransitioning
                  ? "opacity-0 scale-95 translate-x-8"
                  : "opacity-100 scale-100 translate-x-0"
              }`}
            >
              <Image
                key={currentService.id}
                src={currentService.image}
                alt={currentService.title}
                fill
                className="object-cover"
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
