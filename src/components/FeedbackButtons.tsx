"use client";

import React from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa6";

type Feedback = "up" | "down" | null;

export default function FeedbackButtons({
  storageKey = "cve_feedback",
  className,
  pageId = "cve-26206-2025",
}: {
  storageKey?: string;
  className?: string;
  pageId?: string;
}) {
  const [choice, setChoice] = React.useState<Feedback>(null);
  const [submitted, setSubmitted] = React.useState(false);
  const [counts, setCounts] = React.useState<{ up: number; down: number; total: number } | null>(null);

  React.useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved === "up" || saved === "down") {
        setChoice(saved);
        setSubmitted(true);
      }
    } catch {}
    // Load server counts
    fetch(`/api/feedback?page=${encodeURIComponent(pageId)}`)
      .then(r => r.json())
      .then(d => setCounts({ up: d.up ?? 0, down: d.down ?? 0, total: d.total ?? 0 }))
      .catch(() => setCounts(null))
  }, [storageKey, pageId]);

  const submit = (value: Feedback) => () => {
    if (submitted) return;
    setChoice(value);
    setSubmitted(true);
    try {
      if (value) window.localStorage.setItem(storageKey, value);
    } catch {}
    // Persist to server
    fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: pageId, vote: value })
    }).then(r => r.json()).then(d => setCounts({ up: d.up ?? 0, down: d.down ?? 0, total: d.total ?? 0 })).catch(() => {})
  };

  const base =
    "inline-flex items-center gap-2 border px-4 py-2.5 text-sm transition-colors";
  const idle = "border-white/10 bg-white/5 text-zinc-200 hover:text-white";
  const active = "border-fuchsia-400/40 bg-fuchsia-500/10 text-white";

  return (
    <div className={className}>
      <button
        onClick={submit("up")}
        disabled={submitted}
        className={`${base} ${choice === "up" ? active : idle} ${submitted ? "opacity-80 cursor-not-allowed" : "rounded-md"}`}
        aria-pressed={choice === "up"}
        aria-label="Vote up"
      >
        <FaRegThumbsUp /> Vote Up
      </button>
      <button
        onClick={submit("down")}
        disabled={submitted}
        className={`${base} ${choice === "down" ? active : idle} ${submitted ? "opacity-80 cursor-not-allowed" : "rounded-md"} ml-3`}
        aria-pressed={choice === "down"}
        aria-label="Vote down"
      >
        <FaRegThumbsDown /> Vote Down
      </button>
      <div className="mt-2 text-xs text-zinc-400">
        {submitted ? 'Thanks for your feedback.' : null}
        {counts ? (
          <span className="ml-2">Up: {counts.up} · Down: {counts.down} · Total: {counts.total}</span>
        ) : null}
      </div>
    </div>
  );
}


