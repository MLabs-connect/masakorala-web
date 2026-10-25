"use client";

import React from "react";
import {
  ShieldCheck,
  CheckCircle,
  XCircle,
  FlaskConical,
  Gauge,
  Layers,
  ThermometerSnowflake,
  FileCheck2,
  Cpu,
} from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Granulometric Material Grading",
    desc: "100% clean, crushed granite aggregates and river sand graded to ASTM C33 standards to eliminate organic impurities and silt.",
    icon: FlaskConical,
  },
  {
    step: "02",
    title: "Computerized Dual-Layer Batching",
    desc: "Dense high-strength base concrete fused with a fine, UV-resistant pigment face mix under 300 bar hydraulic pressure.",
    icon: Cpu,
  },
  {
    step: "03",
    title: "Vapour-Misted Curing Chambers",
    desc: "Blocks cure in climate-controlled chambers at 98% relative humidity for 28 days, ensuring full calcium-silicate hydrate crystallization.",
    icon: ThermometerSnowflake,
  },
  {
    step: "04",
    title: "SLS 1425 Compressive Destruction Testing",
    desc: "Random sample batches crushed in our calibrated 2,000 kN computerized load frame. Certified batch certificates provided to clients.",
    icon: Gauge,
  },
];

const BENCHMARK_COMPARISON = [
  {
    parameter: "Compressive Strength (80mm)",
    masakorala: "55.0 – 62.5 MPa (Heavy Cargo Rated)",
    marketStandard: "25.0 – 35.0 MPa (Cracks under heavy trucks)",
    isSuperior: true,
  },
  {
    parameter: "Water Absorption Rate",
    masakorala: "< 4.8% (Highly resistant to moss & spalling)",
    marketStandard: "8.0% – 12.0% (Porous, waterlogged in monsoons)",
    isSuperior: true,
  },
  {
    parameter: "Dimensional Tolerance",
    masakorala: "± 1.0 mm (Precision German mold precision)",
    marketStandard: "± 4.0 mm – 6.0 mm (Uneven joints, trip hazards)",
    isSuperior: true,
  },
  {
    parameter: "Color Fastness & Pigment",
    masakorala: "Synthetic Iron-Oxide (100% UV-Fast)",
    marketStandard: "Unbranded surface dyes (Fades within 18 months)",
    isSuperior: true,
  },
  {
    parameter: "Slip & Skid Resistance",
    masakorala: "BPN > 65 (Wet-skid safe for vehicles & pedestrians)",
    marketStandard: "Untested (Slippery when wet)",
    isSuperior: true,
  },
];

export default function QualityProcess() {
  return (
    <section id="quality" className="section-padding quality-section">
      <div className="container">
        {/* Header */}
        <div className="text-center quality-header-wrapper">
          <div className="section-tag dark">
            <ShieldCheck size={14} />
            <span>Strict SLS 1425 Quality Assurance</span>
          </div>
          <h2 className="section-title light">
            Precision Manufacturing. Tested Beyond Extreme Limits.
          </h2>
          <p className="section-desc light mx-auto">
            Every square foot of Masakorala paving is engineered to satisfy the highest
            standards of civil and structural engineers. Here is how our four-stage quality
            protocol protects your capital investment.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="quality-steps-grid">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="quality-step-card glass-panel-dark">
                <div className="step-badge-top">
                  <span className="step-num">{step.step}</span>
                  <div className="step-icon-box">
                    <Icon size={20} />
                  </div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Comparison Benchmark Table */}
        <div className="benchmark-card glass-panel-dark">
          <div className="benchmark-header">
            <div>
              <span className="benchmark-badge">Engineering Fact Sheet</span>
              <h3 className="benchmark-title">
                Masakorala CS1 Pavers vs. Generic Uncertified Blocks
              </h3>
            </div>
            <div className="benchmark-cert-note">
              Independent laboratory test results available upon request
            </div>
          </div>

          <div className="table-responsive">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Performance Metric</th>
                  <th className="th-brand">Masakorala Holdings (SLS 1425)</th>
                  <th className="th-market">Standard Market Pavers</th>
                </tr>
              </thead>
              <tbody>
                {BENCHMARK_COMPARISON.map((row, idx) => (
                  <tr key={idx}>
                    <td className="td-param">{row.parameter}</td>
                    <td className="td-brand">
                      <div className="brand-val-row">
                        <CheckCircle size={16} className="icon-pass" />
                        <span>{row.masakorala}</span>
                      </div>
                    </td>
                    <td className="td-market">
                      <div className="market-val-row">
                        <XCircle size={16} className="icon-fail" />
                        <span>{row.marketStandard}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style jsx>{`
        .quality-section {
          background: #0c0e12;
          color: #ffffff;
          position: relative;
        }

        .quality-header-wrapper {
          margin-bottom: 56px;
        }

        .quality-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 60px;
        }

        .quality-step-card {
          padding: 28px;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .quality-step-card:hover {
          transform: translateY(-4px);
          border-color: rgba(74, 222, 128, 0.4);
        }

        .step-badge-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .step-num {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: #4ade80;
          opacity: 0.8;
        }

        .step-icon-box {
          width: 40px;
          height: 40px;
          background: rgba(24, 152, 66, 0.2);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4ade80;
        }

        .step-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
        }

        .step-desc {
          font-size: 0.84rem;
          color: #94a3b8;
          line-height: 1.55;
        }

        /* Benchmark Card */
        .benchmark-card {
          padding: 36px;
          border-radius: var(--radius-xl);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .benchmark-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 28px;
        }

        .benchmark-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #4ade80;
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 6px;
        }

        .benchmark-title {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 700;
          color: #ffffff;
        }

        .benchmark-cert-note {
          font-size: 0.8rem;
          color: #94a3b8;
        }

        .table-responsive {
          overflow-x: auto;
        }

        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.88rem;
        }

        .comparison-table th {
          padding: 16px 20px;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border-bottom: 2px solid rgba(255, 255, 255, 0.12);
        }

        .th-brand {
          color: #4ade80;
          background: rgba(24, 152, 66, 0.1);
        }

        .th-market {
          color: #94a3b8;
        }

        .comparison-table td {
          padding: 18px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .td-param {
          font-weight: 600;
          color: #e2e8f0;
          width: 28%;
        }

        .td-brand {
          background: rgba(24, 152, 66, 0.05);
          width: 38%;
        }

        .brand-val-row {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #f1f5f9;
          font-weight: 600;
        }

        .icon-pass {
          color: #4ade80;
          flex-shrink: 0;
        }

        .td-market {
          width: 34%;
        }

        .market-val-row {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #94a3b8;
        }

        .icon-fail {
          color: #f87171;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .quality-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .quality-steps-grid {
            grid-template-columns: 1fr;
          }
          .benchmark-card {
            padding: 24px 16px;
          }
        }
      `}</style>
    </section>
  );
}
