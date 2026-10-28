"use client";

import React from "react";
import Image from "next/image";

const CLIENT_LOGOS = [
  { name: "John Keells Properties", src: "/images/clients/keells.webp" },
  { name: "Access Engineering", src: "/images/clients/client-2.webp" },
  { name: "Road Development Authority (RDA)", src: "/images/clients/rda.webp" },
  { name: "Maga Engineering", src: "/images/clients/client-4.webp" },
  { name: "NEM Construction", src: "/images/clients/nem-construction.webp" },
  { name: "Construction Partner", src: "/images/clients/client-6.webp" },
  { name: "MAS Active & Brandix", src: "/images/clients/client-7.webp" },
  { name: "Sri Lanka Ports Authority (SLPA)", src: "/images/clients/slpa-ports.webp" },
];

export default function ClientTicker() {
  return (
    <section className="ticker-section">
      <div className="container ticker-top-row">
        <span className="ticker-label">
          Our Trusted Partners
        </span>
      </div>

      {/* Infinite Scrolling Logo Carousel */}
      <div className="ticker-marquee-wrapper">
        <div className="ticker-track">
          {/* Repeating list twice for smooth seamless loop */}
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
            <div key={`${logo.name}-${idx}`} className="client-logo-item">
              <Image
                src={logo.src}
                alt={logo.name}
                width={150}
                height={60}
                className="client-logo-img"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ticker-section {
          background: #ffffff;
          padding: 24px 0 30px;
          border-bottom: 1px solid var(--surface-border);
          overflow: hidden;
        }

        .ticker-top-row {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-bottom: 20px;
        }

        .ticker-label {
          font-size: 0.84rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--stone-mid);
          text-align: center;
        }

        .ticker-marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );
        }

        .client-logo-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0 32px;
          background: transparent;
          border: none;
          box-shadow: none;
          padding: 0;
        }

        :global(.client-logo-img) {
          height: 52px;
          width: auto;
          max-width: 150px;
          object-fit: contain;
          opacity: 0.95;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .client-logo-item:hover :global(.client-logo-img) {
          opacity: 1;
          transform: scale(1.06);
        }

        @media (max-width: 640px) {
          .ticker-section {
            padding: 16px 0 22px;
          }

          .ticker-top-row {
            margin-bottom: 14px;
          }

          .client-logo-item {
            margin: 0 18px;
          }

          :global(.client-logo-img) {
            height: 38px;
            max-width: 110px;
          }
        }
      `}</style>
    </section>
  );
}
