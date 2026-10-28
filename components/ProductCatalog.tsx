"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Gauge,
  Ruler,
  X,
  ChevronDown,
  SlidersHorizontal,
} from "lucide-react";

export interface ColorVariant {
  name: string;
  hex: string;
}

export interface ProductItem {
  id: string;
  name: string;
  tag: string;
  category: "all" | "interlock" | "eco" | "geometric" | "architectural" | "washed";
  strengthBadge: string;
  strengthFull: string;
  dimensions: string;
  unitsPerSqFt: string;
  thicknessOptions: string;
  typicalApplications: string;
  description: string;
  image: string;
  colorVariants: ColorVariant[];
}

export const PRODUCTS: ProductItem[] = [
  {
    id: "uni-paver",
    name: "Uni Paver (Heavy-Duty Interlock)",
    tag: "INTERLOCK",
    category: "interlock",
    strengthBadge: "55N",
    strengthFull: "15N / 25N / 30N / 40N / 50N / 55N",
    dimensions: "220(L) × 110(W) × 60/80(H) mm",
    unitsPerSqFt: "3.7 Blocks",
    thicknessOptions: "60mm (Vehicular), 80mm (Heavy Freight)",
    typicalApplications: "Container yards, filling stations, industrial driveways, parking zones.",
    description:
      "Engineered for maximum horizontal shear resistance. The classic zigzag profile locks on four sides, making it ideal for heavy commercial yards, container terminals, and petrol stations.",
    image: "/images/products/uni-paver.webp",
    colorVariants: [
      { name: "Natural Grey", hex: "#a6a9a8" },
      { name: "Charcoal Black", hex: "#34383b" },
      { name: "Terracotta Red", hex: "#ae594d" },
      { name: "Forest Green", hex: "#2e7d32" },
      { name: "Desert Sand", hex: "#c2a67a" },
    ],
  },
  {
    id: "arrow-paver",
    name: "Arrow Paver (Directional Interlock)",
    tag: "INTERLOCK",
    category: "interlock",
    strengthBadge: "30N",
    strengthFull: "30N / 45N / 50N",
    dimensions: "200(L) × 160(W) × 60/80(H) mm",
    unitsPerSqFt: "3.5 Blocks",
    thicknessOptions: "60mm (Vehicular), 80mm (Heavy Traffic)",
    typicalApplications: "Commercial forecourts, shopping mall walkways, driveways, civic plazas.",
    description:
      "Modern geometric arrow profile engineered for directional guidance and enhanced interlocking grip, resisting vehicle turning torsion while maintaining an elegant aesthetic.",
    image: "/images/products/arrow-paver.webp",
    colorVariants: [
      { name: "Natural Grey", hex: "#a6a9a8" },
      { name: "Charcoal Black", hex: "#34383b" },
      { name: "Terracotta Red", hex: "#ae594d" },
      { name: "Forest Green", hex: "#2e7d32" },
      { name: "Desert Sand", hex: "#c2a67a" },
    ],
  },
  {
    id: "grass-paver",
    name: "Grass Paver (Eco-Permeable)",
    tag: "ECO-PERMEABLE",
    category: "eco",
    strengthBadge: "30N",
    strengthFull: "30N / 40N",
    dimensions: "220(L) × 110(W) × 80(H) mm",
    unitsPerSqFt: "3.7 Blocks",
    thicknessOptions: "80mm (Sustainable Ground Cover)",
    typicalApplications: "Eco parking lots, residential green driveways, fire access tracks, parks.",
    description:
      "Eco-engineered cellular design allowing rainwater to naturally infiltrate ground aquifers, preventing storm runoff and supporting lush grass growth for green parking.",
    image: "/images/products/grass-paver.webp",
    colorVariants: [
      { name: "Natural Grey", hex: "#a6a9a8" },
      { name: "Charcoal Black", hex: "#34383b" },
      { name: "Forest Green", hex: "#2e7d32" },
    ],
  },
  {
    id: "rhombus-paver",
    name: "Rhombus Paver (3D Geometric)",
    tag: "GEOMETRIC",
    category: "geometric",
    strengthBadge: "30N",
    strengthFull: "30N / 40N / 50N",
    dimensions: "200(L) × 120(W) × 60(H) mm",
    unitsPerSqFt: "2.25 Blocks",
    thicknessOptions: "60mm (Decorative & Light Vehicular)",
    typicalApplications: "Luxury resort promenades, architectural courtyards, boutique hotel driveways.",
    description:
      "Striking 3D isometric illusion diamond profile. When laid in three-color configurations, creates a stunning optical cube pattern for prestigious plazas and hotel entrances.",
    image: "/images/products/rhombus-paver.webp",
    colorVariants: [
      { name: "Natural Grey", hex: "#a6a9a8" },
      { name: "Charcoal Black", hex: "#34383b" },
      { name: "Terracotta Red", hex: "#ae594d" },
      { name: "Forest Green", hex: "#2e7d32" },
      { name: "Desert Sand", hex: "#c2a67a" },
    ],
  },
  {
    id: "wing-paver",
    name: "Wing Paver (Smooth Finished)",
    tag: "ARCHITECTURAL",
    category: "architectural",
    strengthBadge: "30N",
    strengthFull: "30N / 40N",
    dimensions: "230(L) × 180(W) × 60(H) mm",
    unitsPerSqFt: "3.4 Blocks",
    thicknessOptions: "60mm (Vehicular & Pedestrian)",
    typicalApplications: "Airport walkways, pedestrian shopping streets, residential communities.",
    description:
      "Curved interlocking wing geometry delivering seamless continuity across long expanses. Provides smooth wheel roll for shopping carts, luggage, and passenger vehicles.",
    image: "/images/products/wing-paver.webp",
    colorVariants: [
      { name: "Natural Grey", hex: "#a6a9a8" },
      { name: "Charcoal Black", hex: "#34383b" },
      { name: "Terracotta Red", hex: "#ae594d" },
      { name: "Forest Green", hex: "#2e7d32" },
      { name: "Desert Sand", hex: "#c2a67a" },
    ],
  },
  {
    id: "washed-eliana",
    name: "Washed Eliana (Natural Aggregate)",
    tag: "WASHED AGGREGATE",
    category: "washed",
    strengthBadge: "30N",
    strengthFull: "15N / 30N / 40N",
    dimensions: "100(L) × 100(W) × 60(H) mm",
    unitsPerSqFt: "9.0 Blocks",
    thicknessOptions: "60mm (Architectural Cobble)",
    typicalApplications: "Swimming pool decks, luxury villa entrances, heritage restorations, garden walkways.",
    description:
      "Surface-washed to reveal natural quartz aggregates with sparkling high-friction texture. Non-slip even when drenched in monsoon rain, offering timeless European cobble beauty.",
    image: "/images/products/washed-eliana.webp",
    colorVariants: [
      { name: "Natural Grey", hex: "#a6a9a8" },
      { name: "Charcoal Black", hex: "#34383b" },
      { name: "Terracotta Red", hex: "#ae594d" },
    ],
  },
];

