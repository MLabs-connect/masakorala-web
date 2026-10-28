"use client";

import React from "react";
import { Star, Quote, MapPin, Building2 } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  projectScope: string;
  rating: number;
  date: string;
  review: string;
  initials: string;
}

const REVIEWS: Testimonial[] = [
  {
    id: "review-1",
    name: "Eng. Asantha Perera",
    role: "Chief Civil Project Engineer",
    company: "Phoenix Industrial Logistics",
    location: "Biyagama Export Zone",
    projectScope: "20,000 Sq.Ft 80mm Heavy-Duty Uni Interlock",
    rating: 5,
    date: "October 2024",
    initials: "AP",
    review:
      "We selected Masakorala's 80mm heavy-duty Uni interlock blocks (55 MPa) for our primary container yard in Biyagama. Even under continuous 45-ton reach-stacker traffic and heavy container offloading, there has been zero surface depression or edge chipping. The compressive strength and dimensional consistency are outstanding.",
  },
  {
    id: "review-2",
    name: "Malik De Silva",
    role: "Senior Facilities Director",
    company: "Retail Commercial Properties",
    location: "Katugasthota, Kandy",
    projectScope: "14,000 Sq.Ft Supermarket Forecourt & Bays",
    rating: 5,
    date: "September 2024",
    initials: "MS",
    review:
      "Masakorala Holdings completed our commercial supermarket car park ahead of our grand opening. The contrasting charcoal and light grey parking demarcations look sharp, and rainfall drains instantly during heavy downpours with zero puddling. Highly recommended for commercial grade paving.",
  },
  {
    id: "review-3",
    name: "Dr. Nilmini Jayawardena",
    role: "Private Homeowner",
    company: "Residential Villa Project",
    location: "Cinnamon Gardens, Colombo 07",
    projectScope: "4,200 Sq.Ft Washed Eliana & Border Kerbs",
    rating: 5,
    date: "August 2024",
    initials: "NJ",
    review:
      "Transformed our residential villa driveway and garden terraces using Washed Eliana exposed aggregate pavers. The textured surface is completely non-slip when wet and gave our property an elegant, luxurious entrance. Their certified laying team was polite, neat, and highly professional.",
  },
];

export default function BlogSection() {
  return (
    <section id="reviews" className="section-padding reviews-section">
      {/* Anchor alias for backwards compatibility */}
      <div id="blogs" style={{ position: "absolute", top: "-80px" }} />

      <div className="container">
        {/* Centered Header */}
        <div className="reviews-header-centered">
          <div className="section-tag">
            <span>Client Reviews</span>
          </div>
          <h2 className="section-title">
            Trusted by Sri Lanka&apos;s Leading Contractors & Property Owners
          </h2>
          <p className="section-desc">
            Real feedback from commercial developers, industrial logistics managers, and residential
            homeowners on our paving stone durability, precision manufacturing, and turnkey laying services.
          </p>
        </div>

        {/* 3 Fixed Testimonial Cards */}
        <div className="reviews-grid">
          {REVIEWS.map((rev) => (
            <div key={rev.id} className="review-card">
              {/* Card Header: Stars & Quote Icon */}
              <div className="review-card-top">
                <div className="stars-row" aria-label={`${rev.rating} out of 5 stars`}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={17} className="star-icon filled" />
                  ))}
                </div>
                <Quote size={28} className="quote-mark" />
              </div>

              {/* Review Text */}
              <p className="review-text">&ldquo;{rev.review}&rdquo;</p>

              {/* Verified Project Badge */}
              <div className="project-badge-pill">
                <Building2 size={13} className="text-emerald" />
                <span>{rev.projectScope}</span>
              </div>

              {/* Author Row */}
              <div className="review-author-row">
                <div className="author-details">
                  <strong className="author-name">{rev.name}</strong>
                  <span className="author-role">{rev.role}</span>
                  <span className="author-company">{rev.company}</span>
                  <span className="author-location">
                    <MapPin size={11} className="text-emerald" />
                    <span>{rev.location}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .reviews-section {
          background: #fbfbfc;
          border-top: 1px solid var(--surface-border);
          position: relative;
        }

        .reviews-header-centered {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 52px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .reviews-header-centered .section-tag {
          margin-bottom: 14px;
        }

        .reviews-header-centered .section-title {
          font-family: var(--font-heading);
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--brand-black);
          line-height: 1.25;
          margin-bottom: 16px;
        }

        .reviews-header-centered .section-desc {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
          max-width: 740px;
        }

        /* 3-Column Fixed Grid */
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 0;
        }

        .review-card {
          background: #ffffff;
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-xl);
          padding: 32px 28px;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .review-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
          border-color: rgba(24, 152, 66, 0.35);
        }

        .review-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .stars-row {
          display: flex;
          gap: 3px;
        }

        :global(.star-icon.filled) {
          fill: #f59e0b;
          color: #f59e0b;
        }

        :global(.quote-mark) {
          color: rgba(24, 152, 66, 0.2);
          flex-shrink: 0;
        }

        .review-text {
          font-size: 0.94rem;
          color: var(--brand-black);
          line-height: 1.65;
          margin: 0 0 20px 0;
          flex-grow: 1;
          font-style: normal;
        }

        .project-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--surface-offwhite);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-full);
          padding: 6px 12px;
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--stone-dark);
          margin-bottom: 20px;
        }

        .text-emerald {
          color: var(--primary-green);
        }

        .review-author-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 18px;
          border-top: 1px solid var(--surface-border);
        }

        .author-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
          width: 100%;
        }

        .author-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--brand-black);
        }

        .author-role {
          font-size: 0.78rem;
          color: var(--stone-dark);
          font-weight: 500;
        }

        .author-company {
          font-size: 0.75rem;
          color: var(--stone-mid);
        }

        .author-location {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.73rem;
          color: var(--stone-mid);
          margin-top: 2px;
        }

        @media (max-width: 1100px) {
          .reviews-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .reviews-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .reviews-header-centered {
            margin-bottom: 36px;
          }

          .reviews-header-centered .section-title {
            font-size: clamp(1.7rem, 6.5vw, 2.15rem);
          }

          .reviews-header-centered .section-desc {
            font-size: 0.95rem;
          }

          .review-card {
            padding: 24px 18px;
            border-radius: 18px;
          }

          .review-text {
            font-size: 0.92rem;
            line-height: 1.6;
          }
        }
      `}</style>
    </section>
  );
}
