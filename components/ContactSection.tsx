"use client";

import React from "react";
import { Building2 } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        {/* Centered Section Header */}
        <div className="contact-header-centered">
          <div className="section-tag">
            <span>Direct Factory Contacts</span>
          </div>

          <h2 className="section-title">
            Connect With Our Civil Engineering Advisory Desk
          </h2>

          <p className="section-desc">
            Whether you require 500 square feet for a private residence or 300,000 square
            feet for a container logistics terminal, our technical team provides transparent
            ex-factory pricing, free site inspections, and sample blocks across Sri Lanka.
          </p>
        </div>

        {/* Centered Factory Location Card */}
        <div className="location-container">
          <div className="loc-card">
            <div className="loc-icon-wrapper">
              <Building2 size={24} />
            </div>
            <div className="loc-body">
              <strong className="loc-title">Matara Manufacturing Plant</strong>
              <p className="loc-address">
                No13 Sarananda Rd, Matara 81000
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: #ffffff;
          border-top: 1px solid var(--surface-border);
        }

        .contact-header-centered {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 52px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .contact-header-centered .section-tag {
          margin-bottom: 14px;
        }

        .contact-header-centered .section-title {
          font-family: var(--font-heading);
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--brand-black);
          line-height: 1.25;
          margin-bottom: 16px;
        }

        .contact-header-centered .section-desc {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
          max-width: 740px;
        }

        /* Centered Location Container */
        .location-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .loc-card {
          display: flex;
          align-items: center;
          gap: 20px;
          background: #fbfbfc;
          padding: 24px 32px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--surface-border);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          max-width: 520px;
          width: 100%;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .loc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.08);
          border-color: rgba(24, 152, 66, 0.35);
        }

        .loc-icon-wrapper {
          width: 52px;
          height: 52px;
          background: var(--primary-green-subtle);
          color: var(--primary-green-dark);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(24, 152, 66, 0.2);
        }

        .loc-body {
          display: flex;
          flex-direction: column;
        }

        .loc-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--brand-black);
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .loc-address {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.45;
          margin: 0;
        }

        @media (max-width: 768px) {
          .contact-header-centered {
            margin-bottom: 34px;
          }

          .contact-header-centered .section-title {
            font-size: clamp(1.7rem, 6.5vw, 2.15rem);
          }

          .contact-header-centered .section-desc {
            font-size: 0.95rem;
          }

          .loc-card {
            padding: 20px 18px;
            gap: 16px;
            border-radius: 18px;
          }

          .loc-icon-wrapper {
            width: 44px;
            height: 44px;
          }

          .loc-title {
            font-size: 1.05rem;
          }

          .loc-address {
            font-size: 0.88rem;
          }
        }
      `}</style>
    </section>
  );
}
