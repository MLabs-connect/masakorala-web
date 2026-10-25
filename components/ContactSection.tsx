"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  Building2,
  FileText,
} from "lucide-react";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "Colombo",
    area: "",
    paverType: "Uni Paver 80mm (Heavy Traffic)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const generateWhatsAppInquiry = () => {
    const text = `*New Direct Factory Inquiry - Masakorala Holdings*
-----------------------------------------
- *Client Name:* ${formData.name || "Client"}
- *Contact Phone:* ${formData.phone || "Not specified"}
- *Project Location:* ${formData.location}
- *Estimated Project Area:* ${formData.area || "To be measured"} Sq.Ft
- *Paver Preference:* ${formData.paverType}
- *Notes:* ${formData.message || "Please arrange quotation and sample delivery."}`;

    return `https://wa.me/94706972703?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Direct Plant Info */}
          <div className="contact-info-col">
            <div className="section-tag">
              <Mail size={14} />
              <span>Direct Factory Contacts</span>
            </div>

            <h2 className="section-title">
              Connect With Our Civil Engineering Advisory Desk
            </h2>

            <p className="section-desc">
              Whether you require 500 square feet for a private residence or 300,000 square
              feet for a container logistics terminal, our technical sales team delivers
              transparent ex-factory pricing, free site inspections, and sample blocks.
            </p>

            {/* Factory Locations List */}
            <div className="locations-stack">
              <div className="loc-card">
                <div className="loc-icon-wrapper">
                  <Building2 size={20} />
                </div>
                <div>
                  <strong className="loc-title">Pannala Mega Manufacturing Plant</strong>
                  <p className="loc-address">
                    Industrial Zone, Kurunegala Road, Pannala, Sri Lanka
                  </p>
                  <span className="loc-detail">
                    Automated Vibro-Press Bays & Quality Testing Lab
                  </span>
                </div>
              </div>

              <div className="loc-card">
                <div className="loc-icon-wrapper">
                  <Building2 size={20} />
                </div>
                <div>
                  <strong className="loc-title">Kurunegala Regional Curing Facility</strong>
                  <p className="loc-address">
                    Dambulla Road, Kurunegala, North Western Province
                  </p>
                  <span className="loc-detail">
                    High-Volume Palletized Buffer Stocks & Crane Dispatch
                  </span>
                </div>
              </div>

              <div className="loc-card">
                <div className="loc-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div>
                  <strong className="loc-title">Colombo Engineering & Sample Hub</strong>
                  <p className="loc-address">
                    Nawala Road, Rajagiriya / Colombo Metro Area
                  </p>
                  <span className="loc-detail">
                    Architectural Sample Display & Consultant Consultations
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Pills */}
            <div className="contact-meta-box">
              <div className="c-meta-row">
                <Phone size={18} className="text-emerald" />
                <div>
                  <strong>Hotlines:</strong>
                  <div className="phone-numbers">
                    <a href="tel:+94706972703">+94 70 697 2703</a>
                    <span>•</span>
                    <a href="tel:+94372288940">+94 37 228 8940</a>
                  </div>
                </div>
              </div>

              <div className="c-meta-row">
                <Clock size={18} className="text-emerald" />
                <div>
                  <strong>Operating Hours:</strong>
                  <span>Monday – Saturday: 7:30 AM to 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-col">
            <div className="form-card">
              <h3 className="form-heading">Request Formal Factory Quotation</h3>
              <p className="form-subheading">
                Receive itemized BOQ, delivery freight estimates, and technical specifications within 2 hours.
              </p>

              {formSubmitted ? (
                <div className="form-success-panel">
                  <div className="success-icon">
                    <CheckCircle2 size={48} className="text-emerald" />
                  </div>
                  <h4>Inquiry Registered Successfully!</h4>
                  <p>
                    Thank you, <strong>{formData.name || "valued client"}</strong>. A Masakorala
                    civil technical officer has received your project details and will contact you
                    shortly at <strong>{formData.phone}</strong>.
                  </p>
                  <a
                    href={generateWhatsAppInquiry()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-100"
                  >
                    <MessageCircle size={18} />
                    <span>Open Instant WhatsApp Chat</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="btn-secondary w-100 mt-2"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rfq-form">
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="clientName">Your Full Name *</label>
                      <input
                        id="clientName"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Priyantha Silva"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="clientPhone">Phone / WhatsApp Number *</label>
                      <input
                        id="clientPhone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="e.g. 077 123 4567"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="clientLocation">Project Site District *</label>
                      <select
                        id="clientLocation"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className="form-input"
                      >
                        <option value="Colombo">Colombo District</option>
                        <option value="Gampaha">Gampaha District</option>
                        <option value="Kurunegala">Kurunegala District</option>
                        <option value="Kandy">Kandy / Central</option>
                        <option value="Kalutara">Kalutara District</option>
                        <option value="Galle">Galle / Southern Coastal</option>
                        <option value="Puttalam">Puttalam District</option>
                        <option value="Other">Other District (Islandwide Delivery)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="clientArea">Estimated Area (Sq.Ft)</label>
                      <input
                        id="clientArea"
                        type="number"
                        value={formData.area}
                        onChange={(e) =>
                          setFormData({ ...formData, area: e.target.value })
                        }
                        placeholder="e.g. 1500"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="paverSelection">Paver Type / Application</label>
                    <select
                      id="paverSelection"
                      value={formData.paverType}
                      onChange={(e) =>
                        setFormData({ ...formData, paverType: e.target.value })
                      }
                      className="form-input"
                    >
                      <option value="Uni Paver 80mm (Heavy Traffic)">
                        Uni Paver 80mm (Heavy Industrial / Logistics)
                      </option>
                      <option value="Uni Paver 60mm (Driveway Standard)">
                        Uni Paver 60mm (Residential Driveways)
                      </option>
                      <option value="Washed Eliana (Luxury Architectural)">
                        Washed Eliana 60mm (Textured Quartz / Pool Decks)
                      </option>
                      <option value="Eco Grass Paver 80mm">
                        Eco Grass Paver 80mm (Permeable Green Parking)
                      </option>
                      <option value="Rhombus 3D Geometric">
                        Rhombus 3D Geometric Illusion Paver
                      </option>
                      <option value="Turnkey Paving & Installation Required">
                        Turnkey Paving (Supply + Site Installation Required)
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="projectMessage">Project Notes / Requirements</label>
                    <textarea
                      id="projectMessage"
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Mention any specific color preferences, site access constraints, or preferred delivery dates..."
                      className="form-input"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-100 form-submit-btn">
                    <Send size={18} />
                    <span>Submit Request to Technical Team</span>
                  </button>

                  <div className="form-alternative-row">
                    <span>Prefer direct chat?</span>
                    <a
                      href={generateWhatsAppInquiry()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wa-direct-link"
                    >
                      <MessageCircle size={16} /> Open via WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: var(--surface-offwhite);
          border-top: 1px solid var(--surface-border);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        /* Left Column */
        .contact-info-col {
          display: flex;
          flex-direction: column;
        }

        .locations-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 32px 0;
        }

        .loc-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: #ffffff;
          padding: 18px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--surface-border);
          box-shadow: var(--shadow-sm);
        }

        .loc-icon-wrapper {
          width: 42px;
          height: 42px;
          background: var(--primary-green-subtle);
          color: var(--primary-green-dark);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(24, 152, 66, 0.2);
        }

        .loc-title {
          font-size: 0.95rem;
          color: var(--brand-black);
          display: block;
          margin-bottom: 2px;
        }

        .loc-address {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .loc-detail {
          display: block;
          font-size: 0.74rem;
          color: var(--primary-green-dark);
          font-weight: 600;
          margin-top: 4px;
        }

        .contact-meta-box {
          background: #ffffff;
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-lg);
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .c-meta-row {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 0.88rem;
          color: var(--stone-dark);
        }

        .phone-numbers {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-left: 8px;
          font-weight: 700;
          color: var(--brand-black);
        }

        .phone-numbers a:hover {
          color: var(--primary-green);
        }

        .text-emerald {
          color: var(--primary-green);
        }

        /* Right Column Form */
        .form-card {
          background: #ffffff;
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-xl);
          padding: 36px;
          box-shadow: var(--shadow-lg);
        }

        .form-heading {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--brand-black);
          margin-bottom: 6px;
        }

        .form-subheading {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .rfq-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--brand-black);
        }

        .form-input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-md);
          font-family: inherit;
          font-size: 0.9rem;
          color: var(--brand-black);
          background: var(--surface-offwhite);
          outline: none;
          transition: border-color 0.2s ease, background-color 0.2s ease;
        }

        .form-input:focus {
          border-color: var(--primary-green);
          background-color: #ffffff;
        }

        .form-submit-btn {
          padding: 14px;
          font-size: 0.96rem;
          margin-top: 6px;
        }

        .form-alternative-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.82rem;
          color: var(--stone-mid);
          margin-top: 8px;
        }

        .wa-direct-link {
          color: var(--primary-green-dark);
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .wa-direct-link:hover {
          text-decoration: underline;
        }

        /* Success Panel */
        .form-success-panel {
          text-align: center;
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .form-success-panel h4 {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--brand-black);
        }

        .form-success-panel p {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 8px;
        }

        .w-100 {
          width: 100%;
        }

        .mt-2 {
          margin-top: 8px;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        @media (max-width: 640px) {
          .form-row-2 {
            grid-template-columns: 1fr;
          }
          .form-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
