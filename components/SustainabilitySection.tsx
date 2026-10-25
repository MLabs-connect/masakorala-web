"use client";

import React from "react";
import Image from "next/image";
import {
  Leaf,
  Droplets,
  Sun,
  Recycle,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function SustainabilitySection() {
  return (
    <section id="sustainability" className="section-padding sustainability-section">
      <div className="container">
        <div className="sustainability-grid">
          {/* Content Column */}
          <div className="sustainability-content">
            <div className="section-tag">
              <Leaf size={14} />
              <span>Green Engineering & SuDS</span>
            </div>

            <h2 className="section-title">
              Permeable Paving That Protects Sri Lanka&apos;s Water Table
            </h2>

            <p className="section-desc">
              Conventional asphalt and concrete slabs seal the soil, causing urban
              flash-floods, heat island accumulation, and aquifer depletion. Masakorala
              permeable paving systems allow rainwater to naturally filter through open
              aggregate joints back into the subterranean water table.
            </p>

            <div className="eco-benefits-list">
              <div className="eco-benefit-card">
                <div className="eco-icon-box">
                  <Droplets size={20} />
                </div>
                <div>
                  <h3 className="eco-title">Zero Surface Runoff & Flood Mitigation</h3>
                  <p className="eco-desc">
                    Captures up to 90% of monsoon torrential rain, filtering pollutants naturally
                    through screened aggregate layers before reaching groundwater aquifers.
                  </p>
                </div>
              </div>

              <div className="eco-benefit-card">
                <div className="eco-icon-box">
                  <Sun size={20} />
                </div>
                <div>
                  <h3 className="eco-title">Albedo Heat Island Reduction</h3>
                  <p className="eco-desc">
                    High solar reflectance index (SRI) lowers ambient surface temperatures by up
                    to 8°C compared to black bituminous asphalt, reducing estate cooling loads.
                  </p>
                </div>
              </div>

              <div className="eco-benefit-card">
                <div className="eco-icon-box">
                  <Recycle size={20} />
                </div>
                <div>
                  <h3 className="eco-title">Closed-Loop Manufacturing Plant</h3>
                  <p className="eco-desc">
                    Our Pannala and Kurunegala facilities feature 100% closed-loop sedimentation
                    water recycling, zero industrial runoff, and solar-supported curing bays.
                  </p>
                </div>
              </div>
            </div>

            <div className="sustainability-cta">
              <a href="#calculator" className="btn-primary">
                <span>Calculate Eco-Grass Paving BOQ</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Visual Column */}
          <div className="sustainability-media">
            <div className="eco-image-frame">
              <Image
                src="/images/grass-paver.jpg"
                alt="Masakorala Eco-Grass Permeable Pavers installed in green car park"
                width={650}
                height={500}
                className="eco-image"
              />
              <div className="eco-floating-card glass-panel">
                <div className="floating-metric">
                  <span className="float-num">1.4M L</span>
                  <span className="float-label">Annual Rainwater Recharged</span>
                </div>
                <div className="floating-divider" />
                <div className="floating-metric">
                  <span className="float-num">LEED</span>
                  <span className="float-label">GBCSL Credit Eligible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sustainability-section {
          background: var(--surface-offwhite);
          border-top: 1px solid var(--surface-border);
        }

        .sustainability-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .sustainability-content {
          display: flex;
          flex-direction: column;
        }

        .eco-benefits-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 32px 0;
        }

        .eco-benefit-card {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          background: #ffffff;
          padding: 18px 22px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--surface-border);
          box-shadow: var(--shadow-sm);
        }

        .eco-icon-box {
          width: 44px;
          height: 44px;
          background: var(--primary-green-subtle);
          color: var(--primary-green-dark);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(24, 152, 66, 0.2);
        }

        .eco-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--brand-black);
          margin-bottom: 4px;
        }

        .eco-desc {
          font-size: 0.86rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .sustainability-cta {
          margin-top: 8px;
        }

        /* Media Column */
        .eco-image-frame {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--surface-border);
        }

        .eco-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .eco-image-frame:hover .eco-image {
          transform: scale(1.03);
        }

        .eco-floating-card {
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
          padding: 20px;
          border-radius: var(--radius-lg);
          display: flex;
          justify-content: space-around;
          align-items: center;
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .floating-metric {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .float-num {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--primary-green-dark);
          line-height: 1.1;
        }

        .float-label {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--stone-mid);
          margin-top: 4px;
        }

        .floating-divider {
          width: 1px;
          height: 38px;
          background: var(--surface-border);
        }

        @media (max-width: 1024px) {
          .sustainability-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        @media (max-width: 640px) {
          .eco-floating-card {
            flex-direction: column;
            gap: 14px;
          }
          .floating-divider {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
