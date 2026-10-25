"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Phone, MessageCircle, Menu, X, ArrowRight, ShieldCheck, Download } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
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
      {/* Top Banner Bar */}
      <div className="header-top-bar">
        <div className="container top-bar-container">
          <div className="top-badge-group">
            <span className="top-cert">
              <ShieldCheck size={14} className="text-emerald" /> SLS 1425 Certified & ISO 9001:2015 Compliant
            </span>
            <span className="top-separator">|</span>
            <span className="top-sub">CIDA CS1 Heavy-Duty Engineering Pavers</span>
          </div>

          <div className="top-contact-group">
            <a href="tel:+94706972703" className="top-link">
              <Phone size={13} /> +94 70 697 2703 / +94 37 228 8940
            </a>
            <a
              href="https://wa.me/94706972703?text=Hello%20Masakorala%20Holdings,%20I%20would%20like%20to%20inquire%20about%20your%20paving%20blocks%20and%20precast%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="top-wa-badge"
            >
              <MessageCircle size={13} /> WhatsApp Technical Desk
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="header-main-nav">
        <div className="container nav-container">
          <a href="#" className="nav-brand">
            <Logo variant="dark" />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li>
              <a href="#about" className="nav-link">About</a>
            </li>
            <li>
              <a href="#products" className="nav-link">Paver Catalog</a>
            </li>
            <li>
              <a href="#calculator" className="nav-link highlight-calc">
                <span>Calculator</span>
                <span className="calc-pill">Estimator</span>
              </a>
            </li>
            <li>
              <a href="#quality" className="nav-link">Quality & Testing</a>
            </li>
            <li>
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li>
              <a href="#sustainability" className="nav-link">Eco-Paving</a>
            </li>
            <li>
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>

          {/* CTA Group */}
          <div className="nav-actions">
            <a href="#calculator" className="btn-primary header-quote-btn">
              <span>Instant Estimate</span>
              <ArrowRight size={16} />
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
              <a
                href="#about"
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Masakorala Group
              </a>
              <a
                href="#products"
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                Engineered Paver Catalog
              </a>
              <a
                href="#calculator"
                className="mobile-nav-item highlight"
                onClick={() => setMobileMenuOpen(false)}
              >
                🧮 Material BOQ & Cost Calculator
              </a>
              <a
                href="#quality"
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                SLS Lab Testing & Rigor
              </a>
              <a
                href="#projects"
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                Infrastructure Portfolio
              </a>
              <a
                href="#sustainability"
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                Permeable Eco Solutions
              </a>
              <a
                href="#contact"
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                Direct Factory Contact
              </a>
            </div>

            <div className="mobile-drawer-footer">
              <a
                href="https://wa.me/94706972703"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-100"
              >
                <MessageCircle size={18} /> Chat with Sales Engineers
              </a>
              <p className="factory-note">
                Factory: Pannala & Kurunegala Industrial Zones, Sri Lanka
              </p>
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
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(14px);
        }

        .header-top-bar {
          background: var(--brand-black);
          color: #94a3b8;
          font-size: 0.78rem;
          padding: 8px 0;
          border-bottom: 1px solid var(--brand-dark-border);
        }

        .top-bar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .top-badge-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .top-cert {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #e2e8f0;
          font-weight: 600;
        }

        .text-emerald {
          color: #4ade80;
        }

        .top-separator {
          color: #475569;
        }

        .top-sub {
          color: #94a3b8;
        }

        .top-contact-group {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .top-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #cbd5e1;
          transition: color 0.2s ease;
        }

        .top-link:hover {
          color: #ffffff;
        }

        .top-wa-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(34, 197, 94, 0.15);
          color: #4ade80;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .top-wa-badge:hover {
          background: rgba(34, 197, 94, 0.25);
          color: #ffffff;
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
          gap: 28px;
          list-style: none;
        }

        .nav-link {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--brand-black);
          transition: color 0.2s ease;
          position: relative;
        }

        .nav-link:hover {
          color: var(--primary-green);
        }

        .highlight-calc {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .calc-pill {
          font-size: 0.68rem;
          font-weight: 700;
          background: var(--primary-green-subtle);
          color: var(--primary-green-dark);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          border: 1px solid rgba(24, 152, 66, 0.25);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .header-quote-btn {
          padding: 10px 20px;
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
          top: 100px;
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
          gap: 16px;
          margin-bottom: 24px;
        }

        .mobile-nav-item {
          font-size: 1.1rem;
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
          margin-top: 16px;
        }

        .factory-note {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-align: center;
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
          .top-sub, .top-separator {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .header-top-bar {
            display: none;
          }
          .header-quote-btn {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
