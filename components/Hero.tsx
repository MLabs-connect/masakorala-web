"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Calculator,
  Award,
  Layers,
  Sparkles,
  PhoneCall,
  CheckCircle,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background Graphic & Photographic Imagery */}
      <div className="hero-media-wrapper">
        <Image
          src="/images/hero.jpg"
          alt="Luxury architectural villa paved with Masakorala interlocking pavers at dusk"
          fill
          priority
          className="hero-bg-img"
          sizes="100vw"
        />
        <div className="hero-gradient-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Top Pill */}
          <div className="hero-pill-badge">
            <span className="pill-dot animate-pulse-glow" />
            <span className="pill-text">
              CS1 Grade Interlocking Pavers & Infrastructure Systems
            </span>
            <span className="pill-tag">SLS 1425</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            Engineered For Decades.
            <br />
            <span className="hero-title-highlight">Designed For Distinction.</span>
          </h1>

          {/* Description */}
          <p className="hero-subtitle">
            Masakorala Holdings manufactures Sri Lanka&apos;s most resilient heavy-duty
            interlocking pavers, permeable eco-grass blocks, and architectural washed stone.
            Formulated to exceed 50 MPa compressive strength for container yards, commercial
            plazas, and luxury estates.
          </p>

          {/* CTA Group */}
          <div className="hero-cta-group">
            <a href="#calculator" className="btn-primary hero-btn-main">
              <Calculator size={18} />
              <span>Instant Paving Calculator</span>
              <ArrowRight size={18} />
            </a>

            <a href="#products" className="btn-outline-light hero-btn-sec">
              <Layers size={18} />
              <span>Explore 2026 Collection</span>
            </a>

            <a
              href="tel:+94706972703"
              className="btn-outline-light hero-btn-phone"
              title="Call Technical Sales Direct"
            >
              <PhoneCall size={18} />
              <span>+94 70 697 2703</span>
            </a>
          </div>

          {/* Key Advantages Bullet Chips */}
          <div className="hero-trust-chips">
            <div className="trust-chip">
              <CheckCircle size={15} className="chip-icon" />
              <span>50+ MPa Concrete Strength</span>
            </div>
            <div className="trust-chip">
              <CheckCircle size={15} className="chip-icon" />
              <span>Hydraulic High-Density Compaction</span>
            </div>
            <div className="trust-chip">
              <CheckCircle size={15} className="chip-icon" />
              <span>Zero-Efflorescence Color Fastness</span>
            </div>
            <div className="trust-chip">
              <CheckCircle size={15} className="chip-icon" />
              <span>Islandwide Site Delivery</span>
            </div>
          </div>
        </div>

        {/* Live Metrics Showcase Card */}
        <div className="hero-metrics-grid">
          <div className="hero-metric-card glass-panel-dark">
            <div className="metric-header">
              <span className="metric-number">35+</span>
              <span className="metric-symbol">Years</span>
            </div>
            <div className="metric-title">Manufacturing Heritage</div>
            <p className="metric-desc">
              Pioneering precast paving excellence in Sri Lanka since 1991.
            </p>
          </div>

          <div className="hero-metric-card glass-panel-dark">
            <div className="metric-header">
              <span className="metric-number">14M+</span>
              <span className="metric-symbol">Sq.Ft</span>
            </div>
            <div className="metric-title">Paved Across Sri Lanka</div>
            <p className="metric-desc">
              From expressway interchanges to five-star resort beachfronts.
            </p>
          </div>

          <div className="hero-metric-card glass-panel-dark">
            <div className="metric-header">
              <span className="metric-number">55+</span>
              <span className="metric-symbol">MPa</span>
            </div>
            <div className="metric-title">Heavy-Duty Rating</div>
            <p className="metric-desc">
              Engineered to endure 40-ton container trucks and industrial traffic.
            </p>
          </div>

          <div className="hero-metric-card glass-panel-dark">
            <div className="metric-header">
              <span className="metric-number">100%</span>
              <span className="metric-symbol">SLS</span>
            </div>
            <div className="metric-title">Certified Batch Rigor</div>
            <p className="metric-desc">
              SLS 1425 verified and ISO 9001:2015 precision quality audit.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          padding: 80px 0 60px;
          overflow: hidden;
          background: #0c0e12;
          color: #ffffff;
        }

        .hero-media-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-bg-img {
          object-fit: cover;
          object-position: center 30%;
          filter: brightness(0.72) contrast(1.08);
          transform: scale(1.02);
          transition: transform 10s ease;
        }

        .hero-gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(12, 14, 18, 0.82) 0%,
            rgba(12, 14, 18, 0.6) 40%,
            rgba(12, 14, 18, 0.95) 100%
          ),
          radial-gradient(
            circle at 20% 40%,
            rgba(24, 152, 66, 0.18) 0%,
            transparent 60%
          );
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 56px;
        }

        .hero-content {
          max-width: 860px;
        }

        /* Pill Badge */
        .hero-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          margin-bottom: 24px;
        }

        .pill-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
        }

        .pill-text {
          font-size: 0.82rem;
          font-weight: 600;
          color: #f1f5f9;
          letter-spacing: 0.02em;
        }

        .pill-tag {
          background: var(--primary-green);
          color: #ffffff;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: var(--radius-full);
        }

        /* Typography */
        .hero-title {
          font-family: var(--font-heading);
          font-size: 3.8rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .hero-title-highlight {
          background: linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #86efac 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          line-height: 1.7;
          color: #cbd5e1;
          max-width: 720px;
          margin-bottom: 36px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }

        /* CTA */
        .hero-cta-group {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 32px;
        }

        .hero-btn-main {
          padding: 16px 30px;
          font-size: 1.05rem;
        }

        .hero-btn-sec {
          padding: 16px 26px;
        }

        .hero-btn-phone {
          padding: 16px 22px;
          border-color: rgba(74, 222, 128, 0.4);
          color: #4ade80;
        }

        .hero-btn-phone:hover {
          background: rgba(74, 222, 128, 0.15);
          color: #ffffff;
        }

        /* Trust Chips */
        .hero-trust-chips {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px 24px;
        }

        .trust-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: #e2e8f0;
          font-weight: 500;
        }

        .chip-icon {
          color: #4ade80;
        }

        /* Metrics Grid */
        .hero-metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .hero-metric-card {
          padding: 24px;
          border-radius: var(--radius-lg);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .hero-metric-card:hover {
          transform: translateY(-4px);
          border-color: rgba(74, 222, 128, 0.4);
        }

        .metric-header {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 6px;
        }

        .metric-number {
          font-family: var(--font-heading);
          font-size: 2.4rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
        }

        .metric-symbol {
          font-size: 1.1rem;
          font-weight: 700;
          color: #4ade80;
        }

        .metric-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 6px;
        }

        .metric-desc {
          font-size: 0.78rem;
          color: #94a3b8;
          line-height: 1.45;
        }

        @media (max-width: 1024px) {
          .hero-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hero-title {
            font-size: 3rem;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.3rem;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
          .hero-metrics-grid {
            grid-template-columns: 1fr;
          }
          .hero-btn-main, .hero-btn-sec, .hero-btn-phone {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
