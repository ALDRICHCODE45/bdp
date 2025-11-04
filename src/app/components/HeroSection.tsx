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
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="space-y-10">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight max-w-5xl mx-auto">
            Soluciones Inteligentes para
            <br />
            Resultados Seguros
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            Firma especializada en litigio y consultoría multidisciplinaria, con
            visión de negocio y profundo conocimiento del marco jurídico para la
            resolución de situaciones complejas.
          </p>

          {/* CTA Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#servicios"
              className="px-8 py-4 bg-white text-gray-900 text-sm font-normal rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Descubre nuestros servicios
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white text-sm font-normal rounded-lg hover:bg-white/10 hover:border-white/50 transition-colors"
            >
              Agenda una consulta
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
