"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, Calendar, Clock, ArrowRight, User, Sparkles } from "lucide-react";

const ARTICLES = [
  {
    id: "top-7-benefits-interlock",
    title: "Top 7 Benefits of Using Interlock Paving for Roads & Walkways in Sri Lanka",
    category: "Technical Advisory",
    date: "October 2026",
    readTime: "5 min read",
    author: "Senior Civil Engineer, Masakorala Group",
    image: "/images/uni-paver.jpg",
    excerpt:
      "Interlock paving has become the fastest-growing solution in Sri Lanka’s civil construction industry. From residential driveways to heavy container yards, discover why interlocking concrete blocks offer unbeatable durability, monsoon drainage, and 30-year lifecycle savings over asphalt.",
    link: "#calculator",
  },
  {
    id: "residential-driveway-transformation",
    title: "Transforming a Residential Driveway with Interlock Paving: Case Study",
    category: "Case Study",
    date: "September 2026",
    readTime: "4 min read",
    author: "Architectural Paving Team",
    image: "/images/hero.jpg",
    excerpt:
      "The client required an elegant, long-lasting driveway capable of supporting heavy SUVs without surface cracking or tire staining. Learn how our 60mm Arrow and Washed Eliana blocks transformed the property curb appeal.",
    link: "#products",
  },
  {
    id: "commercial-complex-landscaping",
    title: "Comprehensive Landscaping and Heavy Paving for Commercial Complexes",
    category: "Commercial Case Study",
    date: "August 2026",
    readTime: "6 min read",
    author: "Civil Engineering Advisory",
    image: "/images/grass-paver.jpg",
    excerpt:
      "Large-scale commercial properties require integrated solutions for customer parking, loading bays, and green garden walkways. How we combined 80mm heavy interlocks with permeable eco-grass pavers to achieve zero surface flooding.",
    link: "#quality",
  },
];

export default function BlogSection() {
  return (
    <section id="blogs" className="section-padding blog-section">
      <div className="container">
        {/* Header */}
        <div className="text-center blog-header-wrapper">
          <div className="section-tag">
            <BookOpen size={14} />
            <span>News & Industry Insights</span>
          </div>
          <h2 className="section-title">
            Read About Paving Best Practices & Case Studies
          </h2>
          <p className="section-desc mx-auto">
            Practical knowledge and engineering case studies from our senior civil engineers,
            helping clients and contractors make confident infrastructure decisions.
          </p>
        </div>

        {/* Articles Grid with Images matching Senarath Group's card layout */}
        <div className="blog-grid">
          {ARTICLES.map((article) => (
            <article key={article.id} className="blog-card">
              <div className="blog-card-media">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={220}
                  className="blog-img"
                />
                <span className="blog-cat-pill">{article.category}</span>
              </div>

              <div className="blog-card-body">
                <div className="blog-meta-row">
                  <span className="meta-time">
                    <Clock size={12} /> {article.readTime}
                  </span>
                  <span>•</span>
                  <span className="meta-date">{article.date}</span>
                </div>

                <h3 className="blog-card-title">
                  <a href={article.link}>{article.title}</a>
                </h3>

                <p className="blog-card-excerpt">{article.excerpt}</p>

                <div className="blog-card-footer">
                  <div className="author-meta">
                    <User size={13} className="text-emerald" />
                    <span>{article.author}</span>
                  </div>

                  <a href={article.link} className="read-more-btn">
                    <span>View More</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .blog-section {
          background: var(--surface-offwhite);
          border-top: 1px solid var(--surface-border);
        }

        .blog-header-wrapper {
          margin-bottom: 50px;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .blog-card {
          background: #ffffff;
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-xl);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .blog-card:hover {
          transform: translateY(-5px);
          border-color: rgba(24, 152, 66, 0.4);
          box-shadow: var(--shadow-lg);
        }

        .blog-card-media {
          position: relative;
          height: 200px;
          background: #14171d;
          overflow: hidden;
        }

        .blog-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .blog-card:hover .blog-img {
          transform: scale(1.05);
        }

        .blog-cat-pill {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(12, 14, 18, 0.85);
          color: #4ade80;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          backdrop-filter: blur(8px);
        }

        .blog-card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .blog-meta-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.74rem;
          color: var(--stone-light);
          margin-bottom: 10px;
        }

        .meta-time {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .blog-card-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--brand-black);
          line-height: 1.35;
          margin-bottom: 12px;
          transition: color 0.2s ease;
        }

        .blog-card-title:hover {
          color: var(--primary-green-dark);
        }

        .blog-card-excerpt {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 22px;
          flex-grow: 1;
        }

        .blog-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid var(--surface-border);
        }

        .author-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.74rem;
          color: var(--stone-mid);
          font-weight: 500;
        }

        .text-emerald {
          color: var(--primary-green);
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary-green-dark);
          transition: gap 0.2s ease;
        }

        .read-more-btn:hover {
          gap: 9px;
        }

        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
