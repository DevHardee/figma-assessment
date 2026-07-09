import React, { useState } from "react";
import "../styles/Sidebar.css";

const NAV_ITEMS = [
  { key: "home", label: "Home", icon: "grid" },
  { key: "admin", label: "Administration", icon: "shield", collapsible: true },
  { key: "sessions", label: "Sessions", icon: "table" },
  { key: "live", label: "Live Sessions", icon: "broadcast", collapsible: true },
  { key: "pm-1", label: "Project Management", icon: "board", collapsible: true },
  {
    key: "pm-2",
    label: "Project Management",
    icon: "board",
    collapsible: true,
    active: true,
    children: [
      { key: "dashboard", label: "Project Dashboard", icon: "info", active: true },
      { key: "setup", label: "Project Set Up", icon: "info" },
      { key: "sessions-sub", label: "Sessions", icon: "doc" },
      { key: "users", label: "User Management", icon: "user" },
    ],
  },
  { key: "analysis", label: "Analysis and Editing", icon: "image", collapsible: true },
  { key: "account", label: "Account", icon: "user-square", collapsible: true },
];

function Icon({ name }) {
  const common = { width: 18, height: 18, viewBox: "0 0 18 18", fill: "none" };
  switch (name) {
    case "grid":
      return (
        <svg {...common}>
          <rect x="2" y="2" width="6" height="6" rx="1.2" fill="currentColor" />
          <rect x="10" y="2" width="6" height="6" rx="1.2" fill="currentColor" />
          <rect x="2" y="10" width="6" height="6" rx="1.2" fill="currentColor" />
          <rect x="10" y="10" width="6" height="6" rx="1.2" fill="currentColor" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path
            d="M9 2 3 4v4c0 4 2.5 6.5 6 8 3.5-1.5 6-4 6-8V4L9 2Z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      );
    case "table":
      return (
        <svg {...common}>
          <rect x="2" y="3" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M2 7.5h14M7 3v12" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "broadcast":
      return (
        <svg {...common}>
          <circle cx="9" cy="9" r="2" fill="currentColor" />
          <path d="M5.5 5.5a5 5 0 0 0 0 7M12.5 5.5a5 5 0 0 1 0 7" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "board":
      return (
        <svg {...common}>
          <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M6.5 2v14M11.5 2v14" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "image":
      return (
        <svg {...common}>
          <rect x="2" y="3" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="6.5" cy="7.5" r="1.3" fill="currentColor" />
          <path d="M2 13l4-4 3 3 3-4 4 5" stroke="currentColor" strokeWidth="1.4" fill="none" />
        </svg>
      );
    case "user-square":
      return (
        <svg {...common}>
          <rect x="2" y="2" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="9" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M4.5 14c1-2 2.8-3 4.5-3s3.5 1 4.5 3" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "info":
      return (
        <svg {...common} width="14" height="14" viewBox="0 0 14 14">
          <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
          <path d="M7 6.3v3.4M7 4.6v.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "doc":
      return (
        <svg {...common} width="14" height="14" viewBox="0 0 14 14">
          <rect x="2.5" y="1.5" width="9" height="11" rx="1" stroke="currentColor" strokeWidth="1.2" />
          <path d="M4.5 5h5M4.5 7.5h5M4.5 10h3" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case "user":
      return (
        <svg {...common} width="14" height="14" viewBox="0 0 14 14">
          <circle cx="7" cy="4.8" r="2.3" stroke="currentColor" strokeWidth="1.2" />
          <path d="M2.5 11.5c1-2.3 3-3.4 4.5-3.4s3.5 1.1 4.5 3.4" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Sidebar() {
  const [openKey, setOpenKey] = useState("pm-2");

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__logo">C</div>
        <div className="sidebar__brand-text">
          <span className="sidebar__brand-name">CURATOR</span>
          <span className="sidebar__brand-sub">VIDEO RESEARCH</span>
        </div>
        <button className="sidebar__collapse" aria-label="Collapse sidebar">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </button>
      </div>

      <nav className="sidebar__nav">
        {NAV_ITEMS.map((item) => (
          <div key={item.key} className="sidebar__group">
            <button
              className={`sidebar__item${item.active ? " sidebar__item--active" : ""}`}
              onClick={() =>
                item.collapsible &&
                setOpenKey((prev) => (prev === item.key ? null : item.key))
              }
            >
              <span className="sidebar__item-icon">
                <Icon name={item.icon} />
              </span>
              <span className="sidebar__item-label">{item.label}</span>
              {item.collapsible && (
                <span
                  className={`sidebar__chevron${
                    openKey === item.key ? " sidebar__chevron--open" : ""
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M3 4.5 6 7.5 9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </button>

            {item.children && openKey === item.key && (
              <div className="sidebar__submenu">
                {item.children.map((child) => (
                  <button
                    key={child.key}
                    className={`sidebar__subitem${
                      child.active ? " sidebar__subitem--active" : ""
                    }`}
                  >
                    <Icon name={child.icon} />
                    <span>{child.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}