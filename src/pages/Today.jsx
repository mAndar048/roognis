export default function Today() {
  return (
    <div className="page-content">
      <div className="section-header">
        <h1>Gamification Controls</h1>
        <p>Tutor-only toggles to drive motivation without distracting students.</p>
      </div>

      <div className="controls-card">
        <h2>Feature toggles</h2>
        <p className="subtitle">Adjust incentives per cohort.</p>

        <div className="toggle-item">
          <div className="toggle-label">
            <h3>Points</h3>
            <p>Award points for on-time submissions</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" checked />
            <span></span>
          </label>
        </div>

        <div className="toggle-item">
          <div className="toggle-label">
            <h3>Streaks</h3>
            <p>Celebrate consecutive homework streaks</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" />
            <span></span>
          </label>
        </div>

        <div className="toggle-item">
          <div className="toggle-label">
            <h3>Badges</h3>
            <p>Unlock badges for consistent mastery</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" checked />
            <span></span>
          </label>
        </div>
      </div>

      <div className="controls-card">
        <div className="rules-header">
          <h2>Rules editor</h2>
          <p>Trigger → action → channel.</p>
          <span className="presets-badge">3 presets</span>
        </div>

        <div className="rule-item">
          <h3>Streak reminder 1</h3>
          <button className="edit-btn">Edit</button>
        </div>
      </div>

      <div className="action-buttons">
        <button className="btn btn-primary">+ Add rule</button>
        <button className="btn btn-secondary">⚙️ Auto-tune</button>
      </div>
    </div>
  );
}
