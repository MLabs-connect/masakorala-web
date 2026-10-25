"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Calculator, Phone, X, Sparkles } from "lucide-react";

export default function FloatingActions() {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Hide tooltip after 8 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="floating-actions-container">
      {/* Tooltip greeting */}
      {showTooltip && (
        <div className="wa-tooltip glass-panel">
          <button
            type="button"
            className="tooltip-close"
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss message"
          >
            <X size={12} />
          </button>
          <div className="tooltip-avatar">
            <span className="online-indicator" />
          </div>
          <div className="tooltip-text">
            <strong>Technical Desk Online</strong>
            <span>Need sample blocks or an instant site quote? Let&apos;s talk!</span>
          </div>
        </div>
      )}

      {/* Action Buttons Stack */}
      <div className="floating-buttons-stack">
        {/* Quick Calculator Scroll Button */}
        <a
          href="#calculator"
          className="float-btn float-calc"
          title="Open Paving Calculator"
          aria-label="Open Paving Calculator"
        >
          <Calculator size={20} />
          <span className="float-label">Calculator</span>
        </a>

        {/* WhatsApp Direct Chat Button with Pulse */}
        <a
          href="https://wa.me/94706972703?text=Hello%20Masakorala%20Holdings,%20I%20would%20like%20to%20get%20a%20quotation%20for%20paving%20blocks."
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn float-wa animate-pulse-glow"
          title="WhatsApp Technical Desk"
          aria-label="WhatsApp Technical Desk"
        >
          <MessageCircle size={26} />
        </a>
      </div>

      <style jsx>{`
        .floating-actions-container {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 14px;
        }

        /* Tooltip */
        .wa-tooltip {
          position: relative;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(24, 152, 66, 0.3);
          border-radius: var(--radius-lg);
          padding: 12px 16px;
          max-width: 270px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
          animation: fadeIn 0.3s ease;
        }

        .tooltip-close {
          position: absolute;
          top: 6px;
          right: 6px;
          color: var(--stone-light);
          padding: 2px;
        }

        .tooltip-avatar {
          position: relative;
          width: 32px;
          height: 32px;
          background: var(--primary-green-subtle);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .online-indicator {
          width: 10px;
          height: 10px;
          background: #22c55e;
          border-radius: 50%;
          border: 2px solid #ffffff;
        }

        .tooltip-text strong {
          display: block;
          font-size: 0.82rem;
          color: var(--brand-black);
        }

        .tooltip-text span {
          display: block;
          font-size: 0.74rem;
          color: var(--stone-mid);
          line-height: 1.35;
        }

        /* Floating buttons stack */
        .floating-buttons-stack {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
        }

        .float-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-full);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          color: #ffffff;
          text-decoration: none;
        }

        .float-btn:hover {
          transform: scale(1.08);
        }

        .float-calc {
          background: var(--brand-black);
          padding: 10px 16px;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .float-calc .float-label {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .float-wa {
          width: 58px;
          height: 58px;
          background: #25d366;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }

        @media (max-width: 640px) {
          .floating-actions-container {
            bottom: 20px;
            right: 20px;
          }
          .wa-tooltip {
            max-width: 240px;
          }
        }
      `}</style>
    </div>
  );
}
