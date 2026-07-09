import React from "react";
import "../styles/ReportStatus.css";

export default function ReportStatus({ analyzed = 3, total = 5 }) {
  const percent = Math.round((analyzed / total) * 100);

  return (
    <section className="report-status">
      <div className="report-status__icon">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="4" y="3" width="12" height="14" rx="2" stroke="var(--color-purple)" strokeWidth="1.4" />
          <path d="M7.5 8.5 9 10l3.5-4" stroke="var(--color-purple)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="report-status__body">
        <div className="report-status__title-row">
          <span className="report-status__title">Final research report</span>
          <span className="report-status__pill">
            <span className="report-status__pill-dot" />
            Compiling
          </span>
        </div>
        <p className="report-status__desc">
          Curator AI is analyzing sessions as they complete. The report unlocks
          once all {total} sessions have ended.
        </p>
        <div className="report-status__progress">
          <div className="report-status__track">
            <div
              className="report-status__fill"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="report-status__progress-label">
            {analyzed} of {total} sessions analyzed
          </span>
        </div>
      </div>

      <button className="report-status__locked" disabled>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <rect x="3" y="6" width="8" height="6" rx="1.2" stroke="#98A2B3" strokeWidth="1.2" />
          <path d="M4.8 6V4.5a2.2 2.2 0 0 1 4.4 0V6" stroke="#98A2B3" strokeWidth="1.2" />
        </svg>
        Locked
      </button>
    </section>
  );
}