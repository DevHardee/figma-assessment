import React from "react";
import { Users, CirclePlay } from "lucide-react";
import "../styles/ProjectHeader.css";

export default function ProjectHeader() {
  return (
    <section className="project-header">
      <div>
        <h1 className="project-header__title">Mid-Market Onboarding Study</h1>
        <p className="project-header__subtitle">
          Drop-off in the first 5 minutes of signup{" "}
          <span className="project-header__dot">·</span> May 19, 2026 – Jun 11, 2026
        </p>
      </div>

      <div className="project-header__actions">
        <button className="btn btn--outline">
          <Users size={15} />
          Team
        </button>
        <button className="btn btn--accent">
          <CirclePlay size={15} />
          New session
        </button>
      </div>
    </section>
  );
}
