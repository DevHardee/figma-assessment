import React from "react";
import { stats } from "../data/MockData";
import "../styles/StatsRow.css";

export default function StatsRow() {
  return (
    <section className="stats-row">
      {stats.map((stat) => (
        <div className="stat-card" key={stat.label}>
          <span className="stat-card__label">{stat.label}</span>
          <span className="stat-card__value">{stat.value}</span>
          <span className="stat-card__caption">{stat.caption}</span>
        </div>
      ))}
    </section>
  );
}