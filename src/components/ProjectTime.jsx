import React from "react";
import { Clock } from "lucide-react";
import "../styles/ProjectTime.css";

export default function ProjectTime({ used = 12, total = 20 }) {
  const percent = Math.round((used / total) * 100);

  return (
    <section className="project-time">
      <div className="project-time__icon">
        <Clock size={20} color="var(--color-accent)" />
      </div>

      <div className="project-time__info">
        <span className="project-time__title">Project Time</span>
        <span className="project-time__subtitle">Allocated Time: {total} Hours</span>
      </div>

      <div className="project-time__track">
        <div className="project-time__fill" style={{ width: `${percent}%` }} />
        <span className="project-time__track-label">
          {used} out of {total} hours spent
        </span>
      </div>

      <div className="project-time__actions">
        <button className="btn btn--ghost-accent">Request More Time</button>
        <button className="btn btn--accent">Subscribe for more</button>
      </div>
    </section>
  );
}
