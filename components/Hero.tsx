"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  CheckCircle,
  Layers,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

const SLIDES = [
  {
    id: 1,
    tag: "35+ Years of Construction Legacy",
    title: "Your Trusted Partner for Quality Paving Work",
    subtitle:
      "Masakorala Holdings offers durable, high-density CS1-graded paving solutions, backed by 35 years of engineering expertise in infrastructure development and civil construction.",
    badge: "SLS 1425 & ISO 9001:2015 Certified",
    image: "/images/projects/waterfront-port.jpg",
    mobileHighlight: "Landmark Marine & Port Infrastructure",
  },
  {
    id: 2,
    tag: "CS1 Industrial Heavy Traffic Rating",
    title: "Heavy-Duty Interlock Blocks Engineered for 55+ MPa",
    subtitle:
      "Formulated with washed crushed granite and OPC 52.5N cement to withstand 40-ton laden container trucks, port logistics, and high-frequency commercial haulage.",
    badge: "55.0 MPa Compressive Destruction Tested",
    image: "/images/projects/expressway-toll.jpg",
    mobileHighlight: "Heavy Haulage Expressways & Hubs",
  },
  {
    id: 3,
    tag: "Eco-Permeable & Architectural Textures",
    title: "Eco Grass Grids & Washed Sparkling Stone Finishes",
    subtitle:
      "Sustainable urban drainage systems (SuDS) that recharge natural groundwater tables combined with non-slip washed quartz aggregate paving for luxury resorts and villas.",
    badge: "100% UV-Stable Synthetic Mineral Pigments",
    image: "/images/projects/brandix-eco.jpg",
    mobileHighlight: "Eco-Permeable Green Industrial Parks",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const slide = SLIDES[currentSlide];

  return (
    <section id="home" className="hero-slider-section">
      {/* Background Image for Desktop View with Dynamic Transitions */}
      <div className="hero-bg-container desktop-only-bg">
        {SLIDES.map((s, idx) => (
          <div
            key={s.id}
            className={`hero-slide-media ${idx === currentSlide ? "active" : ""}`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              priority={idx === 0}
              className="hero-slide-img"
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        ))}
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content-container">
        <div className="hero-slide-content">
          {/* Dedicated Mobile Interactive Visual Showcase Card */}
          <div className="hero-mobile-visual-card">
            <div className="mobile-card-media-wrap">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="mobile-card-img"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="mobile-card-overlay">
                <span className="mobile-card-badge">
                  <ShieldCheck size={13} className="text-emerald" />
                  {slide.mobileHighlight}
                </span>
              </div>

              {/* Mobile Arrows */}
              <button
                type="button"
                onClick={handlePrev}
                className="mobile-slide-arrow prev"
                aria-label="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="mobile-slide-arrow next"
                aria-label="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Mobile Dots */}
            <div className="mobile-card-dots">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentSlide(i)}
                  className={`mobile-dot ${i === currentSlide ? "active" : ""}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Trust Badge Pill */}
          <div className="hero-pill-badge">
            <span className="pill-dot animate-pulse-glow" />
            <span className="pill-text">{slide.tag}</span>
            <span className="pill-tag">{slide.badge}</span>
          </div>

          <h1 className="hero-slider-title">{slide.title}</h1>

          <p className="hero-slider-desc">{slide.subtitle}</p>

          {/* Action Buttons Row */}
          <div className="hero-actions-row">
            <a href="#products" className="btn-primary hero-main-btn">
              <Layers size={18} />
              <span>Explore Pavers</span>
            </a>
          </div>

          {/* Key Advantages Chips */}
          <div className="hero-chips-row">
            <span className="h-chip">
              <CheckCircle size={15} className="text-emerald" />
              <span>55+ MPa Load Bearing</span>
            </span>
            <span className="h-chip">
              <CheckCircle size={15} className="text-emerald" />
              <span>In-House SLS Lab Rigor</span>
            </span>
            <span className="h-chip">
              <CheckCircle size={15} className="text-emerald" />
              <span>Turnkey Laying & Leveling</span>
            </span>
            <span className="h-chip">
              <CheckCircle size={15} className="text-emerald" />
              <span>Crane-Truck Islandwide Delivery</span>
            </span>
          </div>
        </div>

        {/* Desktop Carousel Slide Indicators */}
        <div className="hero-controls-bar">
          <div className="slide-dots">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentSlide(i)}
                className={`slide-dot ${i === currentSlide ? "active" : ""}`}
                aria-label={`Go to slide ${i + 1}`}
              >
                <span className="slide-dot-inner" />
              </button>
            ))}
          </div>
          <div className="slide-status-text">
            <span>Slide 0{currentSlide + 1}</span> / 0{SLIDES.length}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-slider-section {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          padding: 85px 0 60px;
          overflow: hidden;
          background: #0c0e12;
          color: #ffffff;
        }

        .hero-bg-container {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-slide-media {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-slide-media.active {
          opacity: 1;
        }

        :global(.hero-slide-img) {
          object-fit: cover !important;
          object-position: center center !important;
          filter: brightness(0.62) contrast(1.08);
          width: 100% !important;
          height: 100% !important;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(12, 14, 18, 0.86) 0%,
            rgba(12, 14, 18, 0.6) 50%,
            rgba(12, 14, 18, 0.96) 100%
          );
          z-index: 2;
        }

        .hero-content-container {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          gap: 40px;
          width: 100%;
        }

        .hero-slide-content {
          max-width: 860px;
          animation: fadeIn 0.4s ease;
        }

        .hero-pill-badge {
          display: inline-flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px 10px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.22);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          margin-bottom: 20px;
          max-width: 100%;
        }

        .pill-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .pill-text {
          font-size: 0.84rem;
          font-weight: 600;
          color: #f1f5f9;
        }

        .pill-tag {
          background: var(--primary-green);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: var(--radius-full);
        }

        .hero-slider-title {
          font-family: var(--font-heading);
          font-size: 3.25rem;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.015em;
          color: #ffffff;
          margin-bottom: 20px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.65);
          word-break: normal;
          overflow-wrap: break-word;
        }

        .hero-slider-desc {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #e2e8f0;
          max-width: 740px;
          margin-bottom: 32px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }

        .hero-actions-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 30px;
        }

        .hero-main-btn {
          padding: 14px 26px;
          font-size: 0.98rem;
          font-weight: 700;
          min-height: 48px;
        }

        /* Mobile Visual Card (Hidden on Desktop, Visible on Mobile) */
        .hero-mobile-visual-card {
          display: none;
        }

        /* Key Advantages Chips */
        .hero-chips-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px 14px;
        }

        .h-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.84rem;
          color: #f1f5f9;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          padding: 7px 14px;
          border-radius: var(--radius-full);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .text-emerald {
          color: #4ade80;
          flex-shrink: 0;
        }

        /* Desktop Controls Bar */
        .hero-controls-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .slide-dots {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .slide-dot {
          width: 34px;
          height: 6px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.3);
          transition: all 0.25s ease;
          padding: 0;
          cursor: pointer;
        }

        .slide-dot.active {
          width: 54px;
          background: #4ade80;
        }

        .slide-status-text {
          font-size: 0.82rem;
          color: #94a3b8;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        /* ========================================================
           Mobile Responsive Styles (< 768px)
           ======================================================== */
        @media (max-width: 768px) {
          .hero-slider-section {
            min-height: auto;
            padding: 42px 0 36px;
            background: linear-gradient(180deg, #090c10 0%, #10151e 100%);
          }

          /* Soften background image on mobile so it acts as subtle atmospheric texture */
          .desktop-only-bg {
            opacity: 0.35;
          }

          .hero-content-container {
            gap: 26px;
          }

          .hero-pill-badge {
            display: none !important;
          }

          .pill-text {
            font-size: 0.76rem;
          }

          .pill-tag {
            font-size: 0.68rem;
            padding: 2px 7px;
          }

          .hero-slider-title {
            font-size: clamp(1.85rem, 7vw, 2.45rem);
            line-height: 1.22;
            margin-bottom: 16px;
          }

          .hero-slider-desc {
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 22px;
            color: #cbd5e1;
          }

          .hero-actions-row {
            display: flex;
            margin-bottom: 22px;
            width: 100%;
          }

          .hero-main-btn {
            width: 100%;
            justify-content: center;
            padding: 12px 14px;
            font-size: 0.88rem;
            min-height: 46px;
            gap: 8px;
          }

          /* Dedicated Mobile Showcase Card */
          .hero-mobile-visual-card {
            display: block;
            margin-bottom: 22px;
            border-radius: 18px;
            overflow: hidden;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.12);
            padding: 8px;
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
          }

          .mobile-card-media-wrap {
            position: relative;
            width: 100%;
            height: 200px;
            border-radius: 12px;
            overflow: hidden;
          }

          :global(.mobile-card-img) {
            object-fit: cover !important;
            object-position: center center !important;
          }

          .mobile-card-overlay {
            position: absolute;
            bottom: 10px;
            left: 10px;
            right: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 2;
          }

          .mobile-card-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 5px 10px;
            background: rgba(12, 14, 18, 0.85);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 8px;
            color: #ffffff;
            font-size: 0.72rem;
            font-weight: 600;
          }

          .mobile-slide-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background: rgba(12, 14, 18, 0.7);
            color: #ffffff;
            border: 1px solid rgba(255, 255, 255, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 3;
            transition: all 0.2s ease;
          }

          .mobile-slide-arrow.prev {
            left: 8px;
          }

          .mobile-slide-arrow.next {
            right: 8px;
          }

          .mobile-card-dots {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            padding: 10px 0 4px;
          }

          .mobile-dot {
            width: 22px;
            height: 4px;
            border-radius: 2px;
            background: rgba(255, 255, 255, 0.25);
            transition: all 0.2s ease;
            cursor: pointer;
          }

          .mobile-dot.active {
            width: 36px;
            background: #4ade80;
          }

          /* 2-Column Mobile Chips */
          .hero-chips-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
            width: 100%;
          }

          .h-chip {
            padding: 8px 10px;
            font-size: 0.76rem;
            border-radius: 10px;
            gap: 6px;
            justify-content: flex-start;
          }

          .hero-controls-bar {
            display: none;
          }
        }

        @media (max-width: 440px) {
          .hero-chips-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
