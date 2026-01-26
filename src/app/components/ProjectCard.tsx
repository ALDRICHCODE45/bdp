"use client";

interface ProjectCardProps {
  number: number;
  title: string;
  category: string;
  year: string;
  description: string;
  index: number;
  isVisible: boolean;
}

export default function ProjectCard({
  number,
  title,
  category,
  year,
  description,
  index,
  isVisible,
}: ProjectCardProps) {
  const animationDelay = 200 + index * 80;

  return (
    <div
      className={`group p-6 md:p-8 bg-white/5 border border-white/10 rounded-lg hover:border-white/20 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-2 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${animationDelay}ms` }}
    >
      {/* Number */}
      <span className="text-xs text-white/30 font-light block mb-6">
        _{String(number).padStart(2, "0")}
      </span>

      {/* Category & Year */}
      <div className="flex items-center justify-between text-xs text-white/50 uppercase tracking-wider mb-4">
        <span>{category}</span>
        <span>{year}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-light text-white mb-4 leading-tight group-hover:text-white/90 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-white/60 font-light leading-relaxed">
        {description}
      </p>

      {/* Bottom divider */}
      <div className="mt-6 pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
        <div className="h-px w-8 bg-white/20 group-hover:w-16 group-hover:bg-white/40 transition-all duration-500" />
      </div>
    </div>
  );
}
