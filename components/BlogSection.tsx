"use client";

import React from "react";
import { BookOpen, Calendar, Clock, ArrowRight, User } from "lucide-react";

const ARTICLES = [
  {
    id: "paver-thickness-guide",
    title: "60mm vs. 80mm Paver Selection: Preventing Premature Driveway Rutting",
    category: "Technical Advisory",
    date: "October 2026",
    readTime: "5 min read",
    author: "Eng. R. Masakorala (Lead Civil Materials)",
    excerpt:
      "Why selecting an inadequate paver thickness leads to subgrade depression under SUV and commercial vehicle axle loads, and how to correctly calculate dynamic wheel impact.",
    link: "#calculator",
  },
  {
    id: "sls-1425-standards",
    title: "SLS 1425 Demystified: Compressive Testing, Skid Safety & Red Flags",
    category: "Standards & Compliance",
    date: "September 2026",
    readTime: "7 min read",
    author: "Quality Directorate, Pannala Plant",
    excerpt:
      "A contractor’s field guide to verifying concrete paver test certificates, understanding 28-day hydration curing, and spotting uncertified low-density sand blocks.",
    link: "#quality",
  },
  {
    id: "tropical-sub-base-preparation",
    title: "Sub-Base Engineering in Sri Lanka's Monsoon Climate: The 4-Layer Rule",
    category: "Site Engineering",
    date: "August 2026",
    readTime: "6 min read",
    author: "Civil Engineering Advisory Team",
    excerpt:
      "Proper grading from subgrade soil stabilization and geotextile separation to compacted aggregate base course (ABC) and screeded quarry dust bedding.",
    link: "#calculator",
  },
];

export default function BlogSection() {
  return (
    <section className="section-padding blog-section">
      <div className="container">
        {/* Header */}
        <div className="text-center blog-header-wrapper">
          <div className="section-tag">
            <BookOpen size={14} />
            <span>Technical Knowledge Base</span>
          </div>
          <h2 className="section-title">
            Civil Engineering Insights & Paving Best Practices
          </h2>
          <p className="section-desc mx-auto">
            Practical knowledge written by our senior materials engineers to help
            property owners, architects, and site engineers construct flawless paved spaces.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="blog-grid">
          {ARTICLES.map((article) => (
            <article key={article.id} className="blog-card">
              <div className="blog-card-top">
                <span className="blog-cat-badge">{article.category}</span>
                <div className="blog-meta-time">
                  <Clock size={13} />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <h3 className="blog-card-title">
                <a href={article.link}>{article.title}</a>
              </h3>

              <p className="blog-card-excerpt">{article.excerpt}</p>

              <div className="blog-card-footer">
                <div className="author-meta">
                  <User size={14} className="text-emerald" />
                  <span>{article.author}</span>
                </div>

                <a href={article.link} className="read-more-link">
                  <span>Read Guide</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .blog-section {
          background: #ffffff;
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
          background: var(--surface-offwhite);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-xl);
          padding: 28px;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .blog-card:hover {
          transform: translateY(-4px);
          border-color: rgba(24, 152, 66, 0.4);
          box-shadow: var(--shadow-md);
        }

        .blog-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .blog-cat-badge {
          background: var(--primary-green-subtle);
          color: var(--primary-green-dark);
          font-size: 0.74rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(24, 152, 66, 0.2);
        }

        .blog-meta-time {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.74rem;
          color: var(--stone-light);
        }

        .blog-card-title {
          font-family: var(--font-heading);
          font-size: 1.2rem;
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
          font-size: 0.86rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .blog-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 18px;
          border-top: 1px solid var(--surface-border);
        }

        .author-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          color: var(--stone-mid);
          font-weight: 500;
        }

        .text-emerald {
          color: var(--primary-green);
        }

        .read-more-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary-green-dark);
          transition: gap 0.2s ease;
        }

        .read-more-link:hover {
          gap: 10px;
        }

        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
