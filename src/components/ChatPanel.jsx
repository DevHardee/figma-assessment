import React, { useState } from "react";
import { chatMessages, suggestedPrompts } from "../data/MockData";
import "../styles/ChatPanel.css"

function renderMessageText(text) {
  if (typeof text === "string") return text;
  return text.map((chunk, i) =>
    typeof chunk === "string" ? (
      <React.Fragment key={i}>{chunk}</React.Fragment>
    ) : (
      <span className="chat-message__highlight" key={i}>
        {chunk.highlight}
      </span>
    )
  );
}

export default function ChatPanel() {
  const [draft, setDraft] = useState("");

  return (
    <aside className="chat-panel">
      <div className="chat-panel__header">
        <div className="chat-panel__avatar">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="7" stroke="var(--color-accent)" strokeWidth="1.3" />
            <path d="M9 5.5v3.8l2.6 1.5" stroke="var(--color-accent)" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </div>
        <div className="chat-panel__title-block">
          <div className="chat-panel__title-row">
            <span className="chat-panel__title">Curator AI</span>
            <span className="chat-panel__live">
              <span className="dot dot--online" /> Live
            </span>
          </div>
          <span className="chat-panel__subtitle">Project assistant</span>
        </div>
        <button className="chat-panel__expand" aria-label="Expand chat">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 2H2v4M10 14h4v-4M14 2l-5 5M2 14l5-5"
              stroke="#98A2B3"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="chat-panel__notice">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="5.5" stroke="#98A2B3" strokeWidth="1.2" />
          <path d="M7 6.3v3.4M7 4.6v.1" stroke="#98A2B3" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        Answers grounded in this project's sessions, moments &amp; transcripts.
      </div>

      <div className="chat-panel__thread">
        {chatMessages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-message chat-message--${msg.role}`}
          >
            <div className="chat-message__bubble">
              {renderMessageText(msg.text)}
            </div>
            {msg.timestamp && (
              <span className="chat-message__timestamp">{msg.timestamp}</span>
            )}
          </div>
        ))}
      </div>

      <div className="chat-panel__suggested">
        <span className="chat-panel__suggested-label">SUGGESTED</span>
        {suggestedPrompts.map((prompt) => (
          <button className="chat-panel__suggested-item" key={prompt}>
            <span className="chat-panel__suggested-icon">+</span>
            {prompt}
          </button>
        ))}
      </div>

      <form
        className="chat-panel__composer"
        onSubmit={(e) => e.preventDefault()}
      >
        <button type="button" className="chat-panel__composer-icon" aria-label="Attach file">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10.5 4.5 5.8 9.2a2 2 0 0 0 2.8 2.8l4.7-4.7a3.3 3.3 0 0 0-4.7-4.7L3.9 7.4"
              stroke="#98A2B3"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <input
          className="chat-panel__composer-input"
          placeholder="Ask about this project..."
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <button type="button" className="chat-panel__composer-icon" aria-label="Voice input">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="6" y="2" width="4" height="7" rx="2" stroke="#98A2B3" strokeWidth="1.3" />
            <path d="M4 8a4 4 0 0 0 8 0M8 12v2" stroke="#98A2B3" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </button>
        <button type="submit" className="chat-panel__send" aria-label="Send message">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M2 7.5 13 2 8 13l-1.8-4.2L2 7.5Z" fill="#fff" />
          </svg>
        </button>
      </form>
    </aside>
  );
}