"use client";

import React, { useState } from "react";
import {
  Calculator,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  HelpCircle,
  Truck,
  Boxes,
  Ruler,
  FileCheck,
  RefreshCw,
} from "lucide-react";

interface PaverConfig {
  id: string;
  name: string;
  thickness: string;
  unitsPerSqFt: number;
  estPricePerBlock: number; // LKR
  idealFor: string;
}

const PAVER_OPTIONS: PaverConfig[] = [
  {
    id: "uni-80",
    name: "Uni Paver 80mm (Heavy Traffic)",
    thickness: "80mm",
    unitsPerSqFt: 3.7,
    estPricePerBlock: 78,
    idealFor: "Warehouses, Container Yards, Commercial Car Parks",
  },
  {
    id: "uni-60",
    name: "Uni Paver 60mm (Standard)",
    thickness: "60mm",
    unitsPerSqFt: 3.7,
    estPricePerBlock: 64,
    idealFor: "Residential Driveways, Light Commercial",
  },
  {
    id: "washed-eliana",
    name: "Washed Eliana 60mm (Textured)",
    thickness: "60mm",
    unitsPerSqFt: 9.0,
    estPricePerBlock: 38,
    idealFor: "Luxury Walkways, Pool Decks, Villa Entrances",
  },
  {
    id: "arrow-60",
    name: "Arrow Paver 60mm (Smooth)",
    thickness: "60mm",
    unitsPerSqFt: 3.5,
    estPricePerBlock: 68,
    idealFor: "Retail Forecourts, Modern Compounds",
  },
  {
    id: "grass-80",
    name: "Eco Grass Paver 80mm (Permeable)",
    thickness: "80mm",
    unitsPerSqFt: 0.58,
    estPricePerBlock: 340,
    idealFor: "Green Parking, Eco Resorts, Fire Lanes",
  },
  {
    id: "rhombus-60",
    name: "Rhombus 3D Paver 60mm",
    thickness: "60mm",
    unitsPerSqFt: 2.25,
    estPricePerBlock: 95,
    idealFor: "Architectural Courtyards, Designer Plazas",
  },
];

