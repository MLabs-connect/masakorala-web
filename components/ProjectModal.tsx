"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  MapPin,
  Layers,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ProjectItem } from "@/data/projectsData";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const [prevProject, setPrevProject] = useState<ProjectItem | null>(project);

  // Reset photo index when project changes
  if (project !== prevProject) {
    setPrevProject(project);
    setActivePhotoIndex(0);
  }

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const photos =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        <div className="modal-body-grid">
          {/* Left Column: Image Gallery */}
          <div className="modal-gallery-col">
            <div className="main-photo-wrapper">
              <Image
                src={photos[activePhotoIndex]}
                alt={`${project.title} - Photo ${activePhotoIndex + 1}`}
                fill
                sizes="(max-width: 900px) 100vw, 550px"
                className="main-photo"
                priority
              />

              {photos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevPhoto}
                    className="gallery-nav-btn prev-btn"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextPhoto}
                    className="gallery-nav-btn next-btn"
                    aria-label="Next photo"
                  >
                    <ChevronRight size={20} />
                  </button>
                  <div className="photo-counter">
                    {activePhotoIndex + 1} / {photos.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Strip */}
            {photos.length > 1 && (
              <div className="thumbnails-row">
                {photos.map((photo, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`thumb-btn ${idx === activePhotoIndex ? "active" : ""}`}
                  >
                    <Image
                      src={photo}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      sizes="100px"
                      className="thumb-img"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Quick Specs Cards under photos */}
            <div className="specs-meta-grid">
              <div className="meta-box">
                <span className="meta-label">Paved Area</span>
                <strong className="meta-value text-emerald">{project.area}</strong>
              </div>
              <div className="meta-box">
                <span className="meta-label">Completion</span>
                <strong className="meta-value">{project.year}</strong>
              </div>
              <div className="meta-box">
                <span className="meta-label">Client / Division</span>
                <strong className="meta-value">{project.client}</strong>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Information */}
          <div className="modal-info-col">
            <div className="location-badge">
              <MapPin size={15} className="text-emerald" />
              <span>{project.location}</span>
            </div>

            <h2 className="project-detail-title">{project.title}</h2>

            <div className="paver-spec-highlight">
              <Layers size={18} className="text-emerald" />
              <div>
                <span className="spec-sub">Paver Profile & Strength</span>
                <p className="spec-name">{project.paverType}</p>
              </div>
            </div>

            <div className="detail-section">
              <h4 className="section-heading">Project Overview</h4>
              <p className="detail-desc">{project.description}</p>
            </div>

            <div className="detail-section">
              <h4 className="section-heading">Civil & Engineering Scope</h4>
              <ul className="scope-list">
                {project.scope.map((item, i) => (
                  <li key={i} className="scope-item">
                    <CheckCircle2 size={16} className="text-emerald scope-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(12, 14, 18, 0.75);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.25s ease forwards;
        }

        .modal-card {
          position: relative;
          background: #ffffff;
          border-radius: var(--radius-2xl);
          width: 100%;
          max-width: 1050px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
          border: 1px solid var(--surface-border);
          animation: slideUp 0.25s ease forwards;
        }

        .modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--surface-offwhite);
          border: 1px solid var(--surface-border);
          color: var(--brand-black);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background: var(--brand-black);
          color: #ffffff;
          transform: rotate(90deg);
        }

        .modal-body-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 36px;
          padding: 36px;
        }

        /* Gallery Column */
        .modal-gallery-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .main-photo-wrapper {
          position: relative;
          width: 100%;
          height: 380px;
          background: #0f1318;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 1px solid var(--surface-border);
        }

        :global(.main-photo) {
          object-fit: cover !important;
          transition: transform 0.3s ease;
        }

        .gallery-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(12, 14, 18, 0.7);
          color: #ffffff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(4px);
          transition: all 0.2s ease;
        }

        .gallery-nav-btn:hover {
          background: var(--primary-green);
          transform: translateY(-50%) scale(1.1);
        }

        .prev-btn {
          left: 14px;
        }

        .next-btn {
          right: 14px;
        }

        .photo-counter {
          position: absolute;
          bottom: 14px;
          right: 14px;
          background: rgba(0, 0, 0, 0.7);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          backdrop-filter: blur(4px);
        }

        .thumbnails-row {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 4px;
        }

        .thumb-btn {
          position: relative;
          width: 80px;
          height: 60px;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 2px solid transparent;
          background: #14171d;
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .thumb-btn.active {
          border-color: var(--primary-green);
          box-shadow: 0 0 0 2px rgba(24, 152, 66, 0.3);
        }

        :global(.thumb-img) {
          object-fit: cover !important;
        }

        .specs-meta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          background: var(--surface-offwhite);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-lg);
          padding: 16px;
        }

        .meta-box {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .meta-label {
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--stone-mid);
        }

        .meta-value {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--brand-black);
          line-height: 1.3;
        }

        .text-emerald {
          color: var(--primary-green);
        }

        /* Info Column */
        .modal-info-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .location-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--stone-dark);
          background: var(--surface-offwhite);
          border: 1px solid var(--surface-border);
          padding: 5px 12px;
          border-radius: var(--radius-full);
          align-self: flex-start;
        }

        .project-detail-title {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--brand-black);
          line-height: 1.3;
          margin: 0;
        }

        .paver-spec-highlight {
          display: flex;
          align-items: center;
          gap: 14px;
          background: var(--primary-green-subtle);
          border: 1px solid rgba(24, 152, 66, 0.25);
          padding: 14px 18px;
          border-radius: var(--radius-lg);
        }

        .spec-sub {
          display: block;
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--primary-green-dark);
        }

        .spec-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--brand-black);
          margin: 2px 0 0 0;
        }

        .detail-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .section-heading {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--stone-dark);
          margin: 0;
        }

        .detail-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
        }

        .scope-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .scope-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.84rem;
          color: var(--brand-black);
          line-height: 1.45;
        }

        :global(.scope-icon) {
          flex-shrink: 0;
          margin-top: 2px;
        }



        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 900px) {
          .modal-body-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 24px;
          }

          .main-photo-wrapper {
            height: 280px;
          }

          .specs-meta-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
          }
        }

        @media (max-width: 640px) {
          .modal-backdrop {
            padding: 12px 10px;
            align-items: flex-start;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }

          .modal-card {
            max-height: calc(100dvh - 24px);
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            overscroll-behavior-y: contain;
            border-radius: 20px;
            width: 100%;
            margin: auto 0;
          }

          .modal-close-btn {
            top: 12px;
            right: 12px;
            width: 38px;
            height: 38px;
            background: #ffffff;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
            border: 1px solid var(--surface-border);
            z-index: 20;
          }

          .modal-body-grid {
            padding: 18px 14px;
            gap: 16px;
          }

          .main-photo-wrapper {
            height: 210px;
            border-radius: 14px;
          }

          .project-detail-header {
            padding-right: 42px;
          }

          .project-detail-title {
            font-size: 1.25rem;
            line-height: 1.3;
          }

          .specs-meta-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .meta-box {
            padding: 10px 14px;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          .thumbnails-row {
            gap: 8px;
            -webkit-overflow-scrolling: touch;
          }

          .thumb-btn {
            width: 70px;
            height: 52px;
            border-radius: 8px;
          }

          .gallery-nav-btn {
            width: 34px;
            height: 34px;
          }
        }

        @media (max-width: 400px) {
          .project-detail-title {
            font-size: 1.15rem;
          }
          .main-photo-wrapper {
            height: 180px;
          }
          .modal-body-grid {
            padding: 16px 12px;
          }
        }
      `}</style>
    </div>
  );
}
