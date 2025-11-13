"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function TeamSection() {
  const t = useTranslations("team");
  
  const teamMembers = [
  {
    id: 1,
    name: t("members.roberto.name"),
    role: t("members.roberto.role"),
    description: t("members.roberto.description"),
    credentials: t("members.roberto.credentials"),
    experience: t("members.roberto.experience"),
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    id: 2,
    name: t("members.carlos.name"),
    role: t("members.carlos.role"),
    description: t("members.carlos.description"),
    credentials: t("members.carlos.credentials"),
    experience: t("members.carlos.experience"),
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
  },
  {
    id: 3,
    name: t("members.manuel.name"),
    role: t("members.manuel.role"),
    description: t("members.manuel.description"),
    credentials: t("members.manuel.credentials"),
    experience: t("members.manuel.experience"),
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    id: 4,
    name: t("members.gonzalo.name"),
    role: t("members.gonzalo.role"),
    description: t("members.gonzalo.description"),
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
  },
  {
    id: 5,
    name: t("members.alonso.name"),
    role: t("members.alonso.role"),
    description: t("members.alonso.description"),
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
  {
    id: 6,
    name: t("members.paulina.name"),
    role: t("members.paulina.role"),
    description: t("members.paulina.description"),
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  },
  {
    id: 7,
    name: t("members.jose.name"),
    role: t("members.jose.role"),
    description: t("members.jose.description"),
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
  },
  {
    id: 8,
    name: t("members.aldo.name"),
    role: t("members.aldo.role"),
    description: t("members.aldo.description"),
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    id: 9,
    name: t("members.iliana.name"),
    role: t("members.iliana.role"),
    description: t("members.iliana.description"),
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
  },
  ];
  const [expandedMember, setExpandedMember] = useState<number | null>(null);

  const toggleMember = (id: number) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  return (
    <section
      id="equipo"
      className="relative min-h-[100vh] sm:min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 flex items-start sm:items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Equipo BDP"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/96 via-slate-900/92 to-slate-900/85" />
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

      {/* Subtle blurred gradient effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-xs font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white/70 mb-3 sm:mb-4">
            {t("label")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 sm:mb-6 px-2">
            {t("title").split(" ").map((word, i) => (
              <span key={i}>
                {i === 1 ? <span className="font-normal">{word}</span> : word}
                {i < t("title").split(" ").length - 1 && " "}
              </span>
            ))}
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-white/80 font-light leading-relaxed px-4 sm:px-0">
            {t("description")}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`group relative bg-white/3 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-700 overflow-hidden cursor-pointer ${
                expandedMember === member.id
                  ? "lg:col-span-2 lg:row-span-2 border-white/30 bg-white/5"
                  : ""
              }`}
              style={{
                transitionDelay: `${200 + index * 50}ms`,
                transitionDuration: "1200ms",
              }}
              onClick={() => toggleMember(member.id)}
            >
              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6 lg:p-8 h-full flex flex-col">
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6 flex-1">
                  {/* Image */}
                  <div
                    className={`relative flex-shrink-0 overflow-hidden transition-all duration-700 mx-auto sm:mx-0 ${
                      expandedMember === member.id
                        ? "w-full sm:w-48 md:w-56 lg:w-40 h-48 sm:h-56 md:h-64 lg:h-40"
                        : "w-full sm:w-40 md:w-44 lg:w-32 h-40 sm:h-44 md:h-48 lg:h-32"
                    }`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-xl sm:rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                    {/* Role Badge */}
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 space-y-3 sm:space-y-4 flex flex-col">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-light text-white mb-1 sm:mb-2">
                        {member.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                        {member.role}
                      </p>
                    </div>

                    {/* Description - Always visible on mobile */}
                    <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed lg:hidden">
                      {member.description}
                    </p>

                    {/* Expanded Content */}
                    <div
                      className={`overflow-hidden transition-all duration-700 ${
                        expandedMember === member.id
                          ? "max-h-[1000px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pt-3 sm:pt-4 space-y-3 sm:space-y-4 border-t border-white/10">
                        {/* Description in expanded view for desktop */}
                        <div className="hidden lg:block">
                          <p className="text-sm text-white/70 font-light leading-relaxed">
                            {member.description}
                          </p>
                        </div>
                        {member.credentials && (
                          <div>
                            <p className="text-xs text-white/60 font-light uppercase tracking-wider mb-1 sm:mb-2">
                              {t("formacionAcademica")}
                            </p>
                            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                              {member.credentials}
                            </p>
                          </div>
                        )}
                        {member.experience && (
                          <div>
                            <p className="text-xs text-white/60 font-light uppercase tracking-wider mb-1 sm:mb-2">
                              {t("experiencia")}
                            </p>
                            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                              {member.experience}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expand Indicator */}
                <div className="mt-4 sm:mt-5 md:mt-6 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between group-hover:border-white/20 transition-colors">
                  <span className="text-[10px] sm:text-xs text-white/50 group-hover:text-white/70 font-light uppercase tracking-wider transition-colors">
                    {expandedMember === member.id
                      ? t("cerrar")
                      : t("verMas")}
                  </span>
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-white/50 group-hover:text-white/70 transition-all duration-300 ${
                      expandedMember === member.id ? "rotate-180" : ""
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
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
