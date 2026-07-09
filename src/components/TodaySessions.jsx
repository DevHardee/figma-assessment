import React from "react";
import { todaySessions } from "../data/MockData";
import "../styles/TodaySessions.css";

function MetaIcon({ type }) {
  if (type === "zoom")
    return (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <rect x="1" y="2.5" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.1" />
        <path d="M8 5l3-1.5v5L8 7V5Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      </svg>
    );
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1a3.5 3.5 0 0 1 3.5 3.5C9.5 7.5 6 11 6 11S2.5 7.5 2.5 4.5A3.5 3.5 0 0 1 6 1Z" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="6" cy="4.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export default function TodaySessions() {
  return (
    <section className="today-sessions card">
      <div className="card__header">
        <div>
          <h2 className="card__title">Today's sessions</h2>
          <p className="card__subtitle">Thursday, June 4 · 3 scheduled</p>
        </div>
        <a className="card__link" href="#all-sessions">
          View all
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 6h6M6.5 3.5 9 6l-2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <ul className="today-sessions__list">
        {todaySessions.map((session) => {
          const isZoom = session.meta.toLowerCase().startsWith("zoom");
          const metaType = isZoom ? "zoom" : "pin";
          return (
            <li
              key={session.id}
              className={`session-row${session.status === "live" ? " session-row--live" : ""}`}
            >
              <span className="session-row__time">{session.time}</span>

              <div className="session-row__body">
                <span className="session-row__title">{session.title}</span>
                <span className="session-row__meta">
                  <MetaIcon type={metaType} />
                  {session.meta}
                </span>
              </div>

              {session.status === "live" && (
                <span className="session-row__badge session-row__badge--live">
                  <span className="dot dot--live" />
                  Live now
                </span>
              )}
              {session.status === "upcoming" && (
                <span className="session-row__badge session-row__badge--time">
                  {session.statusLabel}
                </span>
              )}
              {session.status === "scheduled" && (
                <span className="session-row__badge session-row__badge--muted">
                  {session.statusLabel}
                </span>
              )}

              <button
                className={`session-row__cta${
                  session.action === "View"
                    ? " session-row__cta--link"
                    : session.action === "Start"
                    ? " session-row__cta--outline"
                    : ""
                }`}
              >
                {session.action}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
