"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Calculator,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  CheckCircle,
  Layers,
} from "lucide-react";

const SLIDES = [
  {
    id: 1,
    tag: "35+ Years of Construction Legacy",
    title: "Your Trusted Partner for Quality Paving Work",
    subtitle:
      "Masakorala Paving offers durable, high-density CS1-graded paving solutions, backed by 35 years of engineering expertise in infrastructure development and civil construction.",
    primaryCta: { text: "Calculate Project BOQ", href: "#calculator", icon: Calculator },
    secondaryCta: { text: "Explore Pavers", href: "#products", icon: Layers },
    badge: "SLS 1425 & ISO 9001:2015 Certified",
    image: "/images/hero.jpg",
  },
  {
    id: 2,
    tag: "CS1 Industrial Heavy Traffic Rating",
    title: "Heavy-Duty Interlock Blocks Engineered for 55+ MPa",
    subtitle:
      "Formulated with washed crushed granite and OPC 52.5N cement to withstand 40-ton laden container trucks, port logistics, and high-frequency commercial haulage.",
    primaryCta: { text: "View Heavy-Duty 80mm", href: "#products", icon: Layers },
    secondaryCta: { text: "Estimate Material", href: "#calculator", icon: Calculator },
    badge: "55.0 MPa Compressive Destruction Tested",
    image: "/images/uni-paver.jpg",
  },
  {
    id: 3,
    tag: "Eco-Permeable & Architectural Textures",
    title: "Eco Grass Grids & Washed Sparkling Stone Finishes",
    subtitle:
      "Sustainable urban drainage systems (SuDS) that recharge natural groundwater tables combined with non-slip washed quartz aggregate paving for luxury beachfront resorts.",
    primaryCta: { text: "Explore Eco Pavers", href: "#products", icon: Layers },
    secondaryCta: { text: "Instant Estimate", href: "#calculator", icon: Calculator },
    badge: "100% UV-Stable Synthetic Mineral Pigments",
    image: "/images/grass-paver.jpg",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section className="hero-slider-section">
      {/* Background Image with Dynamic Transitions */}
      <div className="hero-bg-container">
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
            />
          </div>
        ))}
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content-container">
        <div className="hero-slide-content">
          <div className="hero-pill-badge">
            <span className="pill-dot animate-pulse-glow" />
            <span className="pill-text">{slide.tag}</span>
            <span className="pill-tag">{slide.badge}</span>
          </div>

          <h1 className="hero-slider-title">{slide.title}</h1>

          <p className="hero-slider-desc">{slide.subtitle}</p>

          <div className="hero-actions-row">
            <a href={slide.primaryCta.href} className="btn-primary hero-main-btn">
              <slide.primaryCta.icon size={18} />
              <span>{slide.primaryCta.text}</span>
              <ArrowRight size={18} />
            </a>

            <a href={slide.secondaryCta.href} className="btn-outline-light hero-sec-btn">
              <slide.secondaryCta.icon size={18} />
              <span>{slide.secondaryCta.text}</span>
            </a>

            <a href="tel:+94706972703" className="hero-hotline-pill">
              <PhoneCall size={16} />
              <span>(+94) 70 697 2703</span>
            </a>
          </div>

          {/* Key Advantages Chips */}
          <div className="hero-chips-row">
            <span className="h-chip">
              <CheckCircle size={14} className="text-emerald" /> 55+ MPa Load Bearing
            </span>
            <span className="h-chip">
              <CheckCircle size={14} className="text-emerald" /> In-House SLS Lab Rigor
            </span>
            <span className="h-chip">
              <CheckCircle size={14} className="text-emerald" /> Turnkey Laying & Leveling
            </span>
            <span className="h-chip">
              <CheckCircle size={14} className="text-emerald" /> Crane-Truck Delivery
            </span>
          </div>
        </div>

        {/* Carousel Slide Indicators & Navigation Arrows */}
        <div className="hero-controls-bar">
          <div className="slide-dots">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentSlide(i)}
                className={`slide-dot ${i === currentSlide ? "active" : ""}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="slide-arrows">
            <button
              type="button"
              onClick={prevSlide}
              className="slider-arrow-btn"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="slider-arrow-btn"
              aria-label="Next Slide"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-slider-section {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          padding: 90px 0 60px;
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

        .hero-slide-img {
          object-fit: cover;
          object-position: center;
          filter: brightness(0.68) contrast(1.05);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(12, 14, 18, 0.82) 0%,
            rgba(12, 14, 18, 0.55) 50%,
            rgba(12, 14, 18, 0.95) 100%
          );
          z-index: 2;
        }

        .hero-content-container {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .hero-slide-content {
          max-width: 860px;
          animation: fadeIn 0.4s ease;
        }

        .hero-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
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
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: #ffffff;
          margin-bottom: 22px;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
        }

        .hero-slider-desc {
          font-size: 1.15rem;
          line-height: 1.7;
          color: #e2e8f0;
          max-width: 740px;
          margin-bottom: 34px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }

        .hero-actions-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 32px;
        }

        .hero-main-btn {
          padding: 16px 28px;
          font-size: 1.02rem;
        }

        .hero-sec-btn {
          padding: 16px 26px;
        }

        .hero-hotline-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 15px 22px;
          border-radius: var(--radius-md);
          background: rgba(24, 152, 66, 0.15);
          border: 1px solid rgba(74, 222, 128, 0.4);
          color: #4ade80;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        .hero-hotline-pill:hover {
          background: var(--primary-green);
          color: #ffffff;
        }

        .hero-chips-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 18px 24px;
        }

        .h-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: #e2e8f0;
          font-weight: 500;
        }

        .text-emerald {
          color: #4ade80;
        }

        /* Controls Bar */
        .hero-controls-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .slide-dots {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .slide-dot {
          width: 32px;
          height: 6px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.3);
          transition: all 0.25s ease;
        }

        .slide-dot.active {
          width: 50px;
          background: #4ade80;
        }

        .slide-arrows {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .slider-arrow-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .slider-arrow-btn:hover {
          background: var(--primary-green);
          border-color: var(--primary-green);
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .hero-slider-title {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 640px) {
          .hero-slider-title {
            font-size: 2.1rem;
          }
          .hero-slider-desc {
            font-size: 0.98rem;
          }
          .hero-actions-row {
            flex-direction: column;
            align-items: stretch;
          }
          .hero-main-btn, .hero-sec-btn, .hero-hotline-pill {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
