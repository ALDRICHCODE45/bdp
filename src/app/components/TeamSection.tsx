"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
// Helper function to get initials from name
const getInitials = (name: string): string => {
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

// Helper function to format name to show only first name and first last name
const formatShortName = (name: string): string => {
  const parts = name.split(" ").filter(part => part.length > 0);
  if (parts.length >= 2) {
    return `${parts[0]} ${parts[1]}`;
  }
  return name;
};

export default function TeamSection() {
  const t = useTranslations("team");
  const { ref, isIntersecting } = useIntersectionObserver();
  
  const teamMembers = [
    {
      id: 1,
      name: t("members.roberto.name"),
      role: t("members.roberto.role"),
      description: t("members.roberto.description"),
      credentials: t("members.roberto.credentials"),
      experience: t("members.roberto.experience"),
    },
    {
      id: 2,
      name: t("members.carlos.name"),
      role: t("members.carlos.role"),
      description: t("members.carlos.description"),
      credentials: t("members.carlos.credentials"),
      experience: t("members.carlos.experience"),
    },
    {
      id: 3,
      name: t("members.manuel.name"),
      role: t("members.manuel.role"),
      description: t("members.manuel.description"),
      credentials: t("members.manuel.credentials"),
      experience: t("members.manuel.experience"),
    },
    {
      id: 4,
      name: t("members.gonzalo.name"),
      role: t("members.gonzalo.role"),
      description: t("members.gonzalo.description"),
    },
    {
      id: 5,
      name: t("members.alonso.name"),
      role: t("members.alonso.role"),
      description: t("members.alonso.description"),
    },
    {
      id: 6,
      name: t("members.paulina.name"),
      role: t("members.paulina.role"),
      description: t("members.paulina.description"),
    },
    {
      id: 7,
      name: t("members.jose.name"),
      role: t("members.jose.role"),
      description: t("members.jose.description"),
    },
    {
      id: 8,
      name: t("members.aldo.name"),
      role: t("members.aldo.role"),
      description: t("members.aldo.description"),
    },
    {
      id: 9,
      name: t("members.iliana.name"),
      role: t("members.iliana.role"),
      description: t("members.iliana.description"),
    },
  ];

  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const toggleMember = (id: number) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  return (
    <section
      ref={ref}
      id="equipo"
      className="relative py-24 bg-slate-950 text-white overflow-hidden"
    >
      {/* Subtle gradients + texture */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 0.5px, transparent 0.5px)`,
            backgroundSize: "28px 28px",
          }}
        />
        {/* Slim photographic accent */}
        <div className="absolute inset-y-10 right-6 w-[14px] rounded-full overflow-hidden opacity-25">
          <img
            src="/gallery/jardin3.jpeg"
            alt={t("title")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 backdrop-blur-[6px] bg-slate-950/50" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all ease-out ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDuration: "1400ms" }}
        >
          <p className="text-sm text-white/70 font-light tracking-[0.3em] uppercase mb-4">
            {t("label")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
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

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => {
            const initials = getInitials(member.name);
            const isExpanded = expandedMember === member.id;

            return (
              <div
                key={member.id}
                className={`group relative bg-white/4 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/6 transition-all duration-700 overflow-hidden cursor-pointer rounded-2xl ${
                  isExpanded
                    ? "lg:col-span-2 lg:row-span-2 border-white/30 bg-white/8"
                    : ""
                } ${
                  isIntersecting
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${200 + index * 50}ms`,
                  transitionDuration: "1200ms",
                }}
                onClick={() => toggleMember(member.id)}
              >
                {/* Content */}
                <div className="p-6 md:p-8 h-full flex flex-col">
                  <div className="flex flex-col lg:flex-row gap-6 md:gap-8 flex-1">
                    {/* Avatar with Initials */}
                    <div className="flex-shrink-0 flex items-start justify-center lg:justify-start">
                      <div
                        className={`relative w-20 h-20 md:w-24 md:h-24 lg:w-26 lg:h-26 rounded-full flex items-center justify-center transition-all duration-700 group-hover:scale-105 ${
                          isExpanded ? "shadow-[0_0_0_1px_rgba(255,255,255,0.2)]" : ""
                        }`}
                      >
                        <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm border border-white/20" />
                        <span className="relative z-10 text-xl md:text-2xl lg:text-3xl font-light text-white">
                          {initials}
                        </span>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 space-y-3 md:space-y-4 flex flex-col">
                      <div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-light text-white mb-1 md:mb-2">
                          {formatShortName(member.name)}
                        </h3>
                        <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed uppercase tracking-wider">
                          {member.role}
                        </p>
                      </div>

                      {/* Description - Always visible on mobile */}
                      <p className="text-sm text-white/70 font-light leading-relaxed lg:hidden line-clamp-3">
                        {member.description}
                      </p>

                      {/* Expanded Content */}
                      <div
                        className={`overflow-hidden transition-all duration-700 ease-out ${
                          isExpanded
                            ? "max-h-[1000px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pt-4 space-y-4 border-t border-white/10">
                          {/* Description in expanded view for desktop */}
                          <div className="hidden lg:block">
                            <p className="text-sm md:text-base text-white/75 font-light leading-relaxed">
                              {member.description}
                            </p>
                          </div>
                          {member.credentials && (
                            <div>
                              <p className="text-xs text-white/60 font-light uppercase tracking-wider mb-2">
                                {t("formacionAcademica")}
                              </p>
                              <p className="text-sm md:text-base text-white/75 font-light leading-relaxed">
                                {member.credentials}
                              </p>
                            </div>
                          )}
                          {member.experience && (
                            <div>
                              <p className="text-xs text-white/60 font-light uppercase tracking-wider mb-2">
                                {t("experiencia")}
                              </p>
                              <p className="text-sm md:text-base text-white/75 font-light leading-relaxed">
                                {member.experience}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expand Indicator */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between group-hover:border-white/20 transition-colors">
                    <span className="text-xs text-white/50 group-hover:text-white/70 font-light uppercase tracking-wider transition-colors">
                      {isExpanded ? t("cerrar") : t("verMas")}
                    </span>
                    <svg
                      className={`w-5 h-5 text-white/50 group-hover:text-white/70 transition-all duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/70 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                
                {/* Spotlight Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
