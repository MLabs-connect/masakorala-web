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
          padding-top: 0;
        }

        .projects-hero {
          background: #ffffff;
          border-bottom: 1px solid var(--surface-border);
          padding: 32px 0 44px 0;
        }

        .breadcrumb-nav {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          margin-bottom: 20px;
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
          margin-bottom: 0;
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

        @media (max-width: 1100px) {
          .projects-full-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero-title {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 768px) {
          .projects-hero {
            padding: 20px 0 32px 0;
          }

          .breadcrumb-nav {
            margin-bottom: 16px;
          }

          .grid-section {
            padding-top: 36px;
            padding-bottom: 56px;
          }

          .projects-full-grid {
            grid-template-columns: 1fr;
            gap: 22px;
            margin-bottom: 0;
          }

          .hero-title {
            font-size: 1.85rem;
          }

          .hero-desc {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
}
