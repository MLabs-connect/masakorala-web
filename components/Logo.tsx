import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  height?: number;
}

export default function Logo({
  className = "",
  variant = "dark",
  height = 50,
}: LogoProps) {
  const isLightVariant = variant === "light";

  return (
    <div
      className={`logo-container ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        userSelect: "none",
      }}
    >
      <Image
        src="/logo.png"
        alt="Masakorala Holdings"
        width={300}
        height={222}
        priority
        style={{
          height: `${height}px`,
          width: "auto",
          objectFit: "contain",
          filter: isLightVariant ? "brightness(0) invert(1)" : "none",
          display: "block",
        }}
      />
    </div>
  );
}
