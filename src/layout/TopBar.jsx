/*
Global top bar with search, status, and user profile.
Search later wires to backend search index.
Profile button routes to user service.
*/

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <span className="topbar-live-badge">Live</span>
        <span className="topbar-timezone">GMT-5</span>
        <input
          className="search-input"
          placeholder="Search classes, students, rules"
        />
      </div>

      <div className="topbar-right">
        <button className="topbar-notification-btn">🔔</button>
        <div className="profile">
          <div className="profile-avatar">MR</div>
          <div className="profile-info">
            <p className="profile-name">Marina Ross</p>
            <p className="profile-subjects">Algebra · Physics · Critical Writing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
