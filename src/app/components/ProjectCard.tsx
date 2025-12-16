"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  number: number;
  title: string;
  category: string;
  year: string;
  description: string;
  index: number;
  isVisible: boolean;
  size?: "small" | "medium" | "large";
}

export default function ProjectCard({
  number,
  title,
  category,
  year,
  description,
  index,
  isVisible,
  size = "medium",
}: ProjectCardProps) {
  const t = useTranslations("common");
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 50, y: 50 });
  };

  // Size classes for asymmetric layout - creating visual interest
  const sizeClasses = {
    small: "md:col-span-1 lg:col-span-1",
    medium: "md:col-span-1 lg:col-span-1",
    large: "md:col-span-2 lg:col-span-2",
  };

  // Animation delay based on index
  const animationDelay = 100 + index * 100;

  return (
    <div
      ref={cardRef}
      className={`group relative ${sizeClasses[size]} transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionDelay: `${animationDelay}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card Container */}
      <div
        className={`relative h-full ${
          size === "large" 
            ? "min-h-[300px] md:min-h-[360px] lg:min-h-[420px]" 
            : "min-h-[300px] md:min-h-[340px] lg:min-h-[380px]"
        } bg-white/3 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:bg-white/5 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-2`}
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 50%, transparent 100%)`
            : undefined,
        }}
      >
        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Spotlight Effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.15) 0%, transparent 70%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col p-6 md:p-8 lg:p-10">
          {/* Number */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
            <span className="text-6xl md:text-7xl lg:text-8xl font-light text-white leading-none">
              {String(number).padStart(2, "0")}
            </span>
          </div>

          {/* Category / Year */}
          <div className="mb-6 md:mb-8 flex items-center justify-between text-white/70 text-xs md:text-sm font-light tracking-wide">
            <span className="uppercase">{category}</span>
            <span className="text-white/60">{year}</span>
          </div>

          {/* Title */}
          <h3 className={`font-light text-white mb-4 md:mb-6 leading-tight group-hover:text-white transition-colors duration-500 line-clamp-2 ${
            size === "large" 
              ? "text-xl md:text-2xl lg:text-3xl" 
              : "text-lg md:text-xl lg:text-2xl"
          }`}>
            {title}
          </h3>

          {/* Description - Revealed on Hover */}
          <div
            className={`overflow-hidden transition-all duration-700 ease-out ${
              isHovered
                ? "max-h-64 md:max-h-72 opacity-100 mt-2"
                : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <p className="text-sm md:text-base font-light text-white/70 leading-relaxed pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors duration-500">
              {description}
            </p>
          </div>

          {/* Hover Indicator */}
          <div className="mt-auto pt-4 md:pt-6">
            <div className="flex items-center text-xs font-light text-white/50 group-hover:text-white/70 transition-colors duration-500">
              <span className="mr-2">{t("verMas")}</span>
              <span className="inline-block w-8 h-px bg-white/30 group-hover:bg-white/60 transition-all duration-500 group-hover:w-12" />
            </div>
          </div>

          {/* Animated Border */}
          <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 transition-all duration-500 pointer-events-none" />
          
          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-700 ease-out" />
        </div>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  );
}

