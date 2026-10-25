import React from "react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  showText?: boolean;
}

export default function Logo({
  className = "",
  variant = "dark",
  showText = true,
}: LogoProps) {
  const isDarkTheme = variant === "light"; // White text for dark backgrounds
  const mainTextColor = isDarkTheme ? "#ffffff" : "#0c0e12";
  const subTextColor = isDarkTheme ? "#94a3b8" : "#475569";

  return (
    <div
      className={`logo-container ${className}`}
      style={{ display: "inline-flex", alignItems: "center", gap: "12px", userSelect: "none" }}
    >
      {/* Precision Vector Emblem matching Masakorala Paving Hex/Polygon Monogram */}
      <svg
        viewBox="0 0 240 200"
        width="46"
        height="38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="logoGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          <linearGradient id="logoSlate1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="logoSlate2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
          <linearGradient id="logoSlate3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
        </defs>

        {/* Top-Left Signature Green Triangle */}
        <path d="M 0,10 Q 0,0 10,0 L 58,68 Q 62,74 56,76 L 8,76 Q 0,76 0,68 Z" fill="url(#logoGreen)" />

        {/* Upper-Left Diagonal Interlocking Block */}
        <path d="M 12,82 L 66,156 Q 70,162 76,158 L 114,132 Q 120,128 116,122 L 62,48 Q 58,42 52,46 Z" fill="url(#logoSlate1)" />

        {/* Lower-Left Wedge */}
        <path d="M 2,106 L 46,168 Q 50,174 48,180 L 2,180 Q 0,180 0,174 Z" fill="url(#logoSlate3)" />

        {/* Bottom Anchor Triangle */}
        <path d="M 26,194 L 78,194 Q 84,194 81,188 L 54,150 Q 50,144 45,148 Z" fill="url(#logoSlate2)" />

        {/* Central Interlocking Diagonal */}
        <path d="M 76,166 L 130,194 Q 136,196 140,190 L 178,106 Q 182,98 176,96 L 124,68 Q 118,65 114,72 Z" fill="url(#logoSlate1)" />

        {/* Center-Right Angled Block */}
        <path d="M 122,52 L 174,78 Q 180,81 184,74 L 216,12 Q 219,5 212,2 L 162,2 Q 156,2 154,8 Z" fill="url(#logoSlate2)" />

        {/* Right Pillar */}
        <path d="M 170,100 L 222,188 Q 226,194 220,194 L 146,194 Q 140,194 142,188 Z" fill="url(#logoSlate1)" />
      </svg>

      {showText && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.22rem",
              fontWeight: 800,
              letterSpacing: "0.12em",
              color: mainTextColor,
              textTransform: "uppercase",
            }}
          >
            MASAKORALA
          </span>
          <span
            style={{
              fontFamily: "var(--font-main)",
              fontSize: "0.86rem",
              fontWeight: 500,
              letterSpacing: "0.22em",
              color: subTextColor,
              textTransform: "lowercase",
              marginTop: "2px",
            }}
          >
            holdings
          </span>
        </div>
      )}
    </div>
  );
}
