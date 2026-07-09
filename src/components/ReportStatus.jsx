import React from "react";
import { ClipboardCheck, Lock } from "lucide-react";
import "../styles/ReportStatus.css";

export default function ReportStatus({ analyzed = 3, total = 5 }) {
  const percent = Math.round((analyzed / total) * 100);

  return (
    <section className="report-status">
      <div className="report-status__icon">
        <ClipboardCheck size={20} color="var(--color-purple)" />
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
            <div className="report-status__fill" style={{ width: `${percent}%` }} />
          </div>
          <span className="report-status__progress-label">
            {analyzed} of {total} sessions analyzed
          </span>
        </div>
      </div>

      <button className="report-status__locked" disabled>
        <Lock size={13} color="#98A2B3" />
        Locked
      </button>
    </section>
  );
}
