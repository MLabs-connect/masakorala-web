"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Factory,
  Cpu,
  Truck,
  Leaf,
  Layers,
  ArrowRight,
  Sparkles,
  Award,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Visual Media & Story Feature */}
          <div className="about-media-col">
            <div className="about-image-card">
              <Image
                src="/images/uni-paver.jpg"
                alt="Masakorala CS1-graded heavy duty interlocking paving blocks"
                width={700}
                height={550}
                className="about-main-img"
              />
              <div className="about-image-badge glass-panel">
                <Factory size={22} className="text-emerald" />
                <div>
                  <strong>Pannala & Kurunegala Mega Plants</strong>
                  <span>Automated German Vibro-Press Bays & Internal Testing Lab</span>
                </div>
              </div>
            </div>

            {/* Sub Highlights Banner */}
            <div className="about-cert-card">
              <div className="cert-stat-item">
                <span className="cert-stat-num">CS1</span>
                <span className="cert-stat-sub">Highest Specialty Grading</span>
              </div>
              <div className="cert-stat-divider" />
              <div className="cert-stat-item">
                <span className="cert-stat-num">35+</span>
                <span className="cert-stat-sub">Years Industry Heritage</span>
              </div>
              <div className="cert-stat-divider" />
              <div className="cert-stat-item">
                <span className="cert-stat-num">55 MPa</span>
                <span className="cert-stat-sub">Heavy Load Capacity</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Technical Advantage */}
          <div className="about-content-col">
            <span className="about-subtitle-tag">About Us</span>
            <h2 className="about-headline">
              Masakorala Paving
            </h2>
            <h3 className="about-sub-years">Since 1991 | Over 35 Years of Engineering Trust</h3>

            <p className="about-lead-para">
              At <strong>Masakorala Paving</strong>, we are proud to be Sri Lanka&apos;s CS1-graded
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

            <div className="about-services-box">
              <div className="service-bullet">
                <CheckCircle2 size={18} className="text-emerald" />
                <span>
                  <strong>Turnkey Supply & Laying Services:</strong> Beyond manufacturing, our certified
                  teams provide sub-grade compaction, screeding, laying, and plate vibration finishing across Sri Lanka.
                </span>
              </div>
              <div className="service-bullet">
                <CheckCircle2 size={18} className="text-emerald" />
                <span>
                  <strong>Hydraulic Crane Offloading Fleet:</strong> Direct site delivery with boom cranes
                  minimizing handling breakage and installation delays.
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="about-action-row">
              <a href="#products" className="btn-primary">
                <span>View Products Catalog</span>
                <ArrowRight size={16} />
              </a>
              <a href="#calculator" className="btn-secondary">
                <span>Calculate Your Site BOQ</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background: #ffffff;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 60px;
          align-items: center;
        }

        /* Left Column */
        .about-media-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about-image-card {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--surface-border);
        }

        .about-main-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .about-image-card:hover .about-main-img {
          transform: scale(1.03);
        }

        .about-image-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          padding: 16px 20px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 16px;
          border: 1px solid rgba(255, 255, 255, 0.7);
        }

        .text-emerald {
          color: var(--primary-green);
        }

        .about-image-badge strong {
          display: block;
          font-size: 0.95rem;
          color: var(--brand-black);
        }

        .about-image-badge span {
          font-size: 0.78rem;
          color: var(--stone-mid);
        }

        .about-cert-card {
          display: flex;
          justify-content: space-around;
          align-items: center;
          background: var(--surface-offwhite);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-lg);
          padding: 20px 24px;
        }

        .cert-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .cert-stat-num {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--primary-green-dark);
          line-height: 1.1;
        }

        .cert-stat-sub {
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--stone-mid);
          margin-top: 4px;
        }

        .cert-stat-divider {
          width: 1px;
          height: 36px;
          background: var(--surface-border);
        }

        /* Right Column */
        .about-content-col {
          display: flex;
          flex-direction: column;
        }

        .about-subtitle-tag {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--stone-mid);
          margin-bottom: 6px;
        }

        .about-headline {
          font-family: var(--font-heading);
          font-size: 2.8rem;
          font-weight: 800;
          color: var(--primary-green);
          line-height: 1.15;
          margin-bottom: 4px;
        }

        .about-sub-years {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--brand-black);
          margin-bottom: 18px;
        }

        .about-lead-para {
          font-size: 1rem;
          color: var(--stone-dark);
          line-height: 1.7;
          margin-bottom: 14px;
        }

        .about-sub-para {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 24px;
        }

        .about-services-box {
          background: var(--surface-offwhite);
          border-left: 3px solid var(--primary-green);
          border-radius: var(--radius-sm);
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        }

        .service-bullet {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.86rem;
          color: var(--stone-dark);
          line-height: 1.5;
        }

        .about-action-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .about-headline {
            font-size: 2.3rem;
          }
        }

        @media (max-width: 640px) {
          .about-cert-card {
            flex-direction: column;
            gap: 16px;
          }
          .cert-stat-divider {
            display: none;
          }
          .about-action-row {
            flex-direction: column;
          }
          .about-action-row a {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
