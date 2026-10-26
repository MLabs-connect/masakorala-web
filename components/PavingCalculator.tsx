"use client";

import React, { useState } from "react";
import {
  Calculator,
  Boxes,
  Ruler,
  Sparkles,
  CircleDollarSign,
  Info,
} from "lucide-react";

export interface PaverConfig {
  id: string;
  name: string;
  thickness: string;
  unitsPerSqFt: number;
  estPricePerBlock: number; // LKR
  idealFor: string;
}

export const PAVER_OPTIONS: PaverConfig[] = [
  {
    id: "uni-80",
    name: "Uni Paver 80mm [Semi Rough]",
    thickness: "80mm",
    unitsPerSqFt: 3.7,
    estPricePerBlock: 78,
    idealFor: "Heavy Cargo, Container Yards, Warehouses",
  },
  {
    id: "uni-60",
    name: "Uni Paver 60mm [Smooth]",
    thickness: "60mm",
    unitsPerSqFt: 3.7,
    estPricePerBlock: 64,
    idealFor: "Residential Driveways, Commercial Forecourts",
  },
  {
    id: "arrow-60",
    name: "Arrow Paver 60mm [Smooth]",
    thickness: "60mm",
    unitsPerSqFt: 3.5,
    estPricePerBlock: 68,
    idealFor: "Directional Forecourts, Plazas, Modern Estates",
  },
  {
    id: "grass-80",
    name: "Grass Paver 80mm [Permeable]",
    thickness: "80mm",
    unitsPerSqFt: 3.7,
    estPricePerBlock: 92,
    idealFor: "Eco-Resorts, Grass Parking, Green Pathways",
  },
  {
    id: "rhombus-60",
    name: "Rhombus Paver 60mm [3D Geometric]",
    thickness: "60mm",
    unitsPerSqFt: 2.25,
    estPricePerBlock: 95,
    idealFor: "3D Isometric Plazas, Architectural Courtyards",
  },
  {
    id: "wing-60",
    name: "Wing Paver 60mm [Smooth]",
    thickness: "60mm",
    unitsPerSqFt: 3.4,
    estPricePerBlock: 72,
    idealFor: "Contoured Driveways, Pedestrian Malls",
  },
  {
    id: "washed-eliana",
    name: "Washed Eliana 60mm [Textured]",
    thickness: "60mm",
    unitsPerSqFt: 9.0,
    estPricePerBlock: 38,
    idealFor: "Luxury Walkways, Pool Decks, Villa Entrances",
  },
];

