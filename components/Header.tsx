"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import {
  Phone,
  Mail,
  Grid3X3,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Building,
  Layers,
  Truck,
  HardHat,
  Home as HomeIcon,
} from "lucide-react";

const SUBSIDIARIES = [
  {
    name: "Masakorala Holdings",
    type: "Parent Conglomerate",
    desc: "Strategic investments and corporate leadership across construction, manufacturing, and real estate.",
    icon: Building,
    badge: "Group HQ",
  },
  {
    name: "Masakorala Paving",
    type: "CS1 Paving Manufacturer",
    desc: "Sri Lanka's leading manufacturer of heavy-duty interlocking pavers, washed stone & eco grass blocks.",
    icon: Layers,
    badge: "Current Site",
    active: true,
  },
  {
    name: "Masakorala Ready-Mix",
    type: "Concrete Technology",
    desc: "Computerized batching plants supplying high-grade M20 to M60 ready-mix concrete for tier-1 projects.",
    icon: HardHat,
    badge: "Pannala & Kurunegala",
  },
  {
    name: "Masakorala Construction",
    type: "Civil Engineering",
    desc: "Specialized infrastructure, land development, sub-base preparation, and commercial earthworks.",
    icon: Truck,
    badge: "CIDA Registered",
  },
  {
    name: "Masakorala Real Estate",
    type: "Property & Lands",
    desc: "Prime commercial, industrial logistics parks, and residential gated community developments.",
    icon: HomeIcon,
    badge: "Islandwide Lands",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [subsidiariesOpen, setSubsidiariesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      {/* Top Banner Bar - Brand Green Bar */}
      <div className="header-top-bar">
        <div className="container top-bar-container">
          <div className="top-cert-badge d-none-mobile">
            <ShieldCheck size={14} className="text-emerald-light" />
            <span>Sri Lanka&apos;s CS1-Graded Paving Block Manufacturer | SLS 1425 & ISO 9001:2015</span>
          </div>

          <div className="top-actions-right">
            <a href="mailto:paving@masakoralagroup.lk" className="top-contact-link">
              <Mail size={13} />
              <span className="d-none-mobile">EMAIL:</span>
              <strong>paving@masakoralagroup.lk</strong>
            </a>

            <span className="top-sep">|</span>

            <a href="tel:+94706972703" className="top-contact-link">
              <Phone size={13} />
              <span className="d-none-mobile">HOTLINE:</span>
              <strong>(+94) 70 697 2703</strong>
            </a>

            {/* Our Subsidiaries Dropdown Trigger */}
            <button
              type="button"
              onClick={() => setSubsidiariesOpen(!subsidiariesOpen)}
              className={`subsidiary-toggle-btn ${subsidiariesOpen ? "active" : ""}`}
              aria-expanded={subsidiariesOpen}
            >
              <Grid3X3 size={14} />
              <span>Our Subsidiaries</span>
              {subsidiariesOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Drawer: Group Subsidiaries */}
      {subsidiariesOpen && (
        <div className="subsidiaries-mega-drawer">
          <div className="container">
            <div className="subsidiaries-drawer-grid">
              <div className="subsidiary-intro-col">
                <span className="sub-badge">Masakorala Group of Companies</span>
                <h3 className="sub-heading">Over 35 Years of Engineering Excellence</h3>
                <p className="sub-para">
                  Masakorala Group excels in construction, material supply, precision precast
                  infrastructure, ready-mix concrete, and commercial property development.
                  Dedicated to quality, trust, and lasting value across Sri Lanka.
                </p>
                <div className="sub-hotline-note">
                  <span>Group Head Office: Negombo Road, Kurunegala</span>
                  <a href="tel:+94706972703" className="sub-call">
                    Call Central Desk: (+94) 70 697 2703
                  </a>
                </div>
              </div>

              <div className="subsidiary-cards-grid">
                {SUBSIDIARIES.map((sub, idx) => {
                  const Icon = sub.icon;
                  return (
                    <div
                      key={idx}
                      className={`subsidiary-item-card ${sub.active ? "current-active" : ""}`}
                    >
                      <div className="sub-card-top">
                        <div className="sub-icon-box">
                          <Icon size={18} />
                        </div>
                        <span className="sub-card-badge">{sub.badge}</span>
                      </div>
                      <h4 className="sub-card-name">{sub.name}</h4>
                      <span className="sub-card-type">{sub.type}</span>
                      <p className="sub-card-desc">{sub.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation Bar */}
      <nav className="header-main-nav">
        <div className="container nav-container">
          <a href="#" className="nav-brand">
            <Logo variant="dark" />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li>
              <a href="#" className="nav-link active">Home</a>
            </li>
            <li>
              <a href="#about" className="nav-link">About Us</a>
            </li>
            <li>
              <a href="#products" className="nav-link">Products</a>
            </li>
            <li>
              <a href="#calculator" className="nav-link highlight-calc">
                <span>Calculator</span>
                <span className="calc-pill">Tool</span>
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li>
              <a href="#csr" className="nav-link">CSR & Green</a>
            </li>
            <li>
              <a href="#blogs" className="nav-link">Blogs</a>
            </li>
            <li>
              <a href="#contact" className="nav-link">Contact Us</a>
            </li>
          </ul>

          {/* CTA & Mobile Toggle */}
          <div className="nav-actions">
            <a
              href="https://wa.me/94706972703?text=Hello%20Masakorala%20Holdings,%20I%20would%20like%20to%20get%20a%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary header-wa-btn"
            >
              <MessageCircle size={16} />
              <span>Get Quotation</span>
            </a>

            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass-panel">
          <div className="mobile-drawer-inner">
            <div className="mobile-nav-list">
              <a href="#" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>About Us</a>
              <a href="#products" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Products Catalog</a>
              <a href="#calculator" className="mobile-nav-item highlight" onClick={() => setMobileMenuOpen(false)}>
                🧮 Material BOQ & Cost Calculator
              </a>
              <a href="#projects" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Projects Portfolio</a>
              <a href="#csr" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Community & CSR</a>
              <a href="#blogs" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Technical Blogs</a>
              <a href="#contact" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
            </div>

            <div className="mobile-drawer-footer">
              <a
                href="https://wa.me/94706972703"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-100"
              >
                <MessageCircle size={18} /> WhatsApp Technical Desk
              </a>
              <div className="mobile-factory-info">
                <span>Pannala & Kurunegala Plants</span>
                <a href="tel:+94706972703">(+94) 70 697 2703</a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #ffffff;
          transition: all 0.3s ease;
          border-bottom: 1px solid var(--surface-border);
        }

        .site-header.scrolled {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          background: rgba(255, 255, 255, 0.98);
        }

        /* Top Bar - Brand Emerald */
        .header-top-bar {
          background: var(--primary-green);
          color: #ffffff;
          font-size: 0.8rem;
          padding: 7px 0;
        }

        .top-bar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .top-cert-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          color: #f0fdf4;
        }

        .text-emerald-light {
          color: #bbf7d0;
        }

        .top-actions-right {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-left: auto;
        }

        .top-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #ffffff;
          transition: opacity 0.2s ease;
        }

        .top-contact-link:hover {
          opacity: 0.85;
        }

        .top-sep {
          color: rgba(255, 255, 255, 0.4);
        }

        .subsidiary-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.18);
          color: #ffffff;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.76rem;
          font-weight: 700;
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.2s ease;
        }

        .subsidiary-toggle-btn:hover,
        .subsidiary-toggle-btn.active {
          background: #ffffff;
          color: var(--primary-green-dark);
        }

        /* Subsidiaries Mega Drawer */
        .subsidiaries-mega-drawer {
          background: #0f141c;
          color: #ffffff;
          border-bottom: 3px solid var(--primary-green);
          padding: 32px 0 40px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
          animation: fadeIn 0.25s ease;
        }

        .subsidiaries-drawer-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 40px;
          align-items: start;
        }

        .sub-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #4ade80;
          letter-spacing: 0.08em;
          display: block;
          margin-bottom: 8px;
        }

        .sub-heading {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 12px;
          color: #ffffff;
        }

        .sub-para {
          font-size: 0.82rem;
          color: #94a3b8;
          line-height: 1.55;
          margin-bottom: 20px;
        }

        .sub-hotline-note {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 0.76rem;
          color: #cbd5e1;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 14px;
        }

        .sub-call {
          color: #4ade80;
          font-weight: 700;
        }

        .subsidiary-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .subsidiary-item-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 18px;
          transition: all 0.2s ease;
        }

        .subsidiary-item-card:hover {
          background: rgba(255, 255, 255, 0.09);
          border-color: rgba(74, 222, 128, 0.4);
          transform: translateY(-2px);
        }

        .subsidiary-item-card.current-active {
          border-color: var(--primary-green);
          background: rgba(24, 152, 66, 0.12);
        }

        .sub-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .sub-icon-box {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          background: rgba(24, 152, 66, 0.2);
          color: #4ade80;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sub-card-badge {
          font-size: 0.68rem;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        .subsidiary-item-card.current-active .sub-card-badge {
          background: var(--primary-green);
          color: #ffffff;
        }

        .sub-card-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2px;
        }

        .sub-card-type {
          font-size: 0.72rem;
          color: #4ade80;
          font-weight: 600;
          display: block;
          margin-bottom: 6px;
        }

        .sub-card-desc {
          font-size: 0.76rem;
          color: #94a3b8;
          line-height: 1.4;
        }

        /* Nav Container */
        .header-main-nav {
          padding: 14px 0;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-brand {
          display: flex;
          align-items: center;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
          list-style: none;
        }

        .nav-link {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--brand-black);
          transition: color 0.2s ease;
          padding-bottom: 4px;
          position: relative;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--primary-green);
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--primary-green);
          border-radius: 2px;
        }

        .highlight-calc {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .calc-pill {
          font-size: 0.66rem;
          font-weight: 700;
          background: var(--primary-green-subtle);
          color: var(--primary-green-dark);
          padding: 2px 7px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(24, 152, 66, 0.25);
          text-transform: uppercase;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .header-wa-btn {
          padding: 10px 18px;
          font-size: 0.88rem;
        }

        .mobile-toggle {
          display: none;
          color: var(--brand-black);
          padding: 6px;
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 96px;
          left: 0;
          right: 0;
          bottom: 0;
          background: #ffffff;
          padding: 24px;
          z-index: 999;
          overflow-y: auto;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 24px;
        }

        .mobile-nav-item {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--brand-black);
          padding: 10px 0;
          border-bottom: 1px solid var(--surface-border);
        }

        .mobile-nav-item.highlight {
          color: var(--primary-green-dark);
          background: var(--primary-green-subtle);
          padding: 12px 16px;
          border-radius: var(--radius-md);
          border: none;
        }

        .mobile-drawer-footer {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mobile-factory-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--stone-mid);
        }

        .mobile-factory-info a {
          color: var(--primary-green-dark);
          font-weight: 700;
        }

        .w-100 {
          width: 100%;
        }

        @media (max-width: 1024px) {
          .nav-links {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .subsidiaries-drawer-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .subsidiary-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .d-none-mobile {
            display: none;
          }
          .header-wa-btn {
            display: none;
          }
          .subsidiary-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </header>
  );
}
