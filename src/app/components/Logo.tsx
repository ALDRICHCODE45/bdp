"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "black";
}

export default function Logo({
  className = "",
  size = "md",
  variant = "default",
}: LogoProps) {
  const sizeConfig = {
    sm: {
      width: 80,
      height: 40,
    },
    md: {
      width: 160,
      height: 80,
    },
    lg: {
      width: 320,
      height: 160,
    },
  };

  const config = sizeConfig[size];
  const logoSrc = variant === "black" ? "/bdp-logoblack.png" : "/bdp-logo.png";

  return (
    <div className={`${className} flex items-center justify-center`}>
      <Image
        src={logoSrc}
        alt="BDP Litigio y Consultoría"
        width={config.width}
        height={config.height}
        className="object-contain"
        priority={size === "sm"}
      />
    </div>
  );
}
