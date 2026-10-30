"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import Logo from "./Logo";
import {
  Phone,
  Mail,
  MessageCircle,
  Menu,
  X,
  ShieldCheck,
  ChevronRight,
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
  { id: "reviews", label: "Reviews", href: "#reviews" },
  { id: "contact", label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
    href: string
  ) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    if (href === "#home" || href === "#") {
      if (window.location.pathname !== "/") {
        router.push("/");
        return;
      }
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
    } else {
      router.push(`/${href}`);
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
        "reviews",
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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle ESC and auto-close when resizing to desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 1024) setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      {/* Top Banner Bar - Brand Green Bar with Balanced Alignment */}
      <div className="header-top-bar">
        <div className="container top-bar-container">
          <div className="top-cert-badge">
            <ShieldCheck size={15} className="text-emerald-light" />
            <span>Sri Lanka&apos;s Premier Paving Block Manufacturer</span>
          </div>

          <div className="top-actions-right">
            <a href="mailto:masakoralaholdings@gmail.com" className="top-contact-link">
              <Mail size={13} />
              <span className="contact-label">EMAIL:</span>
              <strong>masakoralaholdings@gmail.com</strong>
            </a>

            <span className="top-sep">|</span>

            <a href="tel:+94706972703" className="top-contact-link">
              <Phone size={13} />
              <span className="contact-label">HOTLINE:</span>
              <strong>(+94)71 866 5665</strong>
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
              className={`mobile-toggle ${mobileMenuOpen ? "is-active" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </header>

    {/* Mobile Drawer Navigation with Fullscreen Backdrop Portalled to Body */}
    {mounted &&
      mobileMenuOpen &&
      createPortal(
        <div
          className="mobile-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Top Header with Logo & Close Button */}
            <div className="drawer-header">
              <div
                className="drawer-brand"
                onClick={(e) => {
                  handleNavClick(
                    e as unknown as React.MouseEvent<HTMLAnchorElement>,
                    "home",
                    "#home"
                  );
                }}
              >
                <Logo variant="dark" height={38} />
              </div>
              <button
                type="button"
                className="drawer-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav list */}
            <div className="mobile-nav-list">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`mobile-nav-item ${isActive ? "active" : ""}`}
                    onClick={(e) => handleNavClick(e, item.id, item.href)}
                  >
                    <span className="nav-item-title">{item.label}</span>
                    <ChevronRight size={16} className="nav-item-chevron" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>,
        document.body
      )}

      <style jsx>{`
        .site-header {
          position: -webkit-sticky;
          position: sticky;
          top: 0;
          width: 100%;
          z-index: 1200;
          background: #ffffff;
          transition: all 0.3s ease;
          border-bottom: 1px solid var(--surface-border);
        }

        .site-header.scrolled {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          background: rgba(255, 255, 255, 0.98);
        }

        @media (min-width: 1025px) {
          .site-header.scrolled {
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }
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
          white-space: nowrap;
        }

        .top-contact-link strong {
          white-space: nowrap;
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
          flex-shrink: 0;
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
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: #f8fafc;
          border: 1px solid var(--surface-border);
          border-radius: 12px;
          color: var(--brand-black);
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }

        .mobile-toggle:hover {
          background: var(--primary-green-subtle);
          border-color: rgba(24, 152, 66, 0.3);
          color: var(--primary-green-dark);
          transform: translateY(-1px);
        }

        .mobile-toggle.is-active {
          background: var(--primary-green);
          border-color: var(--primary-green);
          color: #ffffff;
        }

        /* Mobile Backdrop Overlay */
        .mobile-backdrop,
        :global(.mobile-backdrop) {
          position: fixed;
          inset: 0;
          background: rgba(12, 14, 18, 0.65);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 9999;
          display: flex;
          justify-content: flex-end;
          animation: fadeInBackdrop 0.22s ease-out forwards;
        }

        @keyframes fadeInBackdrop {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Mobile Drawer Container */
        .mobile-drawer,
        :global(.mobile-drawer) {
          width: min(340px, 86vw);
          height: 100%;
          background: #ffffff;
          box-shadow: -10px 0 35px rgba(0, 0, 0, 0.22);
          display: flex;
          flex-direction: column;
          padding: 22px 20px 24px;
          padding-top: max(22px, env(safe-area-inset-top));
          padding-bottom: max(24px, env(safe-area-inset-bottom));
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          animation: drawerSlideIn 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes drawerSlideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .drawer-header,
        :global(.drawer-header) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--surface-border);
          margin-bottom: 14px;
        }

        .drawer-brand,
        :global(.drawer-brand) {
          cursor: pointer;
          display: inline-flex;
          align-items: center;
        }

        .drawer-close-btn,
        :global(.drawer-close-btn) {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #f1f5f9;
          color: var(--brand-black);
          border: 1px solid var(--surface-border);
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .drawer-close-btn:hover,
        :global(.drawer-close-btn:hover) {
          background: #fee2e2;
          color: #ef4444;
          border-color: #fca5a5;
        }

        .mobile-nav-list,
        :global(.mobile-nav-list) {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
          margin-bottom: 24px;
        }

        .mobile-nav-item,
        :global(.mobile-nav-item) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--brand-black);
          background: transparent;
          transition: all 0.18s ease;
          border: 1px solid transparent;
          min-height: 44px;
        }

        .mobile-nav-item:hover,
        :global(.mobile-nav-item:hover) {
          background: #f8fafc;
          border-color: var(--surface-border);
          color: var(--primary-green-dark);
        }

        .mobile-nav-item.active,
        :global(.mobile-nav-item.active) {
          background: var(--primary-green-subtle);
          border-color: rgba(24, 152, 66, 0.25);
          color: var(--primary-green-dark);
          font-weight: 700;
        }

        .nav-item-title,
        :global(.nav-item-title) {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .nav-item-chevron,
        :global(.nav-item-chevron) {
          color: #94a3b8;
          transition: transform 0.2s ease;
        }

        .mobile-nav-item:hover .nav-item-chevron,
        .mobile-nav-item.active .nav-item-chevron,
        :global(.mobile-nav-item:hover .nav-item-chevron),
        :global(.mobile-nav-item.active .nav-item-chevron) {
          color: var(--primary-green-dark);
          transform: translateX(3px);
        }

        .mobile-drawer-footer {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 18px;
          border-top: 1px solid var(--surface-border);
        }

        .mobile-wa-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 18px;
          background: #25d366;
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 700;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.3);
          transition: all 0.2s ease;
        }

        .mobile-wa-btn:hover {
          background: #20ba59;
          transform: translateY(-2px);
        }

        .mobile-call-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 16px;
          background: #f8fafc;
          border: 1px solid var(--surface-border);
          border-radius: 12px;
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--stone-dark);
          transition: all 0.2s ease;
        }

        .mobile-call-link:hover {
          border-color: var(--primary-green);
          color: var(--primary-green-dark);
        }

        .mobile-factory-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          color: #94a3b8;
          padding: 0 4px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .nav-links {
            display: none;
          }
          .mobile-toggle {
            display: inline-flex;
          }
          .top-cert-badge {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .top-cert-badge {
            display: none;
          }
          .contact-label {
            display: none;
          }
          .top-bar-container {
            justify-content: center;
            padding-left: 10px;
            padding-right: 10px;
          }
          .top-actions-right {
            width: 100%;
            justify-content: center;
            align-items: center;
            flex-wrap: nowrap;
            gap: clamp(6px, 1.8vw, 12px);
          }
          .top-contact-link {
            font-size: clamp(0.66rem, 2.7vw, 0.78rem);
            white-space: nowrap;
            flex-shrink: 0;
            gap: 4px;
          }
          .top-contact-link strong {
            white-space: nowrap;
          }
          .top-contact-link :global(svg) {
            flex-shrink: 0;
            width: 12px;
            height: 12px;
          }
          .top-sep {
            margin: 0 2px;
            flex-shrink: 0;
          }
          .header-wa-btn {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .header-top-bar {
            padding: 6px 0;
          }
          .top-bar-container {
            padding-left: 6px;
            padding-right: 6px;
          }
          .top-actions-right {
            gap: 6px;
          }
          .top-contact-link {
            font-size: clamp(0.64rem, 2.8vw, 0.74rem);
            gap: 4px;
          }
          .header-main-nav {
            padding: 10px 0;
          }
          .nav-brand :global(.logo-container img) {
            height: 38px !important;
          }
        }

        @media (max-width: 360px) {
          .top-actions-right {
            gap: 4px;
          }
          .top-contact-link {
            font-size: 0.62rem;
            gap: 3px;
          }
          .top-contact-link :global(svg) {
            width: 11px;
            height: 11px;
          }
        }
      `}</style>
    </>
  );
}
