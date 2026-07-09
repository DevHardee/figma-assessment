import React from "react";
import "../styles/TopBar.css";

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar__breadcrumb">
        <span className="topbar__crumb-muted">Dashboard</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M5 3.5 8.5 7 5 10.5"
            stroke="#98A2B3"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="topbar__crumb-active">Moments</span>
      </div>

      <div className="topbar__actions">
        <button className="topbar__chat-btn">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1.5 8.2 5.5l4 1.2-4 1.2-1.2 4-1.2-4-4-1.2 4-1.2L7 1.5Z" fill="#fff" />
          </svg>
          Chat with AI
        </button>

        <button className="topbar__icon-btn" aria-label="Notifications">
          <span className="topbar__badge">4</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M9 2.5c-2 0-3.5 1.6-3.5 3.6v2.3c0 .5-.2 1-.6 1.4l-.7.8c-.5.6-.1 1.5.7 1.5h8.2c.8 0 1.2-.9.7-1.5l-.7-.8c-.4-.4-.6-.9-.6-1.4V6.1c0-2-1.5-3.6-3.5-3.6Z"
              stroke="#475467"
              strokeWidth="1.3"
            />
            <path d="M7.5 14a1.5 1.5 0 0 0 3 0" stroke="#475467" strokeWidth="1.3" />
          </svg>
        </button>

        <div className="topbar__user">
          <div className="topbar__user-info">
            <span className="topbar__user-name">John Doe</span>
            <span className="topbar__user-role">Admin</span>
          </div>
          <div className="topbar__avatar">
            <img
              src="https://i.pravatar.cc/64?img=13"
              alt="John Doe avatar"
            />
            <span className="topbar__avatar-status" />
          </div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M3 4.5 6 7.5 9 4.5"
              stroke="#667085"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}