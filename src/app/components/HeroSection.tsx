"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ minHeight: "100dvh" }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center py-12 sm:py-0">
        <div className="space-y-6 sm:space-y-8 md:space-y-10">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white leading-tight max-w-5xl mx-auto px-2">
            Soluciones Inteligentes para
            <br />
            Resultados Seguros
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed px-4">
            Firma especializada en litigio y consultoría multidisciplinaria, con
            visión de negocio y profundo conocimiento del marco jurídico para la
            resolución de situaciones complejas.
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4">
            <a
              href="#servicios"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 text-sm font-normal rounded-lg hover:bg-gray-100 transition-colors shadow-lg text-center"
            >
              Descubre nuestros servicios
            </a>
            <a
              href="#contacto"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white/30 text-white text-sm font-normal rounded-lg hover:bg-white/10 hover:border-white/50 transition-colors text-center"
            >
              Agenda una consulta
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
