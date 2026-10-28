"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Layers,
  ArrowRight,
  Maximize2,
} from "lucide-react";
import { ALL_PROJECTS, ProjectItem } from "@/data/projectsData";
import ProjectModal from "@/components/ProjectModal";

export default function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Default to showing only 3 project cards
  const displayedProjects = ALL_PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        {/* Centered Header */}
        <div className="projects-header-centered">
          <div className="section-tag">
            <span>Our Latest Projects</span>
          </div>
          <h2 className="section-title">
            Crafting Lasting Impressions Through Innovative Paving
          </h2>
          <p className="section-desc">
            From landmark port infrastructure and logistics warehouses to supermarket
            commercial car parks and residential enclaves across Sri Lanka.
          </p>
        </div>

        {/* 3-Card Project Grid */}
        <div className="projects-grid">
          {displayedProjects.map((project) => (
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

        {/* See More Projects CTA Row */}
        <div className="see-more-wrapper">
          <Link href="/projects" className="see-more-btn">
            <span>See More Projects</span>
          </Link>
        </div>
      </div>

      {/* Interactive Project Details & Photos Popup Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style jsx>{`
        .projects-section {
          background: #ffffff;
          border-top: 1px solid var(--surface-border);
        }

        /* Perfectly centered header */
        .projects-header-centered {
          text-align: center;
          max-width: 820px;
          margin: 0 auto 52px auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .projects-header-centered .section-tag {
          margin-bottom: 14px;
        }

        .projects-header-centered .section-title {
          font-family: var(--font-heading);
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--brand-black);
          line-height: 1.25;
          margin-bottom: 16px;
        }

        .projects-header-centered .section-desc {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
          max-width: 740px;
        }

        /* 3-Column Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 48px;
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

        /* See More Button Container */
        .see-more-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
        }

        .see-more-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 36px;
          border-radius: var(--radius-full);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--brand-black);
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06),
                      inset 0 1px 1px rgba(255, 255, 255, 0.9),
                      0 2px 6px rgba(24, 152, 66, 0.08);
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .see-more-btn:hover {
          background: rgba(255, 255, 255, 0.92);
          border-color: rgba(24, 152, 66, 0.4);
          color: var(--primary-green-dark);
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(24, 152, 66, 0.16),
                      inset 0 1px 2px rgba(255, 255, 255, 1);
        }

        @media (max-width: 1100px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .projects-header-centered .section-title {
            font-size: 1.95rem;
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .projects-header-centered {
            margin-bottom: 36px;
          }

          .projects-header-centered .section-title {
            font-size: clamp(1.7rem, 6.5vw, 2.15rem);
          }

          .projects-header-centered .section-desc {
            font-size: 0.95rem;
          }

          .project-media {
            height: clamp(190px, 52vw, 230px);
          }

          .see-more-btn {
            width: auto;
            min-width: 220px;
            max-width: 100%;
            justify-content: center;
            min-height: 48px;
            font-size: 0.92rem;
            padding: 13px 28px;
          }
        }
      `}</style>
    </section>
  );
}
