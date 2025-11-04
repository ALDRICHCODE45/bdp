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
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm md:text-base text-gray-300 font-light tracking-[0.3em] uppercase">
              Soluciones siempre
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight">
              Soluciones
              <br />
              <span className="font-normal">inteligentes</span>
            </h1>
          </div>

          <div className="space-y-4 pt-12">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
              Resultados
              <br />
              <span className="font-normal">seguros</span>
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light tracking-[0.3em] uppercase">
              Soluciones seguras
            </p>
          </div>

          <div className="pt-12">
            <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-200 font-light leading-relaxed">
              Somos una firma que se destaca por la resolución de situaciones
              complejas, preventivas o correctivas, con visión de negocio, a
              través de un profundo conocimiento del marco jurídico y de una
              adecuada interacción con grupos de interés.
            </p>
          </div>

          <div className="pt-8">
            <a
              href="#servicios"
              className="inline-block px-8 py-4 bg-white text-gray-900 text-sm font-light uppercase tracking-wider hover:bg-gray-100 transition-colors"
            >
              Descubre nuestros servicios
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
