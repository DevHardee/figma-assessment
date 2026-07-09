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
import "./styles/base.css";

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />

      <div className="app-main">
        <TopBar />

        <main className="app-main__content">
          <ProjectHeader />
          <StatsRow />
          <ProjectTime used={12} total={20} />
          <ReportStatus analyzed={3} total={5} />

          <div className="dashboard-split">
            <TodaySessions />
            <CalendarWidget />
          </div>

          <InsightsRow />
        </main>
      </div>

      <ChatPanel />
    </div>
  );
}