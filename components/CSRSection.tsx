"use client";

import React from "react";
import Image from "next/image";
import { HeartHandshake, Trees, GraduationCap, ArrowRight, ShieldCheck } from "lucide-react";

export default function CSRSection() {
  return (
    <section id="csr" className="csr-section">
      <div className="csr-bg-layer">
        <Image
          src="/images/grass-paver.jpg"
          alt="Masakorala Holdings CSR Community Initiatives"
          fill
          className="csr-bg-img"
        />
        <div className="csr-gradient" />
      </div>

      <div className="container csr-container">
        <div className="csr-header">
          <div className="section-tag dark">
            <HeartHandshake size={14} />
            <span>Corporate Social Responsibility</span>
          </div>

          <h2 className="csr-title">
            Empowering Communities. Preserving Our Island&apos;s Nature.
          </h2>

          <p className="csr-desc">
            At Masakorala Group, we believe that true industrial leadership means lifting up
            the communities around our manufacturing facilities in Pannala and Kurunegala,
            while pioneering environmentally conscious precast concrete systems.
          </p>
        </div>

        {/* 2 Flagship CSR Program Cards */}
        <div className="csr-initiatives-grid">
          {/* Program 1: Education & Infrastructure */}
          <div className="csr-card glass-panel-dark">
            <div className="csr-card-icon">
              <GraduationCap size={24} />
            </div>
            <span className="csr-card-tag">Flagship Education Initiative</span>
            <h3 className="csr-card-title">Deyata Akurata Athwelak (දැයට අකුරට අත්වැලක්)</h3>
            <p className="csr-card-desc">
              Dedicated to uplifting under-resourced rural schools across the North Western Province.
              We construct safe sanitary facilities, pave school assembly grounds, and donate learning
              materials to empower the next generation.
            </p>
            <div className="csr-stat-row">
              <div>
                <strong>38+ Schools</strong>
                <span>Directly Supported</span>
              </div>
              <div>
                <strong>6,500+ Students</strong>
                <span>Benefited to Date</span>
              </div>
            </div>
          </div>

          {/* Program 2: Environmental Reforestation */}
          <div className="csr-card glass-panel-dark">
            <div className="csr-card-icon green">
              <Trees size={24} />
            </div>
            <span className="csr-card-tag">Environmental Conservation</span>
            <h3 className="csr-card-title">Deyata Husmak (දැයට හුස්මක්) — A Breath for the Nation</h3>
            <p className="csr-card-desc">
              Our active tree-planting and ecological restoration campaign. Along with manufacturing
              permeable SuDS grass blocks, we plant native timber and shade trees to expand green
              cover and reduce carbon emissions across industrial corridors.
            </p>
            <div className="csr-stat-row">
              <div>
                <strong>15,000+ Trees</strong>
                <span>Planted Islandwide</span>
              </div>
              <div>
                <strong>100% Closed-Loop</strong>
                <span>Water Recycling</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .csr-section {
          position: relative;
          padding: 100px 0;
          color: #ffffff;
          overflow: hidden;
          background: #080a0d;
        }

        .csr-bg-layer {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .csr-bg-img {
          object-fit: cover;
          filter: brightness(0.25) contrast(1.1);
        }

        .csr-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(24, 152, 66, 0.15) 0%,
            rgba(8, 10, 13, 0.95) 80%
          );
        }

        .csr-container {
          position: relative;
          z-index: 2;
        }

        .csr-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 56px;
        }

        .csr-title {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .csr-desc {
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.7;
        }

        .csr-initiatives-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .csr-card {
          padding: 36px;
          border-radius: var(--radius-xl);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .csr-card:hover {
          transform: translateY(-4px);
          border-color: rgba(74, 222, 128, 0.4);
        }

        .csr-card-icon {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: rgba(24, 152, 66, 0.2);
          color: #4ade80;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border: 1px solid rgba(74, 222, 128, 0.3);
        }

        .csr-card-icon.green {
          background: rgba(34, 197, 94, 0.25);
          color: #86efac;
        }

        .csr-card-tag {
          font-size: 0.74rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #4ade80;
          margin-bottom: 8px;
        }

        .csr-card-title {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 14px;
          line-height: 1.3;
        }

        .csr-card-desc {
          font-size: 0.88rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 28px;
          flex-grow: 1;
        }

        .csr-stat-row {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 20px;
        }

        .csr-stat-row strong {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.35rem;
          color: #ffffff;
        }

        .csr-stat-row span {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        @media (max-width: 992px) {
          .csr-initiatives-grid {
            grid-template-columns: 1fr;
          }
          .csr-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
