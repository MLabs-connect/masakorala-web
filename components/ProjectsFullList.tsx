"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building,
  MapPin,
  Calendar,
  Layers,
  ArrowRight,
  Maximize2,
  ChevronRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import { ALL_PROJECTS, ProjectItem } from "@/data/projectsData";
import ProjectModal from "@/components/ProjectModal";

export default function ProjectsFullList() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="projects-page-wrapper">
      {/* Hero / Header Section */}
      <section className="projects-hero">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/" className="crumb-link">
              Home
            </Link>
            <ChevronRight size={14} className="crumb-sep" />
            <span className="crumb-current">Projects</span>
          </nav>

          <div className="hero-content-centered">
            <div className="section-tag">
              <Building size={14} />
              <span>Project Portfolio</span>
            </div>
            <h1 className="hero-title">
              Engineered Paving Installations Across Sri Lanka
            </h1>
            <p className="hero-desc">
              From high-capacity container logistics terminals and national expressway plazas
              to commercial supermarket forecourts and waterfront promenades. Click any project to view
              on-site photographs and engineering specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="section-padding grid-section">
        <div className="container">
          <div className="projects-full-grid">
            {ALL_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                <div className="project-media">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={380}
                    className="project-img"
                  />
                  <span className="project-area-badge">{project.area}</span>
                  <div className="media-overlay-hint">
                    <Maximize2 size={16} />
                    <span>View Photos & Details</span>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-loc-row">
                    <span className="loc-item">
                      <MapPin size={14} className="text-emerald" />
                      <span>{project.location}</span>
                    </span>
                    <span className="year-item">
                      <Calendar size={14} />
                      <span>{project.year}</span>
                    </span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-excerpt">{project.excerpt}</p>

                  <div className="project-footer-row">
                    <div className="project-spec-pill">
                      <Layers size={14} className="text-emerald" />
                      <span>{project.paverType}</span>
                    </div>

                    <button
                      type="button"
                      className="view-project-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      <span>View Project Details</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consultation Banner */}
          <div className="projects-cta-banner">
            <div className="cta-banner-text">
              <h3 className="cta-banner-title">
                Planning a Commercial, Industrial, or Infrastructure Project?
              </h3>
              <p className="cta-banner-desc">
                Consult with our civil engineering technical team for compressive load calculations,
                sub-base preparation guidance, and customized unit estimations.
              </p>
            </div>
            <div className="cta-banner-actions">
              <a
                href="https://wa.me/94706972703?text=Hello%20Masakorala%20Holdings,%20I%20would%20like%20to%20consult%20with%20an%20engineer%20regarding%20an%20upcoming%20paving%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="banner-wa-btn"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Engineer</span>
              </a>
              <a href="tel:+94706972703" className="banner-call-btn">
                <Phone size={18} />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style jsx>{`
        .projects-page-wrapper {
          background: #fbfbfc;
          min-height: 100vh;
          padding-top: 100px;
        }

        .projects-hero {
          background: #ffffff;
          border-bottom: 1px solid var(--surface-border);
          padding: 40px 0 56px 0;
        }

        .breadcrumb-nav {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          margin-bottom: 28px;
        }

        .crumb-link {
          color: var(--stone-mid);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .crumb-link:hover {
          color: var(--primary-green);
        }

        :global(.crumb-sep) {
          color: var(--stone-light);
        }

        .crumb-current {
          color: var(--brand-black);
          font-weight: 700;
        }

        .hero-content-centered {
          text-align: center;
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-content-centered .section-tag {
          margin-bottom: 16px;
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: 2.6rem;
          font-weight: 700;
          color: var(--brand-black);
          line-height: 1.2;
          margin-bottom: 18px;
        }

        .hero-desc {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
          max-width: 720px;
        }

        .grid-section {
          padding-top: 56px;
          padding-bottom: 80px;
        }

        .projects-full-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 64px;
        }

        .project-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--surface-border);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1);
          border-color: rgba(24, 152, 66, 0.35);
        }

        .project-media {
          position: relative;
          height: 250px;
          background: #14171d;
          overflow: hidden;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-img {
          transform: scale(1.06);
        }

        .project-area-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          background: var(--primary-green);
          color: #ffffff;
          font-size: 0.76rem;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          z-index: 2;
        }

        .media-overlay-hint {
          position: absolute;
          inset: 0;
          background: rgba(12, 14, 18, 0.55);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.25s ease;
          z-index: 3;
        }

        .project-card:hover .media-overlay-hint {
          opacity: 1;
        }

        .project-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-loc-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.78rem;
          color: var(--stone-mid);
          margin-bottom: 12px;
        }

        .loc-item,
        .year-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .text-emerald {
          color: var(--primary-green);
        }

        .project-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--brand-black);
          line-height: 1.35;
          margin-bottom: 12px;
          transition: color 0.2s ease;
        }

        .project-card:hover .project-title {
          color: var(--primary-green-dark);
        }

        .project-excerpt {
          font-size: 0.86rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .project-footer-row {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid var(--surface-border);
        }

        .project-spec-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--surface-offwhite);
          border: 1px solid var(--surface-border);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--stone-dark);
        }

        .view-project-btn {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: transparent;
          border: none;
          padding: 6px 0;
          font-size: 0.84rem;
          font-weight: 700;
          color: var(--primary-green-dark);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .view-project-btn:hover {
          color: var(--brand-black);
          transform: translateX(4px);
        }

        /* Bottom Consultation Banner */
        .projects-cta-banner {
          background: #14171d;
          border-radius: var(--radius-2xl);
          padding: 44px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .cta-banner-text {
          max-width: 640px;
        }

        .cta-banner-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.3;
          margin-bottom: 10px;
        }

        .cta-banner-desc {
          font-size: 0.95rem;
          color: #cbd5e1;
          line-height: 1.55;
          margin: 0;
        }

        .cta-banner-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
        }

        .banner-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 24px;
          background: #25d366;
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .banner-wa-btn:hover {
          background: #20ba59;
          transform: translateY(-2px);
        }

        .banner-call-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 22px;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 600;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255, 255, 255, 0.2);
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .banner-call-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 1100px) {
          .projects-full-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-title {
            font-size: 2.2rem;
          }

          .projects-cta-banner {
            flex-direction: column;
            text-align: center;
            padding: 36px 28px;
          }

          .cta-banner-actions {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .projects-full-grid {
            grid-template-columns: 1fr;
          }

          .hero-title {
            font-size: 1.85rem;
          }

          .hero-desc {
            font-size: 0.95rem;
          }

          .cta-banner-actions {
            flex-direction: column;
            width: 100%;
          }

          .banner-wa-btn,
          .banner-call-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
