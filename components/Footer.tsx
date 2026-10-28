"use client";

import React from "react";
import Image from "next/image";
import Logo from "./Logo";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* High-Impact CTA Banner: Contact Us For Enquiries */}
      <section className="enquiry-cta-banner">
        <div className="container">
          <div className="enquiry-banner-box">
            <h2 className="enquiry-title">Contact Us</h2>
            <p className="enquiry-sub">
              Our civil materials team is available to assist you with site measurements,
              batch testing certificates, and direct factory discounts.
            </p>
            <div className="enquiry-actions">
              <a
                href="https://wa.me/94706972703?text=Hello%20Masakorala%20Holdings,%20I%20would%20like%20to%20get%20a%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="enquiry-btn-wa"
              >
                <MessageCircle size={18} />
                <span>WhatsApp: (+94) 71 866 5665</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer with Perfectly Aligned 3-Column Layout */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main-grid">
            {/* Column 1: Company Profile */}
            <div className="footer-col footer-col-profile">
              <div className="footer-logo-wrapper">
                <Logo variant="light" />
              </div>
              <p className="footer-company-desc">
                With 35+ years of excellence, Masakorala Holdings is Sri Lanka&apos;s
                CS1-graded paving manufacturer, delivering high-density interlocking blocks,
                permeable grass grids, and architectural exposed aggregates engineered to
                SLS 1425 and ISO 9001:2015 specifications.
              </p>
              <div className="footer-cert-tags">
                <span className="footer-cert-badge">SLS 1425 Certified</span>
                <span className="footer-cert-badge">ISO 9001:2015</span>
                <span className="footer-cert-badge">CS1 Specialty Grade</span>
              </div>
            </div>

            {/* Column 2: Direct Contact Info */}
            <div className="footer-col footer-col-contact">
              <h4 className="footer-col-title">Factory & Sales Inquiries</h4>
              <div className="footer-contact-list">
                <div className="contact-item">
                  <MapPin size={16} className="text-emerald icon-flex" />
                  <p>Head Office: No13 Sarananda Rd, Matara 81000</p>
                </div>
                <div className="contact-item">
                  <Phone size={16} className="text-emerald icon-flex" />
                  <a href="tel:+94706972703">(+94) 71 866 5665 (Hotline)</a>
                </div>
                <div className="contact-item">
                  <Mail size={16} className="text-emerald icon-flex" />
                  <a href="mailto:masakoralaholdings@gmail.com">masakoralaholdings@gmail.com</a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="social-links-row">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="Instagram"
                >
                  ig
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a
                  href="https://wa.me/94706972703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn wa"
                  aria-label="WhatsApp"
                >
                  wa
                </a>
              </div>
            </div>

            {/* Column 3: Quick Navigation Links */}
            <div className="footer-col footer-col-links">
              <h4 className="footer-col-title">Quick Navigation</h4>
              <ul className="footer-links-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#products">Products Catalog</a></li>
                <li><a href="#calculator">Material Calculator</a></li>
                <li><a href="#projects">Our Projects</a></li>
                <li><a href="#reviews">Client Reviews</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="footer-bottom-bar">
          <div className="container footer-bottom-container">
            <p className="copyright-text">
              © Copyright 2026 Masakorala Holdings (Pvt) Ltd. All Rights Reserved.
            </p>
            <div className="crafted-by-wrapper">
              <span className="crafted-text">Crafted by</span>
              <Image
                src="/mlabs.png"
                alt="MLabs"
                width={88}
                height={26}
                className="crafted-logo"
              />
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* Enquiry CTA Banner */
        .enquiry-cta-banner {
          background: linear-gradient(135deg, #14171d 0%, #0c0e12 100%);
          padding: 60px 0;
          color: #ffffff;
          border-top: 3px solid var(--primary-green);
        }

        .enquiry-banner-box {
          text-align: center;
          max-width: 780px;
          margin: 0 auto;
        }

        .enquiry-title {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .enquiry-sub {
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 28px;
        }

        .enquiry-actions {
          display: flex;
          justify-content: center;
        }

        .enquiry-btn-wa {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: #25d366;
          color: #ffffff;
          border: 1px solid #25d366;
          border-radius: var(--radius-full);
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);
          transition: all 0.25s ease;
          min-height: 48px;
        }

        .enquiry-btn-wa:hover {
          background: #20ba59;
          border-color: #20ba59;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
        }

        /* Site Footer */
        .site-footer {
          background: #090c10;
          color: #cbd5e1;
          padding: 72px 0 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.4fr 1.25fr 0.85fr;
          gap: 52px;
          margin-bottom: 56px;
          align-items: start;
        }

        .footer-logo-wrapper {
          margin-bottom: 18px;
          display: inline-block;
        }

        .footer-company-desc {
          font-size: 0.88rem;
          line-height: 1.7;
          color: #94a3b8;
          margin-bottom: 20px;
          max-width: 440px;
        }

        .footer-cert-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .footer-cert-badge {
          display: inline-flex;
          align-items: center;
          font-size: 0.72rem;
          font-weight: 700;
          color: #4ade80;
          background: rgba(24, 152, 66, 0.12);
          border: 1px solid rgba(74, 222, 128, 0.25);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          letter-spacing: 0.02em;
        }

        /* Column Topics */
        .footer-col-title {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 18px;
          letter-spacing: 0.01em;
          position: relative;
          padding-bottom: 10px;
        }

        .footer-col-title::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 32px;
          height: 2px;
          background: var(--primary-green);
          border-radius: 2px;
        }

        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 0.85rem;
          color: #94a3b8;
          margin-bottom: 20px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          line-height: 1.5;
        }

        .contact-item a {
          color: #cbd5e1;
          transition: color 0.2s ease;
        }

        .contact-item a:hover {
          color: #4ade80;
        }

        .icon-flex {
          flex-shrink: 0;
          margin-top: 3px;
        }

        .text-emerald {
          color: #4ade80;
        }

        .social-links-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .social-icon-btn {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          transition: all 0.2s ease;
        }

        .social-icon-btn:hover {
          background: var(--primary-green);
          transform: translateY(-2px);
        }

        .social-icon-btn.wa {
          background: rgba(37, 211, 102, 0.22);
          color: #4ade80;
        }

        /* Links List */
        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .footer-links-list a {
          font-size: 0.86rem;
          color: #94a3b8;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        .footer-links-list a:hover {
          color: #4ade80;
          transform: translateX(3px);
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          background: #05070a;
          padding: 20px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-bottom-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
          color: #64748b;
          flex-wrap: wrap;
          gap: 14px;
        }

        .copyright-text {
          color: #94a3b8;
        }

        .crafted-by-wrapper {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .crafted-text {
          font-size: 0.76rem;
          color: #94a3b8;
          font-weight: 500;
        }

        :global(.crafted-logo) {
          object-fit: contain !important;
          height: auto !important;
          max-height: 24px !important;
          width: auto !important;
          display: inline-block;
          vertical-align: middle;
          opacity: 0.85;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .crafted-by-wrapper:hover :global(.crafted-logo) {
          opacity: 1;
          transform: scale(1.05);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
          .footer-col-profile {
            grid-column: 1 / -1;
          }
          .footer-company-desc {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .site-footer {
            padding: 52px 0 0;
          }
          .footer-main-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            margin-bottom: 38px;
          }
          .footer-col-profile {
            grid-column: auto;
          }
          .footer-col-title {
            margin-bottom: 14px;
            font-size: 1rem;
          }
          .footer-bottom-container {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
          .enquiry-cta-banner {
            padding: 44px 0;
          }
          .enquiry-title {
            font-size: 1.7rem;
          }
          .enquiry-sub {
            font-size: 0.92rem;
            margin-bottom: 22px;
          }
        }

        @media (max-width: 480px) {
          .enquiry-btn-wa {
            width: 100%;
            justify-content: center;
            padding: 13px 18px;
            font-size: 0.88rem;
          }
          .copyright-text {
            font-size: 0.74rem;
          }
        }
      `}</style>
    </>
  );
}
