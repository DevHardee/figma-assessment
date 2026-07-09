import React from "react";
import { Sparkles, Bell, ChevronDown, ChevronRight } from "lucide-react";
import adminImage from "../assets/admin-image.png";
import "../styles/TopBar.css";

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar__breadcrumb">
        <span className="topbar__crumb-muted">Dashboard</span>
        <ChevronRight size={14} color="#98A2B3" />
        <span className="topbar__crumb-active">Moments</span>
      </div>

      <div className="topbar__actions">
        <button className="topbar__chat-btn">
          <Sparkles size={14} />
          Chat with AI
        </button>

        <button className="topbar__icon-btn" aria-label="Notifications">
          <span className="topbar__badge">4</span>
          <Bell size={18} color="#475467" />
        </button>

        <div className="topbar__user">
          <div className="topbar__user-info">
            <span className="topbar__user-name">John Doe</span>
            <span className="topbar__user-role">Admin</span>
          </div>
          <div className="topbar__avatar">
            <img src={adminImage} alt="John Doe avatar" />
            <span className="topbar__avatar-status" />
          </div>
          <ChevronDown size={12} color="#667085" />
        </div>
      </div>
    </header>
  );
}