export default function PavingCalculator() {
  const [unitMode, setUnitMode] = useState<"sqft" | "sqm">("sqft");
  const [areaInput, setAreaInput] = useState<number>(1200);
  const [lengthInput, setLengthInput] = useState<number>(40);
  const [widthInput, setWidthInput] = useState<number>(30);
  const [inputMethod, setInputMethod] = useState<"total" | "dimensions">("total");
  const [selectedPaverId, setSelectedPaverId] = useState<string>("uni-80");

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

  // Exact Stones & Rough Cost calculations
  const totalBlocks = Math.ceil(validArea * currentPaver.unitsPerSqFt);
  const roughStoneCost = totalBlocks * currentPaver.estPricePerBlock;

  const handleAreaChange = (val: number) => {
    setAreaInput(val);
  };

  const handleDimensionsChange = (l: number, w: number) => {
    setLengthInput(l);
    setWidthInput(w);
  };

  return (
    <section id="calculator" className="section-padding calculator-section">
      <div className="container">
        {/* Header */}
        <div className="calc-header text-center">
          <div className="section-tag">
            <Calculator size={14} className="text-emerald" />
            <span>Material Estimator</span>
          </div>
          <h2 className="section-title">
            Paving Block & Quantity Calculator
          </h2>
          <p className="section-desc mx-auto">
            Plan your driveway, parking yard, or commercial project. Select your paving profile
            and specify dimensions to get instantaneous block quantities and rough cost estimates.
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

              {/* Units & Method Switcher */}
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
                    value={areaInput || ""}
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
                      value={lengthInput || ""}
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
                      value={widthInput || ""}
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
            </div>

            {/* Step 2: Choose Paver Profile */}
            <div className="calc-step-group step-2-group">
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
          </div>

          {/* Results Column (Right) */}
          <div className="calc-results-card">
            <div>
              <div className="results-header">
                <div className="results-tag">
                  <Sparkles size={12} className="text-emerald-light" />
                  Instant Estimation
                </div>
                <h3 className="results-title">Calculation Summary</h3>
                <p className="results-area-confirm">
                  For <strong>{validArea.toFixed(0)} Sq.Ft</strong> (
                  {(validArea / 10.7639).toFixed(1)} m²) using{" "}
                  <span className="highlight-paver">{currentPaver.name}</span>.
                </p>
              </div>

              {/* Primary Stones Quantity Metric */}
              <div className="result-metric-box main-metric">
                <div className="metric-icon-wrap">
                  <Boxes size={24} className="text-emerald-light" />
                </div>
                <div className="metric-details">
                  <div className="metric-value">{totalBlocks.toLocaleString()}</div>
                  <div className="metric-label">Total Paving Stones Needed</div>
                  <div className="metric-subtext">
                    Formula: {validArea.toFixed(0)} sq.ft × {currentPaver.unitsPerSqFt} blocks/sq.ft
                  </div>
                </div>
              </div>

              {/* Roughly Cost for Stones */}
              <div className="result-metric-box cost-metric">
                <div className="metric-icon-wrap">
                  <CircleDollarSign size={24} className="text-emerald-light" />
                </div>
                <div className="metric-details">
                  <div className="metric-value cost-value">
                    LKR {roughStoneCost.toLocaleString()}
                  </div>
                  <div className="metric-label">Rough Estimated Stone Cost</div>
                  <div className="metric-subtext">
                    Approx. guide at LKR {currentPaver.estPricePerBlock} / block (ex-factory rate)
                  </div>
                </div>
              </div>

              {/* Profile Details Bar */}
              <div className="result-profile-specs">
                <div className="profile-spec-item">
                  <span className="spec-item-label">Profile</span>
                  <strong className="spec-item-val">{currentPaver.name}</strong>
                </div>
                <div className="profile-spec-divider" />
                <div className="profile-spec-item">
                  <span className="spec-item-label">Thickness</span>
                  <strong className="spec-item-val">{currentPaver.thickness}</strong>
                </div>
                <div className="profile-spec-divider" />
                <div className="profile-spec-item">
                  <span className="spec-item-label">Coverage</span>
                  <strong className="spec-item-val">{currentPaver.unitsPerSqFt} / sq.ft</strong>
                </div>
              </div>
            </div>

            {/* Advisory Note */}
            <div className="results-note-box">
              <Info size={15} className="note-icon" />
              <span>
                Estimate reflects rough ex-factory paver quantities. Actual units may vary slightly
                depending on site geometry and edge trimming.
              </span>
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

        .text-emerald {
          color: var(--primary-green);
        }

        .text-emerald-light {
          color: #22c55e;
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
        }

        .calc-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 36px;
          align-items: stretch;
        }

        /* Controls Card */
        .calc-controls-card {
          background: var(--surface-offwhite);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-xl);
          padding: 32px;
          display: flex;
          flex-direction: column;
        }

        .calc-step-group {
          margin-bottom: 28px;
          padding-bottom: 26px;
          border-bottom: 1px solid var(--surface-border);
        }

        .step-2-group {
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
          margin-bottom: 0;
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
          margin-bottom: 0;
        }

        .dimensions-inputs .input-field-wrapper {
          flex: 1;
        }

        .dim-times {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--stone-mid);
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
          cursor: pointer;
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

        /* Results Card (Right) */
        .calc-results-card {
          background: linear-gradient(145deg, #14171d 0%, #0c0e12 100%);
          color: #ffffff;
          border-radius: var(--radius-xl);
          padding: 36px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .results-header {
          margin-bottom: 24px;
        }

        .results-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #4ade80;
          margin-bottom: 8px;
        }

        .results-title {
          font-family: var(--font-heading);
          font-size: 1.7rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .results-area-confirm {
          font-size: 0.88rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        .highlight-paver {
          color: #4ade80;
          font-weight: 600;
        }

        /* Metric Result Boxes */
        .result-metric-box {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 20px 22px;
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 16px;
          transition: all 0.25s ease;
        }

        .result-metric-box.main-metric {
          background: rgba(24, 152, 66, 0.14);
          border-color: rgba(74, 222, 128, 0.35);
        }

        .result-metric-box.cost-metric {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .metric-icon-wrap {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .metric-details {
          display: flex;
          flex-direction: column;
        }

        .metric-value {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .cost-value {
          color: #4ade80;
        }

        .metric-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: #e2e8f0;
          margin-top: 4px;
        }

        .metric-subtext {
          font-size: 0.74rem;
          color: #94a3b8;
          margin-top: 2px;
        }

        /* Profile Details Bar */
        .result-profile-specs {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          align-items: center;
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 14px 16px;
          margin-top: 8px;
          margin-bottom: 24px;
        }

        .profile-spec-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .profile-spec-divider {
          width: 1px;
          height: 32px;
          background: rgba(255, 255, 255, 0.1);
        }

        .spec-item-label {
          font-size: 0.7rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .spec-item-val {
          font-size: 0.82rem;
          color: #ffffff;
          margin-top: 3px;
        }

        /* Advisory Note */
        .results-note-box {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 0.78rem;
          color: #94a3b8;
          line-height: 1.5;
        }

        :global(.note-icon) {
          flex-shrink: 0;
          color: #4ade80;
          margin-top: 2px;
        }

        @media (max-width: 992px) {
          .calc-grid {
            grid-template-columns: 1fr;
            gap: 28px;
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
          .metric-value {
            font-size: 1.65rem;
          }
          .result-profile-specs {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .profile-spec-divider {
            display: none;
          }
          .profile-spec-item {
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
