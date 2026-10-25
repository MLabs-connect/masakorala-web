"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  FileText,
  Calculator,
  MessageCircle,
  X,
} from "lucide-react";

interface ProductItem {
  id: string;
  name: string;
  category: "heavy" | "standard" | "washed" | "permeable" | "precast";
  categoryLabel: string;
  thickness: string;
  strength: string;
  dimensions: string;
  unitsPerSqFt: number;
  estPrice: string;
  colors: string[];
  image: string;
  shortDesc: string;
  idealFor: string;
  slsGrade: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: "uni-80",
    name: "Uni Paver 80mm Heavy-Duty Interlock",
    category: "heavy",
    categoryLabel: "Industrial & Heavy Traffic",
    thickness: "80 mm",
    strength: "55+ MPa (CS1 Grade)",
    dimensions: "225 mm × 112.5 mm × 80 mm",
    unitsPerSqFt: 3.7,
    estPrice: "LKR 78 / block",
    colors: ["Natural Grey", "Charcoal Slate", "Terracotta Red"],
    image: "/images/uni-paver.jpg",
    shortDesc:
      "Engineered with interlocking edge facets to resist extreme torsional wheel shear forces from loaded container trucks and heavy forklifts.",
    idealFor: "Warehouses, Shipping Terminals, Freight Hubs, Petrol Sheds",
    slsGrade: "SLS 1425 Heavy Commercial Grade",
  },
  {
    id: "eco-grass-80",
    name: "Eco-Permeable Grass Paver 80mm",
    category: "permeable",
    categoryLabel: "Eco-Friendly & Drainage",
    thickness: "80 mm",
    strength: "40+ MPa",
    dimensions: "400 mm × 400 mm × 80 mm",
    unitsPerSqFt: 0.58,
    estPrice: "LKR 340 / block",
    colors: ["Concrete Grey", "Forest Green Accent"],
    image: "/images/grass-paver.jpg",
    shortDesc:
      "Cellular honeycomb grid design allows vibrant turf grass or gravel infill, supporting natural stormwater filtration and 0% surface runoff.",
    idealFor: "Eco-Resorts, Overflow Parking, Fire Truck Access Lanes, Villa Lawns",
    slsGrade: "GBCSL Green Building Certified",
  },
  {
    id: "uni-60",
    name: "Uni Paver 60mm Standard Commercial",
    category: "standard",
    categoryLabel: "Driveways & Commercial",
    thickness: "60 mm",
    strength: "45+ MPa",
    dimensions: "225 mm × 112.5 mm × 60 mm",
    unitsPerSqFt: 3.7,
    estPrice: "LKR 64 / block",
    colors: ["Charcoal", "Red", "Natural Grey", "Tuscan Yellow"],
    image: "/images/uni-paver.jpg",
    shortDesc:
      "The gold standard for residential car porches and high-traffic shopping forecourts. Highly durable, easy to install, and crack-proof.",
    idealFor: "Residential Driveways, Townhouse Communities, School Campuses",
    slsGrade: "SLS 1425 Grade A",
  },
  {
    id: "washed-eliana",
    name: "Washed Eliana Architectural Paver",
    category: "washed",
    categoryLabel: "Luxury Textured & Washed",
    thickness: "60 mm",
    strength: "45+ MPa",
    dimensions: "100 mm × 100 mm × 60 mm",
    unitsPerSqFt: 9.0,
    estPrice: "LKR 38 / block",
    colors: ["Granite Silver", "Charcoal Sparkle", "Desert Dune Gold"],
    image: "/images/hero.jpg",
    shortDesc:
      "Surface-washed exposing natural sparkling quartz and crushed granite aggregates. Natural non-slip tactile feel for luxury pedestrian zones.",
    idealFor: "Luxury Swimming Pool Decks, Hotel Walkways, VIP Courtyards",
    slsGrade: "Architectural Specification Grade",
  },
  {
    id: "arrow-60",
    name: "Arrow Directional Interlock Paver 60mm",
    category: "standard",
    categoryLabel: "Driveways & Commercial",
    thickness: "60 mm",
    strength: "48+ MPa",
    dimensions: "200 mm × 150 mm × 60 mm",
    unitsPerSqFt: 3.5,
    estPrice: "LKR 68 / block",
    colors: ["Charcoal", "Bright Red", "Steel Grey"],
    image: "/images/uni-paver.jpg",
    shortDesc:
      "Modern geometric directional paver creating dynamic herringbone and arrow line aesthetics for contemporary estates.",
    idealFor: "Office Complex Driveways, Modern Residential Porches",
    slsGrade: "SLS 1425 Grade A",
  },
  {
    id: "rhombus-3d",
    name: "Rhombus 3D Geometric Illusion Paver",
    category: "washed",
    categoryLabel: "Luxury Textured & Washed",
    thickness: "60 mm",
    strength: "45+ MPa",
    dimensions: "200 mm × 115 mm × 60 mm",
    unitsPerSqFt: 2.25,
    estPrice: "LKR 95 / block",
    colors: ["Tri-Color Accent: Charcoal + Grey + White"],
    image: "/images/hero.jpg",
    shortDesc:
      "Striking 3D isometric cube optical illusion when laid in three contrasting color shades. Favored by leading landscape architects.",
    idealFor: "City Plazas, Waterfront Promenades, Signature Courtyards",
    slsGrade: "Architectural Premium Grade",
  },
];

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const filteredProducts =
    activeTab === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section id="products" className="section-padding products-section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center section-header-wrapper">
          <div className="section-tag">
            <Layers size={14} />
            <span>Certified Product Portfolio</span>
          </div>
          <h2 className="section-title">
            Engineered Pavers For Every Architectural Demand
          </h2>
          <p className="section-desc mx-auto">
            Manufactured to SLS 1425 standards with automated German vibro-compaction.
            From 40-ton container yards to five-star beachfront promenade designs.
          </p>

          {/* Filter Navigation Tabs */}
          <div className="filter-nav-pills">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`filter-pill ${activeTab === "all" ? "active" : ""}`}
            >
              All Paving Profiles ({PRODUCTS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("heavy")}
              className={`filter-pill ${activeTab === "heavy" ? "active" : ""}`}
            >
              Heavy Duty 80mm (Industrial)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("standard")}
              className={`filter-pill ${activeTab === "standard" ? "active" : ""}`}
            >
              Driveways & Commercial 60mm
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("washed")}
              className={`filter-pill ${activeTab === "washed" ? "active" : ""}`}
            >
              Luxury Washed & Textured
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("permeable")}
              className={`filter-pill ${activeTab === "permeable" ? "active" : ""}`}
            >
              Eco Grass & Permeable
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-img-wrapper">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={340}
                  className="product-img"
                />
                <span className="prod-badge-thick">{product.thickness}</span>
                <span className="prod-badge-cat">{product.categoryLabel}</span>
              </div>

              <div className="product-body">
                <div className="prod-meta-top">
                  <span className="prod-strength">{product.strength}</span>
                  <span className="prod-coverage">{product.unitsPerSqFt} pcs/sq.ft</span>
                </div>

                <h3 className="prod-card-title">{product.name}</h3>
                <p className="prod-card-desc">{product.shortDesc}</p>

                {/* Color swatches */}
                <div className="prod-swatches-row">
                  <span className="swatch-label">Available Colors:</span>
                  <span className="swatch-names">{product.colors.join(", ")}</span>
                </div>

                <div className="prod-card-footer">
                  <div className="prod-pricing">
                    <span className="price-tag">Indicative Rate</span>
                    <strong className="price-val">{product.estPrice}</strong>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="btn-secondary prod-detail-btn"
                  >
                    <span>View Specs</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner to Calculator */}
        <div className="catalog-calculator-banner glass-panel">
          <div className="banner-text">
            <Calculator size={28} className="text-emerald" />
            <div>
              <h3>Need exact quantities and costs for your project area?</h3>
              <p>
                Use our automated estimator to calculate block units, bedding sand cubes,
                and pallet freight estimates.
              </p>
            </div>
          </div>
          <a href="#calculator" className="btn-primary">
            <span>Launch Estimator</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Interactive Product Details Light-Dismiss Modal Dialog */}
        {selectedProduct && (
          <dialog
            id="productModal"
            open
            closedby="any"
            aria-labelledby="modalTitle"
            className="custom-dialog prod-spec-dialog"
          >
            <div className="modal-inner">
              <div className="modal-header">
                <div>
                  <span className="section-tag">{selectedProduct.categoryLabel}</span>
                  <h3 id="modalTitle" className="modal-product-title">
                    {selectedProduct.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="modal-close-btn"
                  aria-label="Close dialog"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="modal-content-grid">
                <div className="modal-img-col">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    width={500}
                    height={350}
                    className="modal-img"
                  />
                  <div className="modal-spec-badge">
                    <ShieldCheck size={16} className="text-emerald" />
                    <span>{selectedProduct.slsGrade}</span>
                  </div>
                </div>

                <div className="modal-data-col">
                  <table className="specs-table">
                    <tbody>
                      <tr>
                        <td>Thickness:</td>
                        <td><strong>{selectedProduct.thickness}</strong></td>
                      </tr>
                      <tr>
                        <td>Nominal Dimensions:</td>
                        <td>{selectedProduct.dimensions}</td>
                      </tr>
                      <tr>
                        <td>Compressive Strength:</td>
                        <td><span className="text-emerald font-bold">{selectedProduct.strength}</span></td>
                      </tr>
                      <tr>
                        <td>Coverage Density:</td>
                        <td>{selectedProduct.unitsPerSqFt} units per Sq.Ft</td>
                      </tr>
                      <tr>
                        <td>Ideal Applications:</td>
                        <td>{selectedProduct.idealFor}</td>
                      </tr>
                      <tr>
                        <td>Standard Colors:</td>
                        <td>{selectedProduct.colors.join(", ")}</td>
                      </tr>
                      <tr>
                        <td>Indicative Cost:</td>
                        <td><strong>{selectedProduct.estPrice}</strong> (Ex-factory)</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="modal-actions-row">
                    <a
                      href={`https://wa.me/94706972703?text=Inquiry%20for%20${encodeURIComponent(
                        selectedProduct.name
                      )}%20(${selectedProduct.thickness})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-100"
                    >
                      <MessageCircle size={18} />
                      <span>Request Sample Batch or Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        )}
      </div>

      <style jsx>{`
        .products-section {
          background: var(--surface-offwhite);
          border-top: 1px solid var(--surface-border);
        }

        .section-header-wrapper {
          margin-bottom: 50px;
        }

        .filter-nav-pills {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }

        .filter-pill {
          padding: 9px 20px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--stone-mid);
          background: #ffffff;
          border: 1px solid var(--surface-border);
          transition: all 0.2s ease;
        }

        .filter-pill:hover {
          border-color: var(--primary-green);
          color: var(--primary-green-dark);
        }

        .filter-pill.active {
          background: var(--brand-black);
          color: #ffffff;
          border-color: var(--brand-black);
        }

        /* Products Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 50px;
        }

        .product-card {
          background: #ffffff;
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(24, 152, 66, 0.4);
        }

        .product-img-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #14171d;
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .product-card:hover .product-img {
          transform: scale(1.05);
        }

        .prod-badge-thick {
          position: absolute;
          top: 14px;
          right: 14px;
          background: var(--brand-black);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
        }

        .prod-badge-cat {
          position: absolute;
          bottom: 14px;
          left: 14px;
          background: rgba(12, 14, 18, 0.85);
          color: #4ade80;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          backdrop-filter: blur(8px);
        }

        .product-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .prod-meta-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .prod-strength {
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--primary-green-dark);
          background: var(--primary-green-subtle);
          padding: 3px 8px;
          border-radius: var(--radius-sm);
        }

        .prod-coverage {
          font-size: 0.76rem;
          color: var(--stone-mid);
          font-weight: 600;
        }

        .prod-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--brand-black);
          line-height: 1.3;
          margin-bottom: 8px;
        }

        .prod-card-desc {
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 16px;
          flex-grow: 1;
        }

        .prod-swatches-row {
          font-size: 0.75rem;
          padding: 8px 12px;
          background: var(--surface-offwhite);
          border-radius: var(--radius-sm);
          margin-bottom: 18px;
          color: var(--stone-dark);
        }

        .swatch-label {
          font-weight: 700;
          margin-right: 6px;
        }

        .prod-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid var(--surface-border);
        }

        .prod-pricing {
          display: flex;
          flex-direction: column;
        }

        .price-tag {
          font-size: 0.68rem;
          color: var(--stone-light);
          text-transform: uppercase;
        }

        .price-val {
          font-size: 1rem;
          font-weight: 800;
          color: var(--brand-black);
        }

        .prod-detail-btn {
          padding: 8px 16px;
          font-size: 0.82rem;
        }

        /* Bottom Banner */
        .catalog-calculator-banner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 36px;
          border-radius: var(--radius-xl);
          background: #ffffff;
          border: 1px solid var(--surface-border);
          box-shadow: var(--shadow-md);
        }

        .banner-text {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .banner-text h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--brand-black);
        }

        .banner-text p {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .text-emerald {
          color: var(--primary-green);
        }

        /* Modal Dialog */
        .modal-inner {
          padding: 32px;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }

        .modal-product-title {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--brand-black);
        }

        .modal-close-btn {
          color: var(--stone-mid);
          padding: 6px;
          border-radius: 50%;
          transition: background 0.2s ease;
        }

        .modal-close-btn:hover {
          background: #f1f5f9;
          color: var(--brand-black);
        }

        .modal-content-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 28px;
        }

        .modal-img-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .modal-img {
          width: 100%;
          height: auto;
          border-radius: var(--radius-md);
          object-fit: cover;
        }

        .modal-spec-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: var(--surface-offwhite);
          border-radius: var(--radius-sm);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--stone-dark);
        }

        .specs-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 24px;
          font-size: 0.86rem;
        }

        .specs-table td {
          padding: 8px 10px;
          border-bottom: 1px solid var(--surface-border);
        }

        .specs-table td:first-child {
          color: var(--stone-mid);
          width: 40%;
        }

        .font-bold {
          font-weight: 700;
        }

        .w-100 {
          width: 100%;
        }

        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          .catalog-calculator-banner {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }
          .banner-text {
            flex-direction: column;
          }
          .modal-content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