export default function ProductCatalog() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [activeColors, setActiveColors] = useState<Record<string, string>>({});
  const [modalColor, setModalColor] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProduct(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

  const filteredProducts =
    activeTab === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeTab);

  const displayedProducts = isExpanded
    ? filteredProducts
    : filteredProducts.slice(0, 3);

  const handleColorSelect = (productId: string, colorName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveColors((prev) => ({
      ...prev,
      [productId]: colorName,
    }));
  };

  const openProductModal = (product: ProductItem) => {
    setSelectedProduct(product);
    setModalColor(activeColors[product.id] || product.colorVariants[0]?.name || "");
  };

  return (
    <section id="products" className="section-padding products-section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center section-header-wrapper">
          <div className="section-tag">
            <span>Our Products</span>
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
              onClick={() => setActiveTab("interlock")}
              className={`filter-pill ${activeTab === "interlock" ? "active" : ""}`}
            >
              Interlock Pavers
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("eco")}
              className={`filter-pill ${activeTab === "eco" ? "active" : ""}`}
            >
              Eco-Permeable
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("geometric")}
              className={`filter-pill ${activeTab === "geometric" ? "active" : ""}`}
            >
              3D & Geometric
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("architectural")}
              className={`filter-pill ${activeTab === "architectural" ? "active" : ""}`}
            >
              Architectural Wing
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("washed")}
              className={`filter-pill ${activeTab === "washed" ? "active" : ""}`}
            >
              Washed Aggregate
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="products-grid">
          {displayedProducts.map((product) => {
            const currentColor = activeColors[product.id] || product.colorVariants[0]?.name || "";
            return (
              <div
                key={product.id}
                className="product-card"
                onClick={() => openProductModal(product)}
              >
                {/* Top Image Box with Strength Pill */}
                <div className="product-img-box">
                  <div className="strength-badge">
                    <Gauge size={13} className="text-emerald-light" />
                    <span>{product.strengthBadge}</span>
                  </div>

                  <div className="img-container">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={320}
                      height={240}
                      className="product-img"
                      priority
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="product-body">
                  <span className="prod-category-tag">{product.tag}</span>
                  <h3 className="prod-card-title">{product.name}</h3>

                  {/* Specs Box */}
                  <div className="specs-box">
                    <div className="spec-row">
                      <span className="spec-label">
                        <Ruler size={14} className="spec-icon" />
                        Dimensions:
                      </span>
                      <strong className="spec-value">{product.dimensions}</strong>
                    </div>

                    <div className="spec-row">
                      <span className="spec-label">Units / Sq.Ft:</span>
                      <strong className="spec-units">{product.unitsPerSqFt}</strong>
                    </div>
                  </div>

                  {/* Colors Row with Swatches */}
                  <div className="colors-section">
                    <span className="colors-header">
                      Colors: <strong>{currentColor}</strong>
                    </span>
                    <div className="swatches-row">
                      {product.colorVariants.map((c, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={(e) => handleColorSelect(product.id, c.name, e)}
                          className={`swatch-btn ${currentColor === c.name ? "active" : ""}`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                          aria-label={`Select ${c.name}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bottom Divider */}
                  <div className="card-divider" />

                  {/* Single Specifications Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openProductModal(product);
                    }}
                    className="specs-btn"
                  >
                    <SlidersHorizontal size={16} />
                    <span>Specifications</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Glassmorphism Expand / See More Button */}
        {filteredProducts.length > 3 && (
          <div className="expand-action-row">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="glass-see-more-btn"
              aria-expanded={isExpanded}
            >
              <span>
                {isExpanded
                  ? "Show Less Products"
                  : `See More Products (${filteredProducts.length - 3} More)`}
              </span>
              <ChevronDown
                size={18}
                className={`expand-chevron ${isExpanded ? "rotate-up" : ""}`}
              />
            </button>
          </div>
        )}

        {/* Specifications Modal Dialog */}
        {selectedProduct && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedProduct(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalTitle"
          >
            <div
              className="modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="modal-close-btn"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="modal-header">
                <span className="modal-category-badge">{selectedProduct.tag}</span>
                <h2 id="modalTitle" className="modal-title">
                  {selectedProduct.name}
                </h2>
              </div>

              {/* Modal 2-Column Body */}
              <div className="modal-grid">
                {/* Left Column: Image & Compressive Strength */}
                <div className="modal-left-col">
                  <div className="modal-img-card">
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      width={400}
                      height={300}
                      className="modal-product-img"
                    />
                  </div>

                  <div className="strength-card">
                    <strong>Compressive Strength:</strong> {selectedProduct.strengthFull}
                  </div>
                </div>

                {/* Right Column: Narrative, Spec Table & Colors */}
                <div className="modal-right-col">
                  <p className="modal-description">
                    {selectedProduct.description}
                  </p>

                  <div className="specs-table-box">
                    <div className="specs-table-row">
                      <span className="table-label">Dimensions (L x W x H)</span>
                      <strong className="table-value">{selectedProduct.dimensions}</strong>
                    </div>
                    <div className="specs-table-row">
                      <span className="table-label">Coverage Density</span>
                      <strong className="table-value">{selectedProduct.unitsPerSqFt} per Sq.Ft</strong>
                    </div>
                    <div className="specs-table-row">
                      <span className="table-label">Thickness Options</span>
                      <strong className="table-value">{selectedProduct.thicknessOptions}</strong>
                    </div>
                    <div className="specs-table-row">
                      <span className="table-label">Typical Applications</span>
                      <strong className="table-value">{selectedProduct.typicalApplications}</strong>
                    </div>
                  </div>

                  {/* Available Color Pigments */}
                  <div className="modal-colors-section">
                    <span className="modal-colors-title">Available Color Pigments:</span>
                    <div className="modal-color-pills-row">
                      {selectedProduct.colorVariants.map((c, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setModalColor(c.name)}
                          className={`modal-color-pill ${modalColor === c.name ? "active" : ""}`}
                        >
                          <span
                            className="pill-dot"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span>{c.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .products-section {
          background: #ffffff;
          position: relative;
        }

        .section-header-wrapper {
          margin-bottom: 48px;
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--primary-green-dark);
          background: var(--primary-green-subtle);
          padding: 5px 14px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(24, 152, 66, 0.2);
          margin-bottom: 12px;
        }

        .section-title {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--brand-black);
          line-height: 1.2;
          margin-bottom: 12px;
        }

        .section-desc {
          font-size: 1rem;
          color: var(--text-muted);
          max-width: 680px;
          line-height: 1.7;
          margin-bottom: 28px;
        }

        /* Filter Pills */
        .filter-nav-pills {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
        }

        .filter-pill {
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--stone-mid);
          background: var(--surface-offwhite);
          border: 1px solid var(--surface-border);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-pill:hover {
          color: var(--brand-black);
          border-color: var(--stone-light);
          background: #ffffff;
        }

        .filter-pill.active {
          color: #ffffff;
          background: var(--primary-green);
          border-color: var(--primary-green);
          box-shadow: 0 4px 12px rgba(24, 152, 66, 0.25);
        }

        /* Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        /* Glassmorphism See More Button */
        .expand-action-row {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
        }

        .glass-see-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 34px;
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
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .glass-see-more-btn:hover {
          background: rgba(255, 255, 255, 0.92);
          border-color: rgba(24, 152, 66, 0.4);
          color: var(--primary-green-dark);
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(24, 152, 66, 0.16),
                      inset 0 1px 2px rgba(255, 255, 255, 1);
        }

        .expand-chevron {
          transition: transform 0.3s ease;
          color: var(--primary-green);
        }

        .expand-chevron.rotate-up {
          transform: rotate(180deg);
        }

        /* Product Card */
        .product-card {
          background: #ffffff;
          border: 1px solid #0c0e12;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px -4px rgba(0, 0, 0, 0.12);
          border-color: var(--primary-green);
        }

        /* Image Box */
        .product-img-box {
          position: relative;
          width: 100%;
          height: 240px;
          background: #ffffff;
          padding: 24px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #f8fafc;
        }

        .strength-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: #1e293b;
          color: #22c55e;
          font-size: 0.76rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          z-index: 2;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }

        .text-emerald-light {
          color: #22c55e;
        }

        .img-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        :global(.product-img) {
          max-height: 190px !important;
          width: auto !important;
          max-width: 90% !important;
          object-fit: contain !important;
          transition: transform 0.4s ease;
        }

        .product-card:hover :global(.product-img) {
          transform: scale(1.05);
        }

        /* Body */
        .product-body {
          padding: 20px 22px 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .prod-category-tag {
          font-size: 0.74rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--primary-green);
          margin-bottom: 6px;
          display: block;
        }

        .prod-card-title {
          font-family: var(--font-heading);
          font-size: 1.18rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.35;
          margin-bottom: 14px;
          min-height: 48px;
        }

        /* Specs Box */
        .specs-box {
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          border-radius: 12px;
          padding: 12px 14px;
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .spec-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.84rem;
          gap: 8px;
        }

        .spec-label {
          color: #64748b;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .spec-value {
          color: #0f172a;
          font-weight: 700;
          text-align: right;
        }

        .spec-units {
          color: var(--primary-green-dark);
          font-weight: 800;
          text-align: right;
        }

        /* Colors Section */
        .colors-section {
          margin-bottom: 14px;
        }

        .colors-header {
          font-size: 0.84rem;
          color: #64748b;
          margin-bottom: 8px;
          display: block;
        }

        .colors-header strong {
          color: #0f172a;
          font-weight: 700;
        }

        .swatches-row {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .swatch-btn {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.12);
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0;
        }

        .swatch-btn:hover {
          transform: scale(1.15);
        }

        .swatch-btn.active {
          box-shadow: 0 0 0 2px #fff, 0 0 0 4px var(--primary-green);
          transform: scale(1.1);
        }

        .card-divider {
          border-top: 1px solid #f1f5f9;
          margin: 4px 0 16px 0;
        }

        /* Specifications Button */
        .specs-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--primary-green);
          border: 1px solid var(--primary-green);
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 700;
          border-radius: 12px;
          padding: 12px 18px;
          width: 100%;
          text-align: center;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(24, 152, 66, 0.22);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .specs-btn:hover {
          background: var(--primary-green-dark);
          border-color: var(--primary-green-dark);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(24, 152, 66, 0.35);
        }

        .specs-btn:active {
          transform: translateY(0);
          box-shadow: 0 2px 8px rgba(24, 152, 66, 0.2);
        }

        /* Modal Overlay */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(12, 14, 18, 0.65);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Modal Card */
        .modal-card {
          background: #ffffff;
          border-radius: 24px;
          max-width: 880px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          padding: 36px 38px;
          position: relative;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .modal-close-btn {
          position: absolute;
          top: 28px;
          right: 28px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          background: #e2e8f0;
          color: #0c0e12;
        }

        .modal-header {
          padding-right: 48px;
          margin-bottom: 24px;
        }

        .modal-category-badge {
          background: #ecfdf5;
          color: var(--primary-green-dark);
          font-size: 0.75rem;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 9999px;
          display: inline-block;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 6px;
        }

        .modal-title {
          font-family: var(--font-heading);
          font-size: 1.85rem;
          font-weight: 800;
          color: #0c0e12;
          margin: 0;
          line-height: 1.25;
        }

        /* Modal Grid */
        .modal-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 32px;
          align-items: start;
        }

        /* Modal Left Column */
        .modal-left-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .modal-img-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 28px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 260px;
        }

        :global(.modal-product-img) {
          max-height: 220px !important;
          width: auto !important;
          max-width: 90% !important;
          object-fit: contain !important;
        }

        .strength-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 14px 16px;
          text-align: center;
          font-size: 0.88rem;
          color: #334155;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }

        .strength-card strong {
          color: #0c0e12;
          font-weight: 700;
        }

        /* Modal Right Column */
        .modal-right-col {
          display: flex;
          flex-direction: column;
        }

        .modal-description {
          font-size: 0.94rem;
          color: #475569;
          line-height: 1.65;
          margin-bottom: 20px;
        }

        .specs-table-box {
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 22px;
          background: #ffffff;
        }

        .specs-table-row {
          border-bottom: 1px solid #e2e8f0;
          display: grid;
          grid-template-columns: 150px 1fr;
          padding: 12px 16px;
          font-size: 0.86rem;
          align-items: center;
          gap: 12px;
        }

        .specs-table-row:last-child {
          border-bottom: none;
        }

        .table-label {
          color: #64748b;
          font-weight: 600;
        }

        .table-value {
          color: #0f172a;
          font-weight: 700;
          line-height: 1.4;
        }

        /* Modal Colors */
        .modal-colors-section {
          margin-top: 4px;
        }

        .modal-colors-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
          display: block;
        }

        .modal-color-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .modal-color-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 9999px;
          font-size: 0.84rem;
          font-weight: 600;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-color-pill:hover {
          background: #f1f5f9;
          border-color: #cbd5e1;
        }

        .modal-color-pill.active {
          background: #ecfdf5;
          border-color: var(--primary-green);
          color: var(--primary-green-dark);
          box-shadow: 0 2px 6px rgba(24, 152, 66, 0.15);
        }

        .pill-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.12);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 22px;
          }
          .modal-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @media (max-width: 640px) {
          .products-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .section-title {
            font-size: clamp(1.75rem, 6.5vw, 2.2rem);
          }
          .section-desc {
            font-size: 0.95rem;
          }
          .filter-nav-pills {
            display: flex;
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            gap: 8px;
            margin: 18px -16px 28px -16px;
            padding: 4px 16px 8px 16px;
          }
          .filter-nav-pills::-webkit-scrollbar {
            display: none;
          }
          .filter-pill {
            flex-shrink: 0;
            white-space: nowrap;
            padding: 8px 16px;
            font-size: 0.82rem;
            min-height: 40px;
          }
          .specs-btn {
            padding: 12px 16px;
            font-size: 0.9rem;
            min-height: 44px;
          }
          .modal-overlay {
            padding: 10px;
          }
          .modal-card {
            padding: 22px 16px;
            border-radius: 18px;
            max-height: 92vh;
            width: 100%;
          }
          .modal-close-btn {
            top: 14px;
            right: 14px;
            width: 36px;
            height: 36px;
          }
          .modal-title {
            font-size: 1.3rem;
            padding-right: 36px;
          }
          .specs-table-row {
            grid-template-columns: 1fr;
            gap: 3px;
            padding: 10px 12px;
          }
          .modal-color-pills-row {
            gap: 6px;
          }
          .modal-color-pill {
            padding: 6px 12px;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 400px) {
          .section-title {
            font-size: 1.65rem;
          }
          .modal-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
}
