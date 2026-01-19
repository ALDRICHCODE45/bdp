"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
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
  const parts = name.split(" ").filter((part) => part.length > 0);
  if (parts.length >= 2) {
    return `${parts[0]} ${parts[1]}`;
  }
  return name;
};

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  credentials?: string;
  experience?: string;
  image?: string;
}

// Modal component for member details
function MemberModal({
  member,
  isOpen,
  onClose,
  t,
}: {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
  t: (key: string) => string;
}) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !member) return null;

  const hasImage = member.image && member.image.length > 0;
  const initials = getInitials(member.name);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" />
      <div
        className={`relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-2xl overflow-hidden transform transition-all duration-500 ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <svg
            className="w-5 h-5 text-white/70"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="p-6 md:p-8">
          <div className="flex items-start gap-6 mb-6">
            {hasImage ? (
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={member.image!}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl md:text-3xl font-light text-white/80">
                  {initials}
                </span>
              </div>
            )}
            <div className="flex-1 min-w-0 pt-2">
              <h3 className="text-xl md:text-2xl font-light text-white mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-white/60 uppercase tracking-wider">
                {member.role}
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-white/80 font-light leading-relaxed">
              {member.description}
            </p>
            {member.credentials && (
              <div>
                <p className="text-xs text-white/50 font-light uppercase tracking-wider mb-2">
                  {t("formacionAcademica")}
                </p>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  {member.credentials}
                </p>
              </div>
            )}
            {member.experience && (
              <div>
                <p className="text-xs text-white/50 font-light uppercase tracking-wider mb-2">
                  {t("experiencia")}
                </p>
                <p className="text-sm text-white/70 font-light leading-relaxed">
                  {member.experience}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const t = useTranslations("team");
  const { ref, isIntersecting } = useIntersectionObserver();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: t("members.roberto.name"),
      role: t("members.roberto.role"),
      description: t("members.roberto.description"),
      credentials: t("members.roberto.credentials"),
      experience: t("members.roberto.experience"),
      image: t("members.roberto.image"),
    },
    {
      id: 2,
      name: t("members.carlos.name"),
      role: t("members.carlos.role"),
      description: t("members.carlos.description"),
      credentials: t("members.carlos.credentials"),
      experience: t("members.carlos.experience"),
      image: t("members.carlos.image"),
    },
    {
      id: 3,
      name: t("members.manuel.name"),
      role: t("members.manuel.role"),
      description: t("members.manuel.description"),
      credentials: t("members.manuel.credentials"),
      experience: t("members.manuel.experience"),
      image: t("members.manuel.image"),
    },
    {
      id: 4,
      name: t("members.alonso.name"),
      role: t("members.alonso.role"),
      description: t("members.alonso.description"),
      image: t("members.alonso.image"),
    },
    {
      id: 5,
      name: t("members.paulina.name"),
      role: t("members.paulina.role"),
      description: t("members.paulina.description"),
      image: t("members.paulina.image"),
    },
    {
      id: 6,
      name: t("members.jose.name"),
      role: t("members.jose.role"),
      description: t("members.jose.description"),
      image: t("members.jose.image"),
    },
    {
      id: 7,
      name: t("members.aldo.name"),
      role: t("members.aldo.role"),
      description: t("members.aldo.description"),
      image: t("members.aldo.image"),
    },
    {
      id: 8,
      name: t("members.ricardo.name"),
      role: t("members.ricardo.role"),
      description: t("members.ricardo.description"),
      image: t("members.ricardo.image"),
    },
    {
      id: 9,
      name: t("members.miguel.name"),
      role: t("members.miguel.role"),
      description: t("members.miguel.description"),
      image: t("members.miguel.image"),
    },
    {
      id: 10,
      name: t("members.liliana.name"),
      role: t("members.liliana.role"),
      description: t("members.liliana.description"),
      image: t("members.liliana.image"),
    },
  ];

  const openModal = useCallback((member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 300);
  }, []);

  return (
    <section
      ref={ref}
      id="equipo"
      className="relative py-24 md:py-32 bg-slate-950 text-white"
    >
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-12">
        <div className="border-t border-white/10 pt-6">
          <span
            className={`inline-block text-xs text-white/50 uppercase tracking-widest mb-12 md:mb-16 -mt-3 bg-slate-950 pr-4 transition-all duration-1000 ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {t("label")}
          </span>
          <div
            className={`grid md:grid-cols-2 gap-6 md:gap-12 mb-16 md:mb-24 transition-all duration-1000 delay-100 ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
              {t("title")}
            </h2>
            <p className="text-base text-white/60 font-light leading-relaxed self-end">
              {t("description")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-16">
          {teamMembers.map((member, index) => {
            const hasImage = member.image && member.image.length > 0;
            const initials = getInitials(member.name);
            return (
              <div
                key={member.id}
                className={`group cursor-pointer transition-all duration-700 ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 80}ms` }}
                onClick={() => openModal(member)}
              >
                <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-lg bg-white/5">
                  {hasImage ? (
                    <Image
                      src={member.image!}
                      alt={member.name}
                      fill
                      className="object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5">
                      <span className="text-4xl md:text-5xl font-light text-white/40 group-hover:text-white/60 transition-colors duration-500">
                        {initials}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-sm text-white/90 uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {t("verMas")}
                    </span>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 px-1">
                  <div className="flex-1 min-w-0 overflow-hidden">
                    <h3 className="text-base font-medium text-white truncate transition-all duration-500 group-hover:tracking-wide">
                      {formatShortName(member.name)}
                    </h3>
                    <div className="h-6 overflow-hidden">
                      <span className="block text-sm text-white/50 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        {member.role}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-white/30 font-light flex-shrink-0 pt-1">
                    _{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <MemberModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={closeModal}
        t={t}
      />
    </section>
  );
}
