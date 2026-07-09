import React from "react";
import { ArrowRight } from "lucide-react";
import { sentiment } from "../data/MockData";
import "../styles/InsightsRow.css";

export default function InsightsRow() {
  return (
    <section className="insights-row">
      <div className="card sentiment-card">
        <div className="card__header">
          <div>
            <h2 className="card__title">Sentiment</h2>
            <p className="card__subtitle">Across all completed moments</p>
          </div>
          <a className="card__link" href="#all-moments">
            View all moments <ArrowRight size={13} />
          </a>
        </div>

        <div className="sentiment-card__bar">
          <span
            className="sentiment-card__segment sentiment-card__segment--positive"
            style={{ width: `${sentiment.positive}%` }}
          />
          <span
            className="sentiment-card__segment sentiment-card__segment--neutral"
            style={{ width: `${sentiment.neutral}%` }}
          />
          <span
            className="sentiment-card__segment sentiment-card__segment--negative"
            style={{ width: `${sentiment.negative}%` }}
          />
        </div>

        <div className="sentiment-card__legend">
          <span><i className="legend-dot legend-dot--positive" /> Positive {sentiment.positive}%</span>
          <span><i className="legend-dot legend-dot--neutral" /> Neutral {sentiment.neutral}%</span>
          <span><i className="legend-dot legend-dot--negative" /> Negative {sentiment.negative}%</span>
        </div>
      </div>

      <div className="card topics-card">
        <div className="card__header">
          <div>
            <h2 className="card__title">Active topics</h2>
            <p className="card__subtitle">Sorted by moments tagged</p>
          </div>
          <a className="card__link" href="#topics">
            View topics <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
