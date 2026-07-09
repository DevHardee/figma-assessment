import React, { useState } from "react";
import { Clock, Maximize2, Info, Paperclip, Mic, SendHorizonal, Plus } from "lucide-react";
import { chatMessages, suggestedPrompts } from "../data/MockData";
import "../styles/ChatPanel.css";

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
          <Clock size={16} color="var(--color-accent)" />
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
          <Maximize2 size={15} color="#98A2B3" />
        </button>
      </div>

      <div className="chat-panel__notice">
        <Info size={14} color="#98A2B3" style={{ flexShrink: 0, marginTop: 1 }} />
        Answers grounded in this project's sessions, moments &amp; transcripts.
      </div>

      <div className="chat-panel__thread">
        {chatMessages.map((msg) => (
          <div key={msg.id} className={`chat-message chat-message--${msg.role}`}>
            {msg.role === "assistant" && (
              <div className="chat-message__avatar">
                <Clock size={13} color="var(--color-accent)" />
              </div>
            )}
            <div className="chat-message__content">
              <div className="chat-message__bubble">
                {renderMessageText(msg.text)}
              </div>
              {msg.timestamp && (
                <span className="chat-message__timestamp">{msg.timestamp}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="chat-panel__suggested">
        <span className="chat-panel__suggested-label">SUGGESTED</span>
        {suggestedPrompts.map((prompt) => (
          <button className="chat-panel__suggested-item" key={prompt}>
            <Plus size={14} className="chat-panel__suggested-icon" />
            {prompt}
          </button>
        ))}
      </div>

      <form className="chat-panel__composer" onSubmit={(e) => e.preventDefault()}>
        <button type="button" className="chat-panel__composer-icon" aria-label="Attach file">
          <Paperclip size={15} color="#98A2B3" />
        </button>
        <input
          className="chat-panel__composer-input"
          placeholder="Ask about this project..."
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <button type="button" className="chat-panel__composer-icon" aria-label="Voice input">
          <Mic size={15} color="#98A2B3" />
        </button>
        <button type="submit" className="chat-panel__send" aria-label="Send message">
          <SendHorizonal size={14} color="#fff" />
        </button>
      </form>
    </aside>
  );
}
