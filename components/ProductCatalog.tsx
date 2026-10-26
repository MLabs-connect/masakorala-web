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
  Phone,
} from "lucide-react";

export interface ProductItem {
  id: string;
  name: string;
  finish: string;
  category: "heavy" | "standard" | "washed" | "permeable" | "geometric";
  categoryLabel: string;
  thickness: string;
  strength: string;
  dimensions: string;
  unitsPerSqFt: number;
  estPrice: string;
  colorVariants: { name: string; hex: string }[];
  image: string;
  description: string;
  idealFor: string;
  slsGrade: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: "uni-semi-rough",
    name: "Uni Paver [Semi Rough]",
    finish: "Semi Rough Interlock",
    category: "heavy",
    categoryLabel: "Industrial & Heavy Cargo",
    thickness: "60mm & 80mm",
    strength: "15N / 25N / 30N / 40N / 50N / 55N",
    dimensions: "220(L) × 110(W) × 60/80(T) mm",
    unitsPerSqFt: 3.7,
    estPrice: "LKR 78 / block",
    colorVariants: [
      { name: "Natural Grey", hex: "#a6a9a8" },
      { name: "Charcoal Slate", hex: "#34383b" },
      { name: "Terracotta Red", hex: "#ae594d" },
    ],
    image: "/images/uni-paver.jpg",
    description:
      "Engineered with interlocking edge facets to resist extreme torsional wheel shear forces from loaded container trucks and heavy forklifts.",
    idealFor: "Warehouses, Container Yards, Commercial Car Parks, Fuel Stations",
    slsGrade: "SLS 1425 CS1 Heavy Commercial Grade",
  },
  {
    id: "uni-smooth",
    name: "Uni Paver [Smooth Finished]",
    finish: "Smooth Commercial Finish",
    category: "standard",
    categoryLabel: "Driveways & Commercial",
    thickness: "60mm & 80mm",
    strength: "25N / 30N / 45N / 50N",
    dimensions: "220(L) × 110(W) × 60/80(T) mm",
    unitsPerSqFt: 3.7,
    estPrice: "LKR 64 / block",
    colorVariants: [
      { name: "Natural Grey", hex: "#a6a9a8" },
      { name: "Charcoal Slate", hex: "#34383b" },
      { name: "Terracotta Red", hex: "#ae594d" },
      { name: "Warm Sand", hex: "#6f4e37" },
    ],
    image: "/images/uni-paver.jpg",
    description:
      "The gold standard for residential car porches and high-traffic shopping forecourts. Smooth, elegant, crack-proof, and easy to clean.",
    idealFor: "Residential Driveways, Townhouse Communities, School Campuses",
    slsGrade: "SLS 1425 Grade A",
  },
  {
    id: "washed-eliana",
    name: "Washed Eliana",
    finish: "Washed Aggregate Sparkle",
    category: "washed",
    categoryLabel: "Luxury Textured & Washed",
    thickness: "60 mm",
    strength: "15N / 30N / 45N",
    dimensions: "100(L) × 100(W) × 60(T) mm",
    unitsPerSqFt: 9.0,
    estPrice: "LKR 38 / block",
    colorVariants: [
      { name: "Granite Silver", hex: "#a6a9a8" },
      { name: "Charcoal Sparkle", hex: "#34383b" },
      { name: "Desert Red Sparkle", hex: "#ae594d" },
    ],
    image: "/images/hero.jpg",
    description:
      "Surface-washed exposing natural sparkling quartz and crushed granite aggregates. Natural non-slip tactile feel for luxury pedestrian zones.",
    idealFor: "Luxury Swimming Pool Decks, Hotel Walkways, VIP Courtyards, Verandahs",
    slsGrade: "Architectural Specification Grade",
  },
  {
    id: "arrow-paver",
    name: "Arrow Paver [Smooth Finished]",
    finish: "Smooth Directional",
    category: "geometric",
    categoryLabel: "Directional & Geometric",
    thickness: "60 mm",
    strength: "30N / mm² (40N Available)",
    dimensions: "200(L) × 150(W) × 60(T) mm",
    unitsPerSqFt: 3.5,
    estPrice: "LKR 68 / block",
    colorVariants: [
      { name: "Natural Grey", hex: "#a6a9a8" },
      { name: "Charcoal Slate", hex: "#34383b" },
      { name: "Terracotta Red", hex: "#ae594d" },
      { name: "Olive Moss", hex: "#7e8274" },
      { name: "Warm Sand", hex: "#6f4e37" },
      { name: "Off-White", hex: "#faf9f6" },
    ],
    image: "/images/uni-paver.jpg",
    description:
      "Modern geometric directional paver creating dynamic herringbone and arrow line aesthetics for contemporary estates.",
    idealFor: "Office Complex Driveways, Modern Residential Porches, Plaza Pathways",
    slsGrade: "SLS 1425 Grade A",
  },
  {
    id: "grass-paver",
    name: "Grass Paver [Smooth Finished]",
    finish: "Permeable Cellular Grid",
    category: "permeable",
    categoryLabel: "Eco-Friendly & Drainage",
    thickness: "80 mm",
    strength: "30N / mm² (Heavy Load Tested)",
    dimensions: "220(L) × 110(W) × 80(T) mm / 400×400×80 mm",
    unitsPerSqFt: 3.7,
    estPrice: "LKR 340 / block (Grid)",
    colorVariants: [
      { name: "Natural Grey", hex: "#a6a9a8" },
      { name: "Charcoal Slate", hex: "#34383b" },
    ],
    image: "/images/grass-paver.jpg",
    description:
      "Cellular honeycomb grid design allows vibrant turf grass or gravel infill, supporting natural stormwater filtration and 0% surface runoff.",
    idealFor: "Eco-Resorts, Overflow Parking, Fire Truck Access Lanes, Villa Lawns",
    slsGrade: "GBCSL Green Building Certified",
  },
  {
    id: "rhombus-paver",
    name: "Rhombus Paver [Smooth Finished]",
    finish: "3D Geometric Optical Illusion",
    category: "geometric",
    categoryLabel: "Directional & Geometric",
    thickness: "60 mm",
    strength: "30N / mm²",
    dimensions: "200(L) × 115(W) × 60(T) mm",
    unitsPerSqFt: 2.25,
    estPrice: "LKR 95 / block",
    colorVariants: [
      { name: "Natural Grey", hex: "#a6a9a8" },
      { name: "Charcoal Slate", hex: "#34383b" },
      { name: "Terracotta Red", hex: "#ae594d" },
      { name: "Olive Moss", hex: "#7e8274" },
      { name: "Warm Sand", hex: "#6f4e37" },
      { name: "Off-White", hex: "#faf9f6" },
    ],
    image: "/images/hero.jpg",
    description:
      "Striking 3D isometric cube optical illusion when laid in three contrasting color shades. Favored by leading landscape architects.",
    idealFor: "City Plazas, Waterfront Promenades, Signature Courtyards",
    slsGrade: "Architectural Premium Grade",
  },
  {
    id: "wing-paver",
    name: "Wing Paver [Smooth Finished]",
    finish: "Wing Fluted Profile",
    category: "geometric",
    categoryLabel: "Directional & Geometric",
    thickness: "60 mm",
    strength: "30N / mm²",
    dimensions: "230(H) × 180(W) × 60(T) mm",
    unitsPerSqFt: 3.4,
    estPrice: "LKR 72 / block",
    colorVariants: [
      { name: "Natural Grey", hex: "#a6a9a8" },
      { name: "Charcoal Slate", hex: "#34383b" },
      { name: "Terracotta Red", hex: "#ae594d" },
      { name: "Olive Moss", hex: "#7e8274" },
      { name: "Warm Sand", hex: "#6f4e37" },
      { name: "Off-White", hex: "#faf9f6" },
    ],
    image: "/images/uni-paver.jpg",
    description:
      "Interlocking winged contour creates high lateral friction and modern artistic patterns for residential driveways and civic parks.",
    idealFor: "Villa Compounds, Pedestrian Walkways, Commercial Terraces",
    slsGrade: "SLS 1425 Grade A",
  },
];

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [activeColor, setActiveColor] = useState<string>("");

  const filteredProducts =
    activeTab === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  const openProductModal = (prod: ProductItem) => {
    setSelectedProduct(prod);
    setActiveColor(prod.colorVariants[0]?.name || "");
  };

  return (
    <section id="products" className="section-padding products-section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center section-header-wrapper">
          <div className="section-tag">
            <Layers size={14} />
            <span>Our Products Portfolio</span>
          </div>
          <h2 className="section-title">
            A Diverse Portfolio of Certified Paving Blocks
          </h2>
          <p className="section-desc mx-auto">
            Masakorala Holdings manufactures high-density interlocking pavers, washed aggregate
            stones, and permeable grass systems engineered to SLS 1425 & ISO 9001 standards.
          </p>

          {/* Filter Navigation Tabs */}
          <div className="filter-nav-pills">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`filter-pill ${activeTab === "all" ? "active" : ""}`}
            >
              All Products ({PRODUCTS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("heavy")}
              className={`filter-pill ${activeTab === "heavy" ? "active" : ""}`}
            >
              Heavy Duty & Industrial
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("standard")}
              className={`filter-pill ${activeTab === "standard" ? "active" : ""}`}
            >
              Standard Commercial & Driveways
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("washed")}
              className={`filter-pill ${activeTab === "washed" ? "active" : ""}`}
            >
              Washed Aggregate
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("geometric")}
              className={`filter-pill ${activeTab === "geometric" ? "active" : ""}`}
            >
              Arrow, Rhombus & Wing
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("permeable")}
              className={`filter-pill ${activeTab === "permeable" ? "active" : ""}`}
            >
              Grass & Permeable
            </button>
          </div>
        </div>

        {/* Product Cards Grid - Modernized version of Senarath's card layout */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => openProductModal(product)}
              className="product-card cursor-pointer"
            >
              <div className="product-img-wrapper">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={340}
                  height={260}
                  className="product-img"
                />
                <span className="prod-badge-thick">{product.thickness}</span>
                <span className="prod-badge-cat">{product.finish}</span>
              </div>

              <div className="product-body">
                <h3 className="prod-card-title">{product.name}</h3>

                {/* Color Variants Dots with Tooltips matching Senarath Group styling */}
                <div className="color-variants-block">
                  <small className="color-label">Color Variants</small>
                  <div className="colors-dots-row">
                    {product.colorVariants.map((c, i) => (
                      <span
                        key={i}
                        className="color-dot"
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Clean Specs Preview - No broken truncation */}
                <div className="specs-preview-list">
                  <div className="spec-item">
                    <span>Dimensions:</span>
                    <strong>{product.dimensions}</strong>
                  </div>
                  <div className="spec-item">
                    <span>Coverage:</span>
                    <strong>{product.unitsPerSqFt} Units / Sq.Ft</strong>
                  </div>
                  <div className="spec-item">
                    <span>Compressive Strength:</span>
                    <strong className="text-emerald">{product.strength}</strong>
                  </div>
                </div>

                <div className="prod-card-footer">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openProductModal(product);
                    }}
                    className="btn-primary w-100 get-info-btn"
                  >
                    <MessageCircle size={15} />
                    <span>View Specs & WhatsApp Quote</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner linking to Calculator */}
        <div className="catalog-calculator-banner glass-panel">
          <div className="banner-text">
            <Calculator size={30} className="text-emerald" />
            <div>
              <h3>Know your project dimensions? Calculate exact block units & costs.</h3>
              <p>
                Our interactive material calculator factors in sand bedding volume, cutting wastage,
                and pallet freight estimates.
              </p>
            </div>
          </div>
          <a href="#calculator" className="btn-dark">
            <span>Open Paving Calculator</span>
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
                  <span className="modal-finish-sub">{selectedProduct.finish}</span>
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
                  <div className="modal-main-img-box">
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      width={500}
                      height={350}
                      className="modal-img"
                    />
                  </div>

                  <div className="modal-swatch-picker">
                    <span className="swatch-picker-label">
                      Selected Color: <strong>{activeColor || selectedProduct.colorVariants[0]?.name}</strong>
                    </span>
                    <div className="swatch-picker-row">
                      {selectedProduct.colorVariants.map((c, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setActiveColor(c.name)}
                          className={`swatch-picker-dot ${activeColor === c.name ? "selected" : ""
                            }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="modal-spec-badge">
                    <ShieldCheck size={16} className="text-emerald" />
                    <span>{selectedProduct.slsGrade}</span>
                  </div>
                </div>

                <div className="modal-data-col">
                  <p className="modal-desc">{selectedProduct.description}</p>

                  <table className="specs-table">
                    <tbody>
                      <tr>
                        <td>Nominal Dimensions:</td>
                        <td><strong>{selectedProduct.dimensions}</strong></td>
                      </tr>
                      <tr>
                        <td>Thickness:</td>
                        <td><strong>{selectedProduct.thickness}</strong></td>
                      </tr>
                      <tr>
                        <td>Compressive Strength:</td>
                        <td><strong className="text-emerald">{selectedProduct.strength}</strong></td>
                      </tr>
                      <tr>
                        <td>Units per Sq.Ft:</td>
                        <td><strong>{selectedProduct.unitsPerSqFt} Blocks</strong></td>
                      </tr>
                      <tr>
                        <td>Ideal Applications:</td>
                        <td>{selectedProduct.idealFor}</td>
                      </tr>
                      <tr>
                        <td>Indicative Rate:</td>
                        <td><strong>{selectedProduct.estPrice}</strong> (Ex-factory)</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="modal-actions-row">
                    <a
                      href={`https://wa.me/94706972703?text=${encodeURIComponent(
                        `*Product Inquiry - Masakorala Holdings*\n- Product: ${selectedProduct.name}\n- Finish: ${selectedProduct.finish}\n- Selected Color: ${activeColor || "Standard"}\n- Dimensions: ${selectedProduct.dimensions}\n- Compressive Strength: ${selectedProduct.strength}\nPlease provide a formal quotation and sample availability.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-100 modal-wa-btn"
                    >
                      <MessageCircle size={18} />
                      <span>Get Instant Quotation via WhatsApp</span>
                    </a>

                    <a
                      href="#calculator"
                      onClick={() => setSelectedProduct(null)}
                      className="btn-secondary w-100"
                    >
                      <Calculator size={18} />
                      <span>Calculate Material & Sand for this Block</span>
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
          margin-bottom: 48px;
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
          gap: 28px;
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
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1);
          border-color: rgba(24, 152, 66, 0.4);
        }

        .product-img-wrapper {
          position: relative;
          height: 230px;
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
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
        }

        .prod-badge-cat {
          position: absolute;
          bottom: 14px;
          left: 14px;
          background: rgba(12, 14, 18, 0.88);
          color: #4ade80;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          backdrop-filter: blur(8px);
        }

        .product-body {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .prod-card-title {
          font-family: var(--font-heading);
          font-size: 1.18rem;
          font-weight: 700;
          color: var(--brand-black);
          line-height: 1.3;
          margin-bottom: 12px;
        }

        /* Color variants block */
        .color-variants-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: var(--surface-offwhite);
          border-radius: var(--radius-sm);
          padding: 8px 12px;
          margin-bottom: 16px;
        }

        .color-label {
          font-size: 0.72rem;
          color: var(--stone-mid);
          margin-bottom: 6px;
          font-weight: 600;
        }

        .colors-dots-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .color-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.15);
          display: inline-block;
          transition: transform 0.2s ease;
        }

        .color-dot:hover {
          transform: scale(1.2);
        }

        /* Specs preview list */
        .specs-preview-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--stone-dark);
          margin-bottom: 18px;
          flex-grow: 1;
          border-top: 1px solid var(--surface-border);
          padding-top: 12px;
        }

        .spec-item {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .spec-item span {
          color: var(--stone-mid);
        }

        .text-emerald {
          color: var(--primary-green-dark);
        }

        .prod-card-footer {
          margin-top: auto;
        }

        .get-info-btn {
          padding: 11px;
          font-size: 0.86rem;
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
          line-height: 1.2;
        }

        .modal-finish-sub {
          font-size: 0.82rem;
          color: var(--stone-mid);
          font-weight: 600;
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
          gap: 14px;
        }

        .modal-main-img-box {
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #14171d;
          height: 240px;
        }

        .modal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-swatch-picker {
          background: var(--surface-offwhite);
          border-radius: var(--radius-md);
          padding: 12px;
          border: 1px solid var(--surface-border);
        }

        .swatch-picker-label {
          display: block;
          font-size: 0.78rem;
          color: var(--stone-dark);
          margin-bottom: 8px;
        }

        .swatch-picker-row {
          display: flex;
          gap: 8px;
        }

        .swatch-picker-dot {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 2px solid #ffffff;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .swatch-picker-dot:hover {
          transform: scale(1.15);
        }

        .swatch-picker-dot.selected {
          box-shadow: 0 0 0 2px var(--primary-green);
          transform: scale(1.15);
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

        .modal-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 18px;
        }

        .specs-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 24px;
          font-size: 0.84rem;
        }

        .specs-table td {
          padding: 8px 10px;
          border-bottom: 1px solid var(--surface-border);
        }

        .specs-table td:first-child {
          color: var(--stone-mid);
          width: 42%;
        }

        .modal-actions-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .modal-wa-btn {
          background: #25d366;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.3);
        }

        .modal-wa-btn:hover {
          background: #1eb857;
        }

        .w-100 {
          width: 100%;
        }

        .cursor-pointer {
          cursor: pointer;
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
