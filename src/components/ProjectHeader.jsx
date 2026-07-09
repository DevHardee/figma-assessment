import React from "react";
import "../styles/ProjectHeader.css";

export default function ProjectHeader() {
  return (
    <section className="project-header">
      <div>
        <h1 className="project-header__title">Mid-Market Onboarding Study</h1>
        <p className="project-header__subtitle">
          Drop-off in the first 5 minutes of signup{" "}
          <span className="project-header__dot">·</span> May 19, 2026 – Jun 11,
          2026
        </p>
      </div>

      <div className="project-header__actions">
        <button className="btn btn--outline">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="5.5" cy="5" r="2.2" stroke="#14161A" strokeWidth="1.2" />
            <circle cx="11" cy="6" r="1.8" stroke="#14161A" strokeWidth="1.2" />
            <path
              d="M2 13c.5-2.3 2-3.5 3.5-3.5S8.5 10.7 9 13"
              stroke="#14161A"
              strokeWidth="1.2"
            />
            <path
              d="M9.5 13c.4-1.8 1.6-2.8 2.5-2.8s2 .9 2.5 2.6"
              stroke="#14161A"
              strokeWidth="1.2"
            />
          </svg>
          Team
        </button>
        <button className="btn btn--accent">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6.2" stroke="#fff" strokeWidth="1.3" />
            <path d="M6.5 5.5 10.5 8l-4 2.5v-5Z" fill="#fff" />
          </svg>
          New session
        </button>
      </div>
    </section>
  );
}