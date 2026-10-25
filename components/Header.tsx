"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import {
  Phone,
  Mail,
  MessageCircle,
  Menu,
  X,
  ShieldCheck,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  href: string;
  isCalc?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About Us", href: "#about" },
  { id: "products", label: "Products", href: "#products" },
  { id: "calculator", label: "Calculator", href: "#calculator", isCalc: true },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "blogs", label: "Blogs", href: "#blogs" },
  { id: "contact", label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
    href: string
  ) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    if (href === "#home" || href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.history.pushState) {
        window.history.pushState(null, "", " ");
      }
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      const headerHeight = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      if (window.history.pushState) {
        window.history.pushState(null, "", href);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // If scrolled near bottom of page, highlight contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 120
      ) {
        setActiveSection("contact");
        return;
      }

      if (window.scrollY < 200) {
        setActiveSection("home");
        return;
      }

      const sectionIds = [
        "contact",
        "blogs",
        "projects",
        "calculator",
        "products",
        "about",
        "home",
      ];

      const scrollTarget = window.scrollY + 180;

      for (const secId of sectionIds) {
        const el = document.getElementById(secId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollTarget >= top && scrollTarget < top + height) {
            setActiveSection(secId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
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
          <a
            href="#home"
            className="nav-brand"
            onClick={(e) => handleNavClick(e, "home", "#home")}
          >
            <Logo variant="dark" />
          </a>

          {/* Desktop Navigation Links - Centered & Aligned with Dynamic Indicator */}
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? "active" : ""} ${item.isCalc ? "highlight-calc" : ""
                      }`}
                    onClick={(e) => handleNavClick(e, item.id, item.href)}
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA & Mobile Toggle */}
          <div className="nav-actions">
            <a
              href="https://wa.me/94706972703?text=Hello%20Masakorala%20Holdings,%20I%20would%20like%20to%20get%20a%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary header-wa-btn"
            >
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
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`mobile-nav-item ${isActive ? "active" : ""} ${item.isCalc ? "highlight" : ""
                      }`}
                    onClick={(e) => handleNavClick(e, item.id, item.href)}
                  >
                    {item.isCalc ? `🧮 ${item.label}` : item.label}
                  </a>
                );
              })}
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
          padding-bottom: 6px;
          position: relative;
          cursor: pointer;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--primary-green);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link:hover {
          color: var(--primary-green);
        }

        .nav-link.active {
          color: var(--primary-green);
        }

        .nav-link.active::after {
          transform: scaleX(1);
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
          transition: all 0.2s ease;
        }

        .mobile-nav-item.active {
          color: var(--primary-green);
          font-weight: 700;
          border-left: 3px solid var(--primary-green);
          padding-left: 10px;
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
