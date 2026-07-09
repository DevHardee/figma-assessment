import React from "react";
import { Video, MapPin, ArrowRight } from "lucide-react";
import { todaySessions } from "../data/MockData";
import "../styles/TodaySessions.css";

export default function TodaySessions() {
  return (
    <section className="today-sessions card">
      <div className="card__header">
        <div>
          <h2 className="card__title">Today's sessions</h2>
          <p className="card__subtitle">Thursday, June 4 · 3 scheduled</p>
        </div>
        <a className="card__link" href="#all-sessions">
          View all <ArrowRight size={13} />
        </a>
      </div>

      <ul className="today-sessions__list">
        {todaySessions.map((session) => {
          const isZoom = session.meta.toLowerCase().startsWith("zoom");
          return (
            <li
              key={session.id}
              className={`session-row${session.status === "live" ? " session-row--live" : ""}`}
            >
              <span className="session-row__time">{session.time}</span>

              <div className="session-row__body">
                <span className="session-row__title">{session.title}</span>
                <span className="session-row__meta">
                  {isZoom ? <Video size={12} /> : <MapPin size={12} />}
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
