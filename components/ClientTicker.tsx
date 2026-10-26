"use client";

import React from "react";
import { ShieldCheck, Building2 } from "lucide-react";

const CLIENTS = [
  { name: "Road Development Authority (RDA)", category: "National Highways" },
  { name: "Maga Engineering", category: "Tier-1 Contractor" },
  { name: "Access Engineering PLC", category: "Infrastructure" },
  { name: "Colombo Port City Logistics", category: "Maritime Corridor" },
  { name: "Sanken Construction", category: "Commercial Developments" },
  { name: "International Construction Consortium (ICC)", category: "Highways & Bridges" },
  { name: "MAS Active & Fabric Parks", category: "Industrial Zones" },
  { name: "Brandix Eco-Tech Apparel Parks", category: "Green Factories" },
  { name: "Hayleys Advantis Logistic Hubs", category: "Heavy Cargo Terminals" },
  { name: "John Keells Properties", category: "Residential Enclaves" },
];

const CERTIFICATIONS = [
  { code: "SLS 1425", title: "Specification for Concrete Paving Blocks" },
  { code: "ISO 9001:2015", title: "Quality Management Systems Certified" },
  { code: "CIDA CS1", title: "Highest Specialty Construction Rating" },
  { code: "GBCSL", title: "Green Building Council Sri Lanka Material Affiliate" },
];

export default function ClientTicker() {
  return (
    <section className="ticker-section">
      <div className="container ticker-top-row">
        <span className="ticker-label">
          Trusted by Sri Lanka&apos;s Major Infrastructure Developers & Engineering Giants:
        </span>
        <div className="cert-badges-inline">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.code} className="cert-pill" title={cert.title}>
              <ShieldCheck size={13} className="text-emerald" />
              <strong>{cert.code}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Scrolling Ticker */}
      <div className="ticker-marquee-wrapper">
        <div className="ticker-track">
          {/* Repeating list twice for smooth seamless loop */}
          {[...CLIENTS, ...CLIENTS].map((client, idx) => (
            <div key={`${client.name}-${idx}`} className="client-badge">
              <Building2 size={16} className="client-icon" />
              <div className="client-text-group">
                <span className="client-name">{client.name}</span>
                <span className="client-cat">{client.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ticker-section {
          background: #ffffff;
          padding: 24px 0 32px;
          border-bottom: 1px solid var(--surface-border);
          overflow: hidden;
        }

        .ticker-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 20px;
        }

        .ticker-label {
          font-size: 0.84rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--stone-mid);
        }

        .cert-badges-inline {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .cert-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--surface-offwhite);
          border: 1px solid var(--surface-border);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.74rem;
          color: var(--brand-black);
        }

        .text-emerald {
          color: var(--primary-green);
        }

        .ticker-marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .client-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: var(--surface-offwhite);
          border: 1px solid var(--surface-border);
          padding: 10px 20px;
          border-radius: var(--radius-md);
          margin-right: 18px;
          white-space: nowrap;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .client-badge:hover {
          border-color: var(--primary-green);
          transform: translateY(-2px);
          background: #ffffff;
        }

        .client-icon {
          color: var(--primary-green);
          flex-shrink: 0;
        }

        .client-text-group {
          display: flex;
          flex-direction: column;
        }

        .client-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--brand-black);
        }

        .client-cat {
          font-size: 0.7rem;
          color: var(--stone-light);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        @media (max-width: 640px) {
          .ticker-section {
            padding: 18px 0 24px;
          }

          .ticker-top-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            margin-bottom: 14px;
          }

          .cert-badges-inline {
            gap: 6px;
          }

          .cert-pill {
            font-size: 0.7rem;
            padding: 3px 8px;
          }

          .client-badge {
            padding: 8px 14px;
            gap: 8px;
            margin-right: 12px;
          }

          .client-name {
            font-size: 0.82rem;
          }
        }
      `}</style>
    </section>
  );
}
