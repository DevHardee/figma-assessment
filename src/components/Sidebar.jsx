import React, { useState } from "react";
import {
  LayoutGrid, ShieldCheck, Table2, Radio, Columns3,
  Image, UserSquare2, Info, FileText, User,
  ChevronDown, Target,
} from "lucide-react";
import curatorLogo from "../assets/curator-logo.png";
import "../styles/Sidebar.css";

const NAV_ITEMS = [
  { key: "home",     label: "Home",               icon: LayoutGrid },
  { key: "admin",    label: "Administration",      icon: ShieldCheck,  collapsible: true },
  { key: "sessions", label: "Sessions",            icon: Table2 },
  { key: "live",     label: "Live Sessions",       icon: Radio,        collapsible: true },
  { key: "pm-1",     label: "Project Management",  icon: Columns3,     collapsible: true },
  {
    key: "pm-2",
    label: "Project Management",
    icon: Columns3,
    collapsible: true,
    active: true,
    children: [
      { key: "dashboard",    label: "Project Dashboard", icon: Info,      active: true },
      { key: "setup",        label: "Project Set Up",    icon: Info },
      { key: "sessions-sub", label: "Sessions",          icon: FileText },
      { key: "users",        label: "User Management",   icon: User },
    ],
  },
  { key: "analysis", label: "Analysis and Editing", icon: Image,       collapsible: true },
  { key: "account",  label: "Account",              icon: UserSquare2, collapsible: true },
];

export default function Sidebar() {
  const [openKey, setOpenKey] = useState("pm-2");

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <img src={curatorLogo} alt="Curator Video Research" className="sidebar__logo-img" />
        <button className="sidebar__collapse" aria-label="Collapse sidebar">
          <Target size={16} />
        </button>
      </div>

      <nav className="sidebar__nav">
        {NAV_ITEMS.map((item) => {
          const IconComp = item.icon;
          return (
            <div key={item.key} className="sidebar__group">
              <button
                className={`sidebar__item${item.active ? " sidebar__item--active" : ""}`}
                onClick={() =>
                  item.collapsible &&
                  setOpenKey((prev) => (prev === item.key ? null : item.key))
                }
              >
                <span className="sidebar__item-icon">
                  <IconComp size={17} />
                </span>
                <span className="sidebar__item-label">{item.label}</span>
                {item.collapsible && (
                  <span className={`sidebar__chevron${openKey === item.key ? " sidebar__chevron--open" : ""}`}>
                    <ChevronDown size={14} />
                  </span>
                )}
              </button>

              {item.children && openKey === item.key && (
                <div className="sidebar__submenu">
                  {item.children.map((child) => {
                    const ChildIcon = child.icon;
                    return (
                      <button
                        key={child.key}
                        className={`sidebar__subitem${child.active ? " sidebar__subitem--active" : ""}`}
                      >
                        <ChildIcon size={14} />
                        <span>{child.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
