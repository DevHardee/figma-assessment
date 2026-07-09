import React from "react";
import { ArrowRight } from "lucide-react";
import { calendar } from "../data/MockData";
import "../styles/CalendarWidget.css";

export default function CalendarWidget() {
  return (
    <section className="card calendar-widget">
      <div className="card__header">
        <div>
          <h2 className="card__title">{calendar.month}</h2>
          <p className="card__subtitle">Project timeline</p>
        </div>
        <a className="card__link" href="#full-calendar">
          Full calendar <ArrowRight size={13} />
        </a>
      </div>

      <div className="calendar-widget__grid calendar-widget__grid--head">
        {calendar.days.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>

      {calendar.weeks.map((week, wi) => (
        <div className="calendar-widget__grid" key={wi}>
          {week.map((day, di) => {
            if (day === null) return <span key={di} />;
            const isToday = day === calendar.today;
            const isScheduled = calendar.scheduled.includes(day);
            return (
              <div key={di} className="calendar-widget__cell">
                <span className={`calendar-widget__day${isToday ? " calendar-widget__day--today" : ""}`}>
                  {day}
                </span>
                {isScheduled && <span className="calendar-widget__dot" />}
              </div>
            );
          })}
        </div>
      ))}

      <div className="calendar-widget__legend">
        <span className="calendar-widget__dot" />
        Session scheduled
      </div>
    </section>
  );
}
