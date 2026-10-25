"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Building,
  MapPin,
  Calendar,
  Layers,
  ArrowRight,
  Maximize2,
  CheckCircle,
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: "industrial" | "commercial" | "infrastructure" | "residential";
  categoryLabel: string;
  location: string;
  area: string;
  paverType: string;
  year: string;
  image: string;
  excerpt: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "phoenix-warehouse",
    title: "Phoenix Warehouse & Logistics Hub: High-Strength Paving",
    category: "industrial",
    categoryLabel: "Industrial Logistics",
    location: "Biyagama / Industrial Export Zone",
    area: "20,000 Sq.Ft",
    paverType: "80mm Heavy-Duty Uni Interlock (55 MPa)",
    year: "2024",
    image: "/images/uni-paver.jpg",
    excerpt:
      "Successfully delivered 20,000 square feet of heavy-duty interlocking paving on compacted quarry dust bed, engineered to withstand high-capacity container forklift movements without surface settlement.",
  },
  {
    id: "colombo-port-city",
    title: "Colombo Port City: Waterfront Retail & Promenade Paving",
    category: "commercial",
    categoryLabel: "Commercial Landmark",
    location: "Port City Commercial Gateway, Colombo",
    area: "35,000 Sq.Ft",
    paverType: "Customized Washed Eliana & Directional Pavers",
    year: "2024",
    image: "/images/hero.jpg",
    excerpt:
      "Part of the world-class Port City investment zone for luxury dining, retail shops, and lifestyle spaces. Precision aesthetics combined with high skid-resistance for pedestrian safety.",
  },
  {
    id: "keells-katugastota",
    title: "Keells Supermarket Commercial Car Park – Katugasthota",
    category: "commercial",
    categoryLabel: "Retail Forecourt",
    location: "Katugasthota, Central Province",
    area: "14,000 Sq.Ft",
    paverType: "80mm UNI Interlock Blocks",
    year: "2023",
    image: "/images/uni-paver.jpg",
    excerpt:
      "High-traffic commercial car park paved with 80mm heavy-duty interlock blocks laid over compacted quarry dust base to support continuous customer vehicle turnover.",
  },
  {
    id: "keells-pallekele",
    title: "Keells Supermarket Logistics Forecourt – Pallekele",
    category: "commercial",
    categoryLabel: "Retail & Parking",
    location: "Pallekele, Kandy District",
    area: "12,500 Sq.Ft",
    paverType: "80mm UNI Interlock + Border Kerbs",
    year: "2023",
    image: "/images/uni-paver.jpg",
    excerpt:
      "Customer car park and rear delivery dock paved with reinforced interlock units, eliminating surface water stagnation and ensuring smooth truck turnaround.",
  },
  {
    id: "brandix-green-campus",
    title: "Brandix Eco-Tech Apparel Park – Sustainable Ground Paving",
    category: "infrastructure",
    categoryLabel: "Eco Infrastructure",
    location: "Pannala Export Zone",
    area: "85,000 Sq.Ft",
    paverType: "Eco-Grass Permeable Cellular Blocks",
    year: "2025",
    image: "/images/grass-paver.jpg",
    excerpt:
      "Permeable cellular grass block installation recharging over 1.2 million liters of annual rainfall back to subterranean water aquifers, earning LEED Platinum sustainability points.",
  },
  {
    id: "central-expressway",
    title: "Central Expressway Interchange Toll Plazas",
    category: "infrastructure",
    categoryLabel: "National Highway",
    location: "Kurunegala Central Interchange",
    area: "65,000 Sq.Ft",
    paverType: "Heavy-Duty Interlock Blocks 80mm (CS1 Grade)",
    year: "2022",
    image: "/images/uni-paver.jpg",
    excerpt:
      "High-shear interlocking pattern engineered under Road Development Authority (RDA) supervision to withstand heavy braking forces of interprovincial transport buses and haulage trailers.",
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

          {/* Filter Pills */}
          <div className="project-filter-group">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("industrial")}
              className={`filter-btn ${filter === "industrial" ? "active" : ""}`}
            >
              Industrial & Warehouses
            </button>
            <button
              type="button"
              onClick={() => setFilter("commercial")}
              className={`filter-btn ${filter === "commercial" ? "active" : ""}`}
            >
              Commercial & Supermarkets
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
                  height={380}
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
                <p className="project-excerpt">{project.excerpt}</p>

                <div className="project-footer-row">
                  <div className="project-spec-pill">
                    <Layers size={14} className="text-emerald" />
                    <span>{project.paverType}</span>
                  </div>

                  <a
                    href={`https://wa.me/94706972703?text=${encodeURIComponent(
                      `Inquiry regarding your work on ${project.title} (${project.location}). We have a similar project.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-project-link"
                  >
                    <span>Inquire Similar Site</span>
                    <ArrowRight size={14} />
                  </a>
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
          margin-bottom: 48px;
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
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .project-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--surface-border);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .project-media {
          position: relative;
          height: 240px;
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
          transform: scale(1.05);
        }

        .project-cat-badge {
          position: absolute;
          top: 14px;
          left: 14px;
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
          bottom: 14px;
          right: 14px;
          background: var(--primary-green);
          color: #ffffff;
          font-size: 0.76rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
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
          margin-bottom: 10px;
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
          margin-bottom: 10px;
        }

        .project-excerpt {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
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
          padding: 5px 12px;
          border-radius: var(--radius-full);
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--stone-dark);
        }

        .view-project-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary-green-dark);
          transition: gap 0.2s ease;
        }

        .view-project-link:hover {
          gap: 10px;
        }

        @media (max-width: 1200px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
