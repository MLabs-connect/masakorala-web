"use client";

import React from "react";
import { MapPin, Building2 } from "lucide-react";

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

        {/* 3 Factory & Engineering Hubs in Grid */}
        <div className="locations-grid">
          <div className="loc-card">
            <div className="loc-icon-wrapper">
              <Building2 size={22} />
            </div>
            <div className="loc-body">
              <strong className="loc-title">Pannala Mega Manufacturing Plant</strong>
              <p className="loc-address">
                Industrial Zone, Kurunegala Road, Pannala, Sri Lanka
              </p>
              <span className="loc-detail">
                Automated Vibro-Press Bays & Internal Testing Lab
              </span>
            </div>
          </div>

          <div className="loc-card">
            <div className="loc-icon-wrapper">
              <Building2 size={22} />
            </div>
            <div className="loc-body">
              <strong className="loc-title">Kurunegala Regional Curing Facility</strong>
              <p className="loc-address">
                Dambulla Road, Kurunegala, North Western Province
              </p>
              <span className="loc-detail">
                High-Volume Palletized Buffer Stocks & Crane Dispatch
              </span>
            </div>
          </div>

          <div className="loc-card">
            <div className="loc-icon-wrapper">
              <MapPin size={22} />
            </div>
            <div className="loc-body">
              <strong className="loc-title">Colombo Engineering & Sample Hub</strong>
              <p className="loc-address">
                Nawala Road, Rajagiriya / Colombo Metro Area
              </p>
              <span className="loc-detail">
                Architectural Sample Display & Consultant Consultations
              </span>
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

        /* 3-Column Locations Grid */
        .locations-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 0;
        }

        .loc-card {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          background: #fbfbfc;
          padding: 28px 24px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--surface-border);
          box-shadow: var(--shadow-sm);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .loc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.08);
          border-color: rgba(24, 152, 66, 0.35);
        }

        .loc-icon-wrapper {
          width: 48px;
          height: 48px;
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
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--brand-black);
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .loc-address {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.45;
          margin: 0 0 8px 0;
        }

        .loc-detail {
          display: inline-block;
          font-size: 0.76rem;
          color: var(--primary-green-dark);
          font-weight: 600;
          background: #ffffff;
          border: 1px solid rgba(24, 152, 66, 0.2);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          align-self: flex-start;
        }

        @media (max-width: 1100px) {
          .locations-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .locations-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

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
            padding: 20px 16px;
            gap: 14px;
            border-radius: 18px;
          }

          .loc-icon-wrapper {
            width: 42px;
            height: 42px;
          }
        }
      `}</style>
    </section>
  );
}
