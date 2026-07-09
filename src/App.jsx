import React from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import ProjectHeader from "./components/ProjectHeader";
import StatsRow from "./components/StatsRow";
import ProjectTime from "./components/ProjectTime";
import ReportStatus from "./components/ReportStatus";
import TodaySessions from "./components/TodaySessions";
import CalendarWidget from "./components/CalendarWidget";
import InsightsRow from "./components/InsightsRow";
import ChatPanel from "./components/ChatPanel";
import "./styles/Base.css";

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />

      <TopBar />

      <div className="app-main">
        <div className="app-main__content">
          <div className="app-main__card">
            <ProjectHeader />
            <StatsRow />
            <ProjectTime used={12} total={20} />
            <ReportStatus analyzed={3} total={5} />

            <div className="dashboard-split">
              <TodaySessions />
              <CalendarWidget />
            </div>

            <InsightsRow />
          </div>
        </div>
      </div>

      <ChatPanel />
    </div>
  );
}
