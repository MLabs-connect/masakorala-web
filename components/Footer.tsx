"use client";

import React from "react";
import Logo from "./Logo";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowUp,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main-grid">
          {/* Brand Info Column */}
          <div className="footer-brand-col">
            <Logo variant="light" />
            <p className="footer-tagline">
              Sri Lanka&apos;s leading CIDA CS1-graded manufacturer of heavy-duty interlocking
              concrete paving blocks, architectural washed stone, and permeable eco systems.
              Serving government infrastructure, commercial hubs, and luxury residences since 1991.
            </p>

            <div className="footer-certs-list">
              <span className="f-cert-badge">
                <ShieldCheck size={14} className="text-emerald" /> SLS 1425 Certified
              </span>
              <span className="f-cert-badge">
                <ShieldCheck size={14} className="text-emerald" /> ISO 9001:2015
              </span>
              <span className="f-cert-badge">
                <ShieldCheck size={14} className="text-emerald" /> CIDA CS1 Rated
              </span>
            </div>
          </div>

          {/* Quick Links 1: Products */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Paving Profiles</h4>
            <ul className="footer-links-list">
              <li><a href="#products">Uni Pavers 80mm (Heavy Traffic)</a></li>
              <li><a href="#products">Uni Pavers 60mm (Driveways)</a></li>
              <li><a href="#products">Washed Eliana Architectural</a></li>
              <li><a href="#products">Eco Permeable Grass Pavers</a></li>
              <li><a href="#products">Rhombus 3D Geometric Blocks</a></li>
              <li><a href="#products">Precast Kerb Stones & Channels</a></li>
            </ul>
          </div>

          {/* Quick Links 2: Engineering & Tools */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Tools & Engineering</h4>
            <ul className="footer-links-list">
              <li><a href="#calculator">Material Quantity & BOQ Calculator</a></li>
              <li><a href="#quality">SLS 1425 Lab Testing Protocol</a></li>
              <li><a href="#projects">Infrastructure Portfolio</a></li>
              <li><a href="#sustainability">Permeable SuDS Drainage</a></li>
              <li><a href="#contact">Direct Factory Quotation</a></li>
            </ul>
          </div>

          {/* Manufacturing Centers Column */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Manufacturing Plants</h4>
            <div className="f-contact-item">
              <MapPin size={16} className="text-emerald" />
              <div>
                <strong>Pannala Main Plant:</strong>
                <span>Industrial Zone, Kurunegala Rd, Pannala</span>
              </div>
            </div>

            <div className="f-contact-item">
              <MapPin size={16} className="text-emerald" />
              <div>
                <strong>Kurunegala Facility:</strong>
                <span>Dambulla Road, Kurunegala</span>
              </div>
            </div>

            <div className="f-contact-item">
              <Phone size={16} className="text-emerald" />
              <div>
                <strong>Technical Sales Hotlines:</strong>
                <a href="tel:+94706972703">+94 70 697 2703</a> /{" "}
                <a href="tel:+94372288940">+94 37 228 8940</a>
              </div>
            </div>

            <div className="f-contact-item">
              <MessageCircle size={16} className="text-emerald" />
              <a
                href="https://wa.me/94706972703"
                target="_blank"
                rel="noopener noreferrer"
                className="f-wa-link"
              >
                Chat on WhatsApp (+94 70 697 2703)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © 2026 Masakorala Holdings (Pvt) Ltd. All Rights Reserved.
            Manufactured in Sri Lanka to International Civil Engineering Standards.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background: #080a0d;
          color: #94a3b8;
          padding: 80px 0 32px;
          border-top: 1px solid var(--brand-dark-border);
        }

        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 48px;
          margin-bottom: 60px;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .footer-tagline {
          font-size: 0.86rem;
          line-height: 1.65;
          color: #94a3b8;
        }

        .footer-certs-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 6px;
        }

        .f-cert-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          color: #e2e8f0;
          font-weight: 600;
        }

        .text-emerald {
          color: #4ade80;
        }

        .footer-col-title {
          font-family: var(--font-heading);
          font-size: 1.02rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links-list a {
          font-size: 0.85rem;
          color: #94a3b8;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        .footer-links-list a:hover {
          color: #4ade80;
          transform: translateX(4px);
        }

        .footer-contact-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .f-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.82rem;
        }

        .f-contact-item strong {
          display: block;
          color: #f1f5f9;
        }

        .f-contact-item span,
        .f-contact-item a {
          color: #94a3b8;
        }

        .f-contact-item a:hover {
          color: #4ade80;
        }

        .f-wa-link {
          color: #4ade80 !important;
          font-weight: 600;
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.8rem;
          color: #64748b;
          flex-wrap: wrap;
          gap: 16px;
        }

        .scroll-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #cbd5e1;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.2s ease;
        }

        .scroll-top-btn:hover {
          color: #ffffff;
          background: rgba(24, 152, 66, 0.3);
          border-color: #4ade80;
        }

        @media (max-width: 1024px) {
          .footer-main-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .footer-main-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .footer-bottom-bar {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
