"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import {
  Phone,
  Mail,
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

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
      {/* Top Banner Bar - Brand Green Bar with Balanced Alignment */}
      <div className="header-top-bar">
        <div className="container top-bar-container">
          <div className="top-cert-badge">
            <ShieldCheck size={15} className="text-emerald-light" />
            <span>Sri Lanka&apos;s CS1-Graded Paving Block Manufacturer | SLS 1425 & ISO 9001:2015</span>
          </div>

          <div className="top-actions-right">
            <a href="mailto:paving@masakoralagroup.lk" className="top-contact-link">
              <Mail size={13} />
              <span className="contact-label">EMAIL:</span>
              <strong>paving@masakoralagroup.lk</strong>
            </a>

            <span className="top-sep">|</span>

            <a href="tel:+94706972703" className="top-contact-link">
              <Phone size={13} />
              <span className="contact-label">HOTLINE:</span>
              <strong>(+94) 70 697 2703</strong>
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

          {/* Desktop Navigation Links - Centered & Aligned */}
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
          font-size: 0.82rem;
          padding: 8px 0;
        }

        .top-bar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .top-cert-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          color: #f0fdf4;
          font-size: 0.8rem;
        }

        .text-emerald-light {
          color: #bbf7d0;
          flex-shrink: 0;
        }

        .top-actions-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .top-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #ffffff;
          transition: opacity 0.2s ease;
          font-size: 0.8rem;
        }

        .top-contact-link:hover {
          opacity: 0.85;
        }

        .contact-label {
          font-size: 0.74rem;
          opacity: 0.85;
        }

        .top-sep {
          color: rgba(255, 255, 255, 0.35);
        }

        /* Nav Container */
        .header-main-nav {
          padding: 14px 0;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 26px;
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
          flex-shrink: 0;
        }

        .header-wa-btn {
          padding: 10px 20px;
          font-size: 0.88rem;
          border-radius: var(--radius-md);
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
        }

        @media (max-width: 768px) {
          .top-cert-badge {
            display: none;
          }
          .top-actions-right {
            width: 100%;
            justify-content: space-between;
          }
          .header-wa-btn {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
