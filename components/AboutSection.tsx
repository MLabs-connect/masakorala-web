"use client";

import React from "react";
import Image from "next/image";
import {
  Award,
  Layers,
  Sparkles,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Visual Media Hero Card */}
          <div className="about-media-col">
            <div className="about-image-card">
              <Image
                src="/images/uni-paver.jpg"
                alt="Masakorala CS1-graded heavy duty interlocking paving blocks"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="about-main-img"
                priority
              />
            </div>
          </div>

          {/* Right Column: Narrative & Technical Advantage */}
          <div className="about-content-col">
            <div className="about-badge-wrap">
              <span className="about-subtitle-tag">
                About Us
              </span>
            </div>

            <h2 className="about-headline">
              Masakorala Holdings
            </h2>

            <p className="about-sub-years">
              Since 1991 • Over 35 Years of Engineering Trust
            </p>

            <p className="about-lead-para">
              At <strong>Masakorala Holdings</strong>, we are proud to be Sri Lanka&apos;s CS1-graded
              paving manufacturer — a premier recognition that reflects our unwavering dedication
              to quality, structural integrity, and long-term value. With over 35 years of
              experience, we have become the trusted manufacturing partner for the nation&apos;s
              leading infrastructure developers, ports, apparel park conglomerates, and landmark
              commercial estates.
            </p>

            <p className="about-sub-para">
              From the compressive density of our aggregates to the laser-guided precision of our
              molds, every detail matters. That is why we are <strong>SLS 1425</strong> and{" "}
              <strong>ISO 9001:2015</strong> certified, operating our own in-house computerized
              laboratories to verify compressive strength, water absorption (&lt;4.8%), and skid
              resistance on every batch.
            </p>

            {/* Performance & Heritage Metrics Banner */}
            <div className="about-stats-banner">
              <div className="stat-banner-item">
                <div className="stat-icon-wrap">
                  <Award size={18} className="text-emerald" />
                </div>
                <div className="stat-content">
                  <span className="stat-number">CS1</span>
                  <span className="stat-label">Highest Specialty Grade</span>
                </div>
              </div>

              <div className="stat-banner-divider" />

              <div className="stat-banner-item">
                <div className="stat-icon-wrap">
                  <Sparkles size={18} className="text-emerald" />
                </div>
                <div className="stat-content">
                  <span className="stat-number">35+</span>
                  <span className="stat-label">Years Industry Heritage</span>
                </div>
              </div>

              <div className="stat-banner-divider" />

              <div className="stat-banner-item">
                <div className="stat-icon-wrap">
                  <Layers size={18} className="text-emerald" />
                </div>
                <div className="stat-content">
                  <span className="stat-number">55 MPa</span>
                  <span className="stat-label">Heavy Load Capacity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background: #ffffff;
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 52px;
          align-items: stretch;
        }

        /* Left Column */
        .about-media-col {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .about-image-card {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 440px;
          flex: 1;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 16px 36px -8px rgba(12, 14, 18, 0.12), 0 4px 12px rgba(0, 0, 0, 0.04);
          border: 1px solid var(--surface-border);
          background: var(--surface-offwhite);
        }

        .about-image-card :global(.about-main-img) {
          object-fit: cover !important;
          object-position: center center !important;
          width: 100% !important;
          height: 100% !important;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .about-image-card:hover :global(.about-main-img) {
          transform: scale(1.035);
        }

        .text-emerald {
          color: var(--primary-green);
        }

        /* Right Column */
        .about-content-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .about-badge-wrap {
          margin-bottom: 12px;
        }

        .about-subtitle-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--primary-green-dark);
          background: var(--primary-green-subtle);
          padding: 5px 14px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(24, 152, 66, 0.2);
        }

        .about-headline {
          font-family: var(--font-heading);
          font-size: 2.75rem;
          font-weight: 800;
          color: var(--primary-green);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
        }

        .about-sub-years {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--brand-black);
          margin-bottom: 18px;
          letter-spacing: -0.01em;
        }

        .about-lead-para {
          font-size: 1rem;
          color: var(--stone-dark);
          line-height: 1.75;
          margin-bottom: 14px;
        }

        .about-lead-para strong {
          color: var(--brand-black);
          font-weight: 700;
        }

        .about-sub-para {
          font-size: 0.94rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        /* Performance Metrics Banner */
        .about-stats-banner {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          background: var(--surface-offwhite);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-lg);
          padding: 16px 18px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          transition: all 0.25s ease;
        }

        .about-stats-banner:hover {
          border-color: rgba(24, 152, 66, 0.35);
          box-shadow: 0 8px 24px -4px rgba(24, 152, 66, 0.1);
        }

        .stat-banner-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 8px;
        }

        .stat-banner-divider {
          width: 1px;
          height: 44px;
          background: var(--surface-border);
        }

        .stat-icon-wrap {
          width: 30px;
          height: 30px;
          border-radius: var(--radius-full);
          background: var(--primary-green-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-family: var(--font-heading);
          font-size: 1.55rem;
          font-weight: 800;
          color: var(--primary-green-dark);
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 0.73rem;
          font-weight: 600;
          color: var(--stone-mid);
          margin-top: 3px;
          line-height: 1.25;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .about-image-card {
            min-height: 360px;
            height: 380px;
          }
          .about-headline {
            font-size: 2.3rem;
          }
        }

        @media (max-width: 640px) {
          .about-image-card {
            min-height: 250px;
            height: 280px;
          }
          .about-headline {
            font-size: 2rem;
          }
          .about-sub-years {
            font-size: 1rem;
          }
          .about-stats-banner {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 18px;
          }
          .stat-banner-divider {
            display: none;
          }
          .stat-banner-item {
            flex-direction: row;
            text-align: left;
            gap: 14px;
            padding: 0;
          }
          .stat-icon-wrap {
            margin-bottom: 0;
            flex-shrink: 0;
          }
          .stat-content {
            align-items: flex-start;
          }
          .stat-number {
            font-size: 1.35rem;
          }
        }
      `}</style>
    </section>
  );
}