export default function PavingCalculator() {
  const [unitMode, setUnitMode] = useState<"sqft" | "sqm">("sqft");
  const [areaInput, setAreaInput] = useState<number>(1200);
  const [lengthInput, setLengthInput] = useState<number>(40);
  const [widthInput, setWidthInput] = useState<number>(30);
  const [inputMethod, setInputMethod] = useState<"total" | "dimensions">("total");
  const [selectedPaverId, setSelectedPaverId] = useState<string>("uni-80");
  const [includeWastage, setIncludeWastage] = useState<boolean>(true);
  const [includeSandBed, setIncludeSandBed] = useState<boolean>(true);
  const [includeLayingService, setIncludeLayingService] = useState<boolean>(false);

  // Selected configuration
  const currentPaver =
    PAVER_OPTIONS.find((p) => p.id === selectedPaverId) || PAVER_OPTIONS[0];

  // Calculate area in Sq.Ft for calculations
  const effectiveAreaSqFt =
    inputMethod === "dimensions"
      ? lengthInput * widthInput * (unitMode === "sqm" ? 10.7639 : 1)
      : unitMode === "sqm"
      ? areaInput * 10.7639
      : areaInput;

  const validArea = Math.max(0, effectiveAreaSqFt || 0);

  // Calculations
  const wastageMultiplier = includeWastage ? 1.05 : 1.0;
  const rawBlockCount = validArea * currentPaver.unitsPerSqFt;
  const totalBlocks = Math.ceil(rawBlockCount * wastageMultiplier);

  // Pallet estimates (average 400 blocks per pallet for standard, or 50 for grass blocks)
  const blocksPerPallet = currentPaver.id === "grass-80" ? 50 : 400;
  const palletCount = Math.ceil(totalBlocks / blocksPerPallet);

  // Bedding Sand estimate (1 cube per ~200 sq.ft at 50mm depth)
  const sandCubes = (validArea / 200).toFixed(1);

  // Estimated Material Costs (in LKR)
  const materialCost = totalBlocks * currentPaver.estPricePerBlock;
  const sandBedCost = includeSandBed ? parseFloat(sandCubes) * 14000 : 0;
  const layingLaborCost = includeLayingService ? validArea * 35 : 0;
  const totalEstimatedCost = materialCost + sandBedCost + layingLaborCost;

  const handleAreaChange = (val: number) => {
    setAreaInput(val);
  };

  const handleDimensionsChange = (l: number, w: number) => {
    setLengthInput(l);
    setWidthInput(w);
  };

  // WhatsApp Message Payload
  const generateWhatsAppMessage = () => {
    const text = `*New Paving Project Inquiry - Masakorala Holdings*
-----------------------------------------
- *Project Area:* ${validArea.toFixed(0)} Sq.Ft (${(validArea / 10.7639).toFixed(1)} Sq.M)
- *Selected Paver:* ${currentPaver.name} (${currentPaver.thickness})
- *Estimated Blocks:* ${totalBlocks.toLocaleString()} Units (includes ${includeWastage ? "5% cutting allowance" : "no cutting allowance"})
- *Estimated Pallets:* ~${palletCount} Pallets
- *Quarry Sand Bedding:* ${includeSandBed ? `${sandCubes} Cubes required` : "Excluded"}
- *Turnkey Laying Service:* ${includeLayingService ? "Required" : "Not Required"}
- *Estimated Budget:* LKR ${totalEstimatedCost.toLocaleString()} (Approx)
-----------------------------------------
Please provide an official quotation, delivery timeframe to our site, and sample availability.`;

    return `https://wa.me/94706972703?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="calculator" className="section-padding calculator-section">
      <div className="container">
        {/* Header */}
        <div className="calc-header text-center">
          <div className="section-tag">
            <Calculator size={14} />
            <span>Interactive Estimator Tool</span>
          </div>
          <h2 className="section-title">
            Paving Block & Material Quantity Calculator
          </h2>
          <p className="section-desc mx-auto">
            Plan your residential driveway, commercial plaza, or industrial warehouse
            flooring. Calculate exact block quantities, sand bedding requirements, and instant estimates.
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="calc-grid">
          {/* Controls Column (Left) */}
          <div className="calc-controls-card">
            {/* Step 1: Area Input */}
            <div className="calc-step-group">
              <div className="step-label-row">
                <span className="step-badge">Step 1</span>
                <label className="step-title">Specify Your Project Area</label>
              </div>

              {/* Units Switcher */}
              <div className="unit-toggle-row">
                <div className="toggle-pill">
                  <button
                    type="button"
                    onClick={() => setUnitMode("sqft")}
                    className={`pill-btn ${unitMode === "sqft" ? "active" : ""}`}
                  >
                    Square Feet (Sq.Ft)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUnitMode("sqm")}
                    className={`pill-btn ${unitMode === "sqm" ? "active" : ""}`}
                  >
                    Square Meters (m²)
                  </button>
                </div>

                <div className="method-pill">
                  <button
                    type="button"
                    onClick={() => setInputMethod("total")}
                    className={`sub-pill ${inputMethod === "total" ? "active" : ""}`}
                  >
                    Direct Area
                  </button>
                  <button
                    type="button"
                    onClick={() => setInputMethod("dimensions")}
                    className={`sub-pill ${inputMethod === "dimensions" ? "active" : ""}`}
                  >
                    Length × Width
                  </button>
                </div>
              </div>

              {/* Input Fields */}
              {inputMethod === "total" ? (
                <div className="input-field-wrapper">
                  <input
                    type="number"
                    min="1"
                    max="500000"
                    value={areaInput}
                    onChange={(e) => handleAreaChange(Number(e.target.value))}
                    className="calc-input"
                    placeholder="Enter total area..."
                  />
                  <span className="input-unit">
                    {unitMode === "sqft" ? "Sq.Ft" : "m²"}
                  </span>
                </div>
              ) : (
                <div className="dimensions-inputs">
                  <div className="input-field-wrapper">
                    <input
                      type="number"
                      min="1"
                      value={lengthInput}
                      onChange={(e) =>
                        handleDimensionsChange(Number(e.target.value), widthInput)
                      }
                      className="calc-input"
                      placeholder="Length"
                    />
                    <span className="input-unit">
                      {unitMode === "sqft" ? "Ft" : "m"} (L)
                    </span>
                  </div>
                  <span className="dim-times">×</span>
                  <div className="input-field-wrapper">
                    <input
                      type="number"
                      min="1"
                      value={widthInput}
                      onChange={(e) =>
                        handleDimensionsChange(lengthInput, Number(e.target.value))
                      }
                      className="calc-input"
                      placeholder="Width"
                    />
                    <span className="input-unit">
                      {unitMode === "sqft" ? "Ft" : "m"} (W)
                    </span>
                  </div>
                </div>
              )}

              <div className="quick-presets">
                <span className="preset-label">Quick Presets:</span>
                <button
                  type="button"
                  onClick={() => {
                    setInputMethod("total");
                    setAreaInput(500);
                  }}
                  className="preset-btn"
                >
                  500 sq.ft (Villa Car Porch)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setInputMethod("total");
                    setAreaInput(2500);
                  }}
                  className="preset-btn"
                >
                  2,500 sq.ft (Commercial Driveway)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setInputMethod("total");
                    setAreaInput(15000);
                  }}
                  className="preset-btn"
                >
                  15,000 sq.ft (Factory Yard)
                </button>
              </div>
            </div>

            {/* Step 2: Choose Paver Pattern */}
            <div className="calc-step-group">
              <div className="step-label-row">
                <span className="step-badge">Step 2</span>
                <label className="step-title">Select Paving Block Profile</label>
              </div>

              <div className="paver-selection-grid">
                {PAVER_OPTIONS.map((paver) => (
                  <button
                    key={paver.id}
                    type="button"
                    onClick={() => setSelectedPaverId(paver.id)}
                    className={`paver-option-card ${
                      selectedPaverId === paver.id ? "selected" : ""
                    }`}
                  >
                    <div className="paver-card-top">
                      <strong className="paver-opt-name">{paver.name}</strong>
                      <span className="paver-opt-badge">{paver.thickness}</span>
                    </div>
                    <div className="paver-opt-meta">
                      <span>{paver.unitsPerSqFt} blocks / sq.ft</span>
                      <span className="paver-opt-ideal">{paver.idealFor}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-on Options */}
            <div className="calc-step-group">
              <div className="step-label-row">
                <span className="step-badge">Step 3</span>
                <label className="step-title">Project Engineering Parameters</label>
              </div>

              <div className="checkboxes-stack">
                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    checked={includeWastage}
                    onChange={(e) => setIncludeWastage(e.target.checked)}
                    className="calc-checkbox"
                  />
                  <div>
                    <strong>Include 5% Cutting & Wastage Margin (Recommended)</strong>
                    <p className="check-sub">
                      Accounts for edge trimming along curves, boundary kerbs, and inspection chambers.
                    </p>
                  </div>
                </label>

                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    checked={includeSandBed}
                    onChange={(e) => setIncludeSandBed(e.target.checked)}
                    className="calc-checkbox"
                  />
                  <div>
                    <strong>Calculate 50mm Compacted Quarry Sand Bedding</strong>
                    <p className="check-sub">
                      Estimates the required volume of screened quarry dust bed prior to block laying.
                    </p>
                  </div>
                </label>

                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    checked={includeLayingService}
                    onChange={(e) => setIncludeLayingService(e.target.checked)}
                    className="calc-checkbox"
                  />
                  <div>
                    <strong>Include Professional Masakorala Laying & Compaction Crew</strong>
                    <p className="check-sub">
                      Includes sub-base leveling, screeding, interlocking assembly, and plate vibrator finishing.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Results Column (Right) */}
          <div className="calc-results-card">
            <div className="results-header">
              <div className="results-tag">Material Bill of Quantities (BOQ)</div>
              <h3 className="results-title">Project Estimation Summary</h3>
              <p className="results-area-confirm">
                Based on <strong>{validArea.toFixed(0)} Sq.Ft</strong> (
                {(validArea / 10.7639).toFixed(1)} m²) coverage for{" "}
                <span className="highlight-paver">{currentPaver.name}</span>.
              </p>
            </div>

            {/* Primary Highlight Numbers */}
            <div className="metrics-cards-grid">
              <div className="metric-box main-metric">
                <div className="m-icon">
                  <Boxes size={22} />
                </div>
                <div>
                  <div className="m-val">{totalBlocks.toLocaleString()}</div>
                  <div className="m-unit">Total Paving Blocks</div>
                </div>
              </div>

              <div className="metric-box">
                <div className="m-icon">
                  <Truck size={22} />
                </div>
                <div>
                  <div className="m-val">~{palletCount}</div>
                  <div className="m-unit">Pallets (Transport Estimate)</div>
                </div>
              </div>

              {includeSandBed && (
                <div className="metric-box">
                  <div className="m-icon">
                    <Ruler size={22} />
                  </div>
                  <div>
                    <div className="m-val">{sandCubes} Cubes</div>
                    <div className="m-unit">Quarry Dust Bedding</div>
                  </div>
                </div>
              )}
            </div>

            {/* Cost Breakdown Table */}
            <div className="cost-breakdown-box">
              <h4 className="cost-breakdown-title">Estimated Budget Allocation:</h4>
              <div className="breakdown-list">
                <div className="breakdown-item">
                  <span>Precast Paver Blocks ({totalBlocks.toLocaleString()} pcs)</span>
                  <strong>LKR {materialCost.toLocaleString()}</strong>
                </div>

                {includeSandBed && (
                  <div className="breakdown-item">
                    <span>Bedding Sand / Quarry Dust (~{sandCubes} cubes)</span>
                    <strong>LKR {sandBedCost.toLocaleString()}</strong>
                  </div>
                )}

                {includeLayingService && (
                  <div className="breakdown-item">
                    <span>Turnkey Laying, Jointing & Compaction</span>
                    <strong>LKR {layingLaborCost.toLocaleString()}</strong>
                  </div>
                )}

                <div className="breakdown-item total-item">
                  <div>
                    <strong>Estimated Investment Range</strong>
                    <span className="tax-notice">*Ex-factory estimate, subject to site location & transport</span>
                  </div>
                  <div className="total-cost-num">
                    LKR {totalEstimatedCost.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* Guaranteed Quotation CTAs */}
            <div className="results-action-box">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-100 calc-whatsapp-btn"
              >
                <MessageCircle size={20} />
                <span>Send to WhatsApp for Formal Quotation</span>
              </a>

              <p className="guarantee-note">
                <CheckCircle2 size={15} className="text-emerald-500" />
                <span>
                  Our technical officers will verify site measurements, arrange free samples,
                  and deliver factory-direct discounts for projects over 5,000 sq.ft.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .calculator-section {
          background: #ffffff;
          border-top: 1px solid var(--surface-border);
          border-bottom: 1px solid var(--surface-border);
        }

        .calc-header {
          margin-bottom: 48px;
        }

        .calc-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 36px;
          align-items: start;
        }

        /* Controls Card */
        .calc-controls-card {
          background: var(--surface-offwhite);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-xl);
          padding: 32px;
        }

        .calc-step-group {
          margin-bottom: 32px;
          padding-bottom: 28px;
          border-bottom: 1px solid var(--surface-border);
        }

        .calc-step-group:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        .step-label-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .step-badge {
          background: var(--primary-green);
          color: #ffffff;
          font-size: 0.74rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
        }

        .step-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--brand-black);
        }

        /* Unit and Method Toggle Pills */
        .unit-toggle-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 18px;
        }

        .toggle-pill,
        .method-pill {
          display: inline-flex;
          background: #ffffff;
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-full);
          padding: 3px;
        }

        .pill-btn,
        .sub-pill {
          padding: 6px 14px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--stone-mid);
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
        }

        .pill-btn.active,
        .sub-pill.active {
          background: var(--brand-black);
          color: #ffffff;
        }

        /* Input styling */
        .input-field-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: 14px;
        }

        .calc-input {
          width: 100%;
          padding: 14px 18px;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--brand-black);
          background: #ffffff;
          border: 2px solid var(--surface-border);
          border-radius: var(--radius-md);
          outline: none;
          transition: border-color 0.2s ease;
        }

        .calc-input:focus {
          border-color: var(--primary-green);
        }

        .input-unit {
          position: absolute;
          right: 18px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--stone-mid);
          pointer-events: none;
        }

        .dimensions-inputs {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .dim-times {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--stone-mid);
        }

        .quick-presets {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .preset-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--stone-mid);
        }

        .preset-btn {
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--primary-green-dark);
          background: #ffffff;
          border: 1px solid rgba(24, 152, 66, 0.25);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
        }

        .preset-btn:hover {
          background: var(--primary-green-subtle);
          border-color: var(--primary-green);
        }

        /* Paver Selection Grid */
        .paver-selection-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .paver-option-card {
          background: #ffffff;
          border: 2px solid var(--surface-border);
          border-radius: var(--radius-md);
          padding: 14px;
          text-align: left;
          transition: all 0.2s ease;
        }

        .paver-option-card:hover {
          border-color: rgba(24, 152, 66, 0.4);
          transform: translateY(-2px);
        }

        .paver-option-card.selected {
          border-color: var(--primary-green);
          background: rgba(24, 152, 66, 0.04);
          box-shadow: 0 4px 12px rgba(24, 152, 66, 0.12);
        }

        .paver-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 6px;
        }

        .paver-opt-name {
          font-size: 0.88rem;
          color: var(--brand-black);
          line-height: 1.3;
        }

        .paver-opt-badge {
          font-size: 0.7rem;
          font-weight: 700;
          background: #e2e8f0;
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          color: var(--stone-dark);
        }

        .paver-option-card.selected .paver-opt-badge {
          background: var(--primary-green-subtle);
          color: var(--primary-green-dark);
        }

        .paver-opt-meta {
          font-size: 0.76rem;
          color: var(--stone-mid);
        }

        .paver-opt-ideal {
          display: block;
          margin-top: 4px;
          font-size: 0.72rem;
          color: var(--stone-light);
        }

        /* Checkboxes */
        .checkboxes-stack {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .checkbox-row {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          cursor: pointer;
        }

        .calc-checkbox {
          width: 18px;
          height: 18px;
          accent-color: var(--primary-green);
          margin-top: 3px;
          flex-shrink: 0;
        }

        .checkbox-row strong {
          display: block;
          font-size: 0.88rem;
          color: var(--brand-black);
        }

        .check-sub {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.4;
          margin-top: 2px;
        }

        /* Results Card (Right) */
        .calc-results-card {
          background: linear-gradient(145deg, #12151c 0%, #0c0e12 100%);
          color: #ffffff;
          border-radius: var(--radius-xl);
          padding: 36px;
          position: sticky;
          top: 100px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
        }

        .results-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #4ade80;
          margin-bottom: 6px;
        }

        .results-title {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .results-area-confirm {
          font-size: 0.85rem;
          color: #94a3b8;
          margin-bottom: 24px;
        }

        .highlight-paver {
          color: #4ade80;
          font-weight: 600;
        }

        .metrics-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-bottom: 24px;
        }

        .metric-box {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .metric-box.main-metric {
          background: rgba(24, 152, 66, 0.15);
          border-color: rgba(74, 222, 128, 0.35);
        }

        .m-icon {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4ade80;
          flex-shrink: 0;
        }

        .m-val {
          font-family: var(--font-heading);
          font-size: 1.7rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.1;
        }

        .m-unit {
          font-size: 0.8rem;
          color: #94a3b8;
          font-weight: 500;
        }

        /* Cost Breakdown Table */
        .cost-breakdown-box {
          background: rgba(0, 0, 0, 0.3);
          border-radius: var(--radius-md);
          padding: 18px;
          margin-bottom: 24px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .cost-breakdown-title {
          font-size: 0.84rem;
          color: #cbd5e1;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .breakdown-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .breakdown-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.82rem;
          color: #94a3b8;
        }

        .breakdown-item strong {
          color: #ffffff;
        }

        .breakdown-item.total-item {
          padding-top: 14px;
          margin-top: 4px;
          border-top: 1px dashed rgba(255, 255, 255, 0.15);
          align-items: flex-end;
        }

        .breakdown-item.total-item strong {
          font-size: 0.92rem;
          color: #ffffff;
          display: block;
        }

        .tax-notice {
          font-size: 0.7rem;
          color: #64748b;
          display: block;
        }

        .total-cost-num {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 800;
          color: #4ade80;
        }

        .results-action-box {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .calc-whatsapp-btn {
          padding: 15px;
          font-size: 0.98rem;
        }

        .guarantee-note {
          display: flex;
          gap: 8px;
          align-items: flex-start;
          font-size: 0.78rem;
          color: #94a3b8;
          line-height: 1.45;
        }

        .text-emerald-500 {
          color: #10b981;
        }

        .w-100 {
          width: 100%;
        }

        @media (max-width: 992px) {
          .calc-grid {
            grid-template-columns: 1fr;
          }
          .calc-results-card {
            position: static;
          }
        }

        @media (max-width: 640px) {
          .paver-selection-grid {
            grid-template-columns: 1fr;
          }
          .calc-controls-card {
            padding: 20px;
          }
          .calc-results-card {
            padding: 24px 20px;
          }
        }
      `}</style>
    </section>
  );
}
