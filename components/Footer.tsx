"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowUp,
  MessageCircle,
  Bell,
  CheckCircle2,
  Check,
} from "lucide-react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      {/* High-Impact CTA Banner: Contact Us For Enquiries */}
      <section className="enquiry-cta-banner">
        <div className="container">
          <div className="enquiry-banner-box">
            <h2 className="enquiry-title">Contact Us For Enquiries & Immediate Quotations</h2>
            <p className="enquiry-sub">
              Our civil materials team is available to assist you with site measurements,
              batch testing certificates, and direct factory discounts.
            </p>
            <div className="enquiry-actions">
              <a href="#contact" className="btn-primary enquiry-btn">
                <span>Send Site Details</span>
              </a>
              <a
                href="https://wa.me/94706972703?text=Hello%20Masakorala%20Holdings,%20I%20would%20like%20to%20get%20a%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary enquiry-btn-wa"
              >
                <MessageCircle size={18} className="text-emerald" />
                <span>WhatsApp: (+94) 70 697 2703</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer with Symmetrical 4-Column Layout */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main-grid">
            {/* Column 1: Company Profile & Newsletter */}
            <div className="footer-col-1">
              <div className="footer-logo-wrapper">
                <Logo variant="light" />
              </div>
              <p className="footer-company-desc">
                With 35+ years of excellence, Masakorala Holdings specializes in
                heavy-duty interlocking paving, washed architectural stone, and eco-permeable
                concrete solutions, ensuring certified quality and sustainable innovation across Sri Lanka.
              </p>

              {/* Newsletter Subscription */}
              <div className="newsletter-wrapper">
                <span className="newsletter-label">Subscribe to Our Newsletter:</span>
                {subscribed ? (
                  <div className="subscribe-success">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Thank you for subscribing!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="newsletter-form">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="newsletter-input"
                    />
                    <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                      <Bell size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Column 2: Direct Contact Info */}
            <div className="footer-col">
              <h4 className="footer-col-title">Contact Info</h4>
              <div className="footer-contact-list">
                <div className="contact-item">
                  <MapPin size={16} className="text-emerald icon-flex" />
                  <p>Head Office: 123/10 Negombo Road, Kurunegala</p>
                </div>
                <div className="contact-item">
                  <MapPin size={16} className="text-emerald icon-flex" />
                  <p>Pannala Mega Plant: No. 925, Maddumamulla Estate, Pannala</p>
                </div>
                <div className="contact-item">
                  <Phone size={16} className="text-emerald icon-flex" />
                  <a href="tel:+94706972703">(+94) 70 697 2703</a>
                </div>
                <div className="contact-item">
                  <Phone size={16} className="text-emerald icon-flex" />
                  <a href="tel:+94372288940">(+94) 37 228 8940</a>
                </div>
                <div className="contact-item">
                  <Mail size={16} className="text-emerald icon-flex" />
                  <a href="mailto:paving@masakoralagroup.lk">paving@masakoralagroup.lk</a>
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
            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links-list">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#products">Products Catalog</a></li>
                <li><a href="#calculator">Paving BOQ Calculator</a></li>
                <li><a href="#quality">Quality & Testing Standards</a></li>
                <li><a href="#projects">Projects Portfolio</a></li>
                <li><a href="#blogs">Technical Blog</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            {/* Column 4: Quality Rigor & Plant Facilities */}
            <div className="footer-col">
              <h4 className="footer-col-title">Standards & Plants</h4>
              <div className="footer-standards-list">
                <div className="std-item">
                  <ShieldCheck size={16} className="text-emerald" />
                  <span>SLS 1425 Specification for Concrete Paving</span>
                </div>
                <div className="std-item">
                  <ShieldCheck size={16} className="text-emerald" />
                  <span>ISO 9001:2015 Quality Management Certified</span>
                </div>
                <div className="std-item">
                  <ShieldCheck size={16} className="text-emerald" />
                  <span>CIDA CS1 Highest Construction Grading</span>
                </div>
                <div className="std-item">
                  <Check size={15} className="text-emerald" />
                  <span>In-House 2000 kN Destruction Load Frame</span>
                </div>
                <div className="std-item">
                  <Check size={15} className="text-emerald" />
                  <span>Boom Crane Direct Islandwide Delivery</span>
                </div>
              </div>

              <div className="cert-strip-footer">
                <span className="cert-mini-badge">SLS 1425</span>
                <span className="cert-mini-badge">ISO 9001:2015</span>
                <span className="cert-mini-badge">CIDA CS1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="footer-bottom-bar">
          <div className="container footer-bottom-container">
            <p className="copyright-text">
              © Copyright 2026 Masakorala Holdings (Pvt) Ltd. All Rights Reserved.
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className="footer-back-to-top"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
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
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .enquiry-btn {
          padding: 14px 28px;
        }

        .enquiry-btn-wa {
          padding: 14px 24px;
        }

        /* Site Footer */
        .site-footer {
          background: #090c10;
          color: #cbd5e1;
          padding: 70px 0 0;
        }

        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.35fr 1.15fr 0.9fr 1.1fr;
          gap: 40px;
          margin-bottom: 56px;
        }

        .footer-logo-wrapper {
          margin-bottom: 16px;
        }

        .footer-company-desc {
          font-size: 0.84rem;
          line-height: 1.65;
          color: #94a3b8;
          margin-bottom: 22px;
        }

        /* Newsletter */
        .newsletter-label {
          display: block;
          font-size: 0.78rem;
          font-weight: 600;
          color: #f1f5f9;
          margin-bottom: 8px;
        }

        .newsletter-form {
          display: flex;
          max-width: 320px;
        }

        .newsletter-input {
          flex-grow: 1;
          padding: 10px 14px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-right: none;
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          font-size: 0.84rem;
          outline: none;
          border-radius: var(--radius-sm) 0 0 var(--radius-sm);
        }

        .newsletter-input:focus {
          border-color: var(--primary-green);
        }

        .newsletter-btn {
          background: var(--primary-green);
          color: #ffffff;
          padding: 10px 16px;
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }

        .newsletter-btn:hover {
          background: var(--primary-green-dark);
        }

        .subscribe-success {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: #4ade80;
        }

        /* Column Topics */
        .footer-col-title {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 18px;
        }

        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 0.82rem;
          color: #94a3b8;
          margin-bottom: 20px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          line-height: 1.45;
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
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          transition: all 0.2s ease;
        }

        .social-icon-btn:hover {
          background: var(--primary-green);
          transform: translateY(-2px);
        }

        .social-icon-btn.wa {
          background: rgba(37, 211, 102, 0.25);
          color: #4ade80;
        }

        /* Links List */
        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links-list a {
          font-size: 0.84rem;
          color: #94a3b8;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        .footer-links-list a:hover {
          color: #4ade80;
          transform: translateX(3px);
        }

        /* Standards List */
        .footer-standards-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 18px;
        }

        .std-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          color: #cbd5e1;
          line-height: 1.4;
        }

        .cert-strip-footer {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .cert-mini-badge {
          background: rgba(24, 152, 66, 0.15);
          border: 1px solid rgba(74, 222, 128, 0.3);
          color: #4ade80;
          font-size: 0.68rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: var(--radius-sm);
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          background: #06080b;
          padding: 18px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-bottom-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.78rem;
          color: #64748b;
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #94a3b8;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.74rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .footer-back-to-top:hover {
          background: var(--primary-green);
          color: #ffffff;
          border-color: var(--primary-green);
        }

        @media (max-width: 1024px) {
          .footer-main-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px;
          }
        }

        @media (max-width: 640px) {
          .footer-main-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom-container {
            flex-direction: column;
            text-align: center;
          }
          .enquiry-title {
            font-size: 1.7rem;
          }
        }
      `}</style>
    </>
  );
}
