/*
AI Nudges panel.
Fetches from backend but stays decoupled so inference infra
can evolve independently.
*/

import { useEffect, useState } from "react";
import { fetchNudges } from "../api/nudges";

const FALLBACK_NUDGES = [
  {
    id: "fallback-1",
    title: "Maya needs a visual warm-up",
    description: "Start Algebra Foundations with a 5-minute fraction tiles demo to reduce errors.",
    type: "risk",
    badge: "Risk"
  },
  {
    id: "fallback-2",
    title: "Physics group pacing",
    description: "Group B is 1.5 sessions behind—consider swapping in async mini-labs.",
    type: "info",
    badge: "Info"
  },
  {
    id: "fallback-3",
    title: "Homework approvals",
    description: "8 submissions ready; batch approve after spot-checking 3 flagged attempts.",
    type: "action",
    badge: "Action"
  },
  {
    id: "fallback-4",
    title: "Cohort pacing drift",
    description: "SAT Math Sprint is trending 0.8 sessions behind—drop a micro-drill today.",
    type: "risk",
    badge: "Risk"
  }
];

function RightPanel() {
  const [nudges, setNudges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await fetchNudges();
        if (cancelled) return;
        setNudges(data);
      } catch (err) {
        console.error("Failed to load nudges", err);
        if (cancelled) return;
        setError("Unable to load nudges right now.");
        setNudges(FALLBACK_NUDGES);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const header = (
    <div className="nudge-card nudge-header-card" key="header">
      <div className="nudge-header">
        <span className="nudge-header-icon">💡</span>
        <h3 className="nudge-header-title">AI nudges</h3>
      </div>
      <p className="nudge-subtitle">Fast wins for today</p>
    </div>
  );

  return (
    <aside className="right-panel">
      {header}

      {loading && <div className="nudge-status">Loading nudges…</div>}
      {error && <div className="nudge-status nudge-error">{error}</div>}

      {nudges.map((nudge) => (
        <div key={nudge.id} className={`nudge-card nudge-${nudge.type}`}>
          <div className="nudge-title-bar">
            <h4 className="nudge-title">{nudge.title}</h4>
            {nudge.badge && <span className={`nudge-badge badge-${nudge.type}`}>{nudge.badge}</span>}
          </div>
          <p className="nudge-description">{nudge.description}</p>
        </div>
      ))}
    </aside>
  );
}

export default RightPanel;
