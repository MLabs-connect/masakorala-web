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
                alt="Masakorala heavy duty 80mm interlocking paving blocks undergoing compressive load test"
                width={700}
                height={550}
                className="about-main-img"
              />
              <div className="about-image-badge glass-panel">
                <Factory size={22} className="text-emerald" />
                <div>
                  <strong>Pannala & Kurunegala Mega Plants</strong>
                  <span>Over 45,000 Sq.Ft Daily Production Capacity</span>
                </div>
              </div>
            </div>

            {/* Sub Highlights Banner */}
            <div className="about-cert-card">
              <div className="cert-stat-item">
                <span className="cert-stat-num">100%</span>
                <span className="cert-stat-sub">Batch Tested Under SLS 1425</span>
              </div>
              <div className="cert-stat-divider" />
              <div className="cert-stat-item">
                <span className="cert-stat-num">±1mm</span>
                <span className="cert-stat-sub">Precision Mold Tolerance</span>
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
            <div className="section-tag">
              <ShieldCheck size={14} />
              <span>35+ Years Industry Legacy</span>
            </div>

            <h2 className="section-title">
              Sri Lanka&apos;s Benchmark in High-Density Concrete Paving & Infrastructure
            </h2>

            <p className="section-desc">
              At <strong>Masakorala Holdings</strong>, we combine German-engineered
              vibro-compaction technology with high-grade washed quarry granite and OPC 52.5N
              Portland cement to deliver interlocking pavers that withstand the test of time,
              monsoon weather, and continuous heavy container haulage.
            </p>

            {/* Feature Points Grid */}
            <div className="about-features-grid">
              <div className="about-feature-item">
                <div className="feature-icon-wrapper">
                  <Cpu size={20} />
                </div>
                <div>
                  <h3 className="feature-item-title">Fully Automated Vibro-Compaction</h3>
                  <p className="feature-item-desc">
                    Hydraulic multi-frequency compaction ensures uniform density throughout the block,
                    eliminating internal air voids and ensuring water absorption below 6%.
                  </p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="feature-icon-wrapper">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="feature-item-title">UV-Stable German Mineral Pigments</h3>
                  <p className="feature-item-desc">
                    Integrated synthetic iron-oxide pigments ensure lifetime colorfastness without
                    fading under extreme tropical sunlight and heavy tropical rainfall.
                  </p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="feature-icon-wrapper">
                  <Truck size={20} />
                </div>
                <div>
                  <h3 className="feature-item-title">Integrated Crane-Truck Fleet</h3>
                  <p className="feature-item-desc">
                    Safe, palletized delivery with hydraulic boom cranes straight to your site anywhere
                    across Sri Lanka, minimizing transit damage and offloading downtime.
                  </p>
                </div>
              </div>

              <div className="about-feature-item">
                <div className="feature-icon-wrapper">
                  <Leaf size={20} />
                </div>
                <div>
                  <h3 className="feature-item-title">Sustainable Urban Drainage (SuDS)</h3>
                  <p className="feature-item-desc">
                    Pioneers in permeable eco-grass and hollow paving systems that recharge groundwater
                    tables and eliminate driveway flash-flooding.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Row */}
            <div className="about-action-row">
              <a href="#quality" className="btn-primary">
                <span>View Quality & Testing Standards</span>
                <ArrowRight size={16} />
              </a>
              <a href="#calculator" className="btn-secondary">
                <span>Calculate Your Project BOQ</span>
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
          font-weight: 700;
          color: var(--brand-black);
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

        .about-features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin: 32px 0;
        }

        .about-feature-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .feature-icon-wrapper {
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

        .feature-item-title {
          font-size: 1.02rem;
          font-weight: 700;
          color: var(--brand-black);
          margin-bottom: 4px;
        }

        .feature-item-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.55;
        }

        .about-action-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 8px;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
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
