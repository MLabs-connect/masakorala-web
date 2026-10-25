"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Building,
  MapPin,
  Calendar,
  Layers,
  ArrowUpRight,
  Maximize2,
  CheckCircle,
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: "industrial" | "residential" | "hospitality" | "infrastructure";
  categoryLabel: string;
  location: string;
  area: string;
  paverType: string;
  year: string;
  image: string;
  highlight: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "colombo-port",
    title: "Colombo Port Logistics Cargo Terminus",
    category: "industrial",
    categoryLabel: "Industrial Logistics",
    location: "Colombo Port Maritime Corridor",
    area: "220,000 Sq.Ft",
    paverType: "80mm Heavy-Duty Uni Pavers (55 MPa)",
    year: "2024",
    image: "/images/uni-paver.jpg",
    highlight:
      "Subjected to continuous 45-ton reach stackers and laden container chassis trailers with zero rutting or block displacement.",
  },
  {
    id: "bentota-villa",
    title: "The Waterfront Sanctuary Villa & Estates",
    category: "residential",
    categoryLabel: "Luxury Residential",
    location: "Bentota & Mirissa Coastal Belt",
    area: "48,000 Sq.Ft",
    paverType: "Washed Eliana & Rhombus 3D Pavers",
    year: "2025",
    image: "/images/hero.jpg",
    highlight:
      "Exquisite natural granite sparkle texture reflecting coastal evening sunlight with non-slip barefoot safety.",
  },
  {
    id: "brandix-eco",
    title: "Brandix Eco-Tech Green Manufacturing Campus",
    category: "infrastructure",
    categoryLabel: "Eco Infrastructure",
    location: "Pannala Industrial Export Zone",
    area: "85,000 Sq.Ft",
    paverType: "Eco-Grass Permeable Cellular Blocks",
    year: "2023",
    image: "/images/grass-paver.jpg",
    highlight:
      "Recharging over 1.2 million liters of stormwater annually into natural groundwater tables, earning LEED Platinum credits.",
  },
  {
    id: "expressway-toll",
    title: "Central Expressway Interchange Toll Plazas",
    category: "infrastructure",
    categoryLabel: "National Highways",
    location: "Kurunegala Interchange Plazas",
    area: "65,000 Sq.Ft",
    paverType: "Heavy-Duty Interlocking Blocks 80mm",
    year: "2022",
    image: "/images/uni-paver.jpg",
    highlight:
      "High-shear interlocking pattern engineered to withstand sudden braking forces of commercial buses and haulage trucks.",
  },
];

export default function ProjectsGallery() {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        {/* Header */}
        <div className="projects-header-row">
          <div>
            <div className="section-tag">
              <Building size={14} />
              <span>Proven Landmark Portfolio</span>
            </div>
            <h2 className="section-title">
              Infrastructure Shaped by Masakorala Engineering
            </h2>
            <p className="section-desc">
              Over 14 million square feet installed across Sri Lanka&apos;s leading ports,
              industrial zones, five-star resorts, and premier residential communities.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="project-filter-group">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
            >
              All Projects
            </button>
            <button
              type="button"
              onClick={() => setFilter("industrial")}
              className={`filter-btn ${filter === "industrial" ? "active" : ""}`}
            >
              Industrial & Ports
            </button>
            <button
              type="button"
              onClick={() => setFilter("residential")}
              className={`filter-btn ${filter === "residential" ? "active" : ""}`}
            >
              Luxury Estates
            </button>
            <button
              type="button"
              onClick={() => setFilter("infrastructure")}
              className={`filter-btn ${filter === "infrastructure" ? "active" : ""}`}
            >
              Highways & Eco
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-media">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={420}
                  className="project-img"
                />
                <span className="project-cat-badge">{project.categoryLabel}</span>
                <span className="project-area-badge">{project.area}</span>
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
                <p className="project-highlight">{project.highlight}</p>

                <div className="project-spec-pill">
                  <Layers size={14} className="text-emerald" />
                  <span>{project.paverType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          background: #ffffff;
          border-top: 1px solid var(--surface-border);
        }

        .projects-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 28px;
          margin-bottom: 50px;
        }

        .project-filter-group {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .filter-btn {
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--stone-mid);
          background: var(--surface-offwhite);
          border: 1px solid var(--surface-border);
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          color: var(--primary-green-dark);
          border-color: var(--primary-green);
        }

        .filter-btn.active {
          background: var(--brand-black);
          color: #ffffff;
          border-color: var(--brand-black);
        }

        /* Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 36px;
        }

        .project-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--surface-border);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .project-media {
          position: relative;
          height: 320px;
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
          transform: scale(1.04);
        }

        .project-cat-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(12, 14, 18, 0.85);
          color: #4ade80;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          backdrop-filter: blur(8px);
        }

        .project-area-badge {
          position: absolute;
          bottom: 16px;
          right: 16px;
          background: var(--primary-green);
          color: #ffffff;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: var(--radius-sm);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .project-content {
          padding: 28px;
        }

        .project-loc-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
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
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--brand-black);
          line-height: 1.3;
          margin-bottom: 10px;
        }

        .project-highlight {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 18px;
        }

        .project-spec-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--surface-offwhite);
          border: 1px solid var(--surface-border);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--stone-dark);
        }

        @media (max-width: 992px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-media {
            height: 260px;
          }
        }
      `}</style>
    </section>
  );
}
