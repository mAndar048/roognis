import { NavLink } from "react-router-dom";

/*
Static navigation with icons.
Easy to permission-gate later via backend roles.
*/

const menuItems = [
  { icon: "📅", label: "Today", path: "/" },
  { icon: "👥", label: "Classes & Cohorts", path: "/classes" },
  { icon: "📊", label: "Progress & Evaluation", path: "/progress" },
  { icon: "📝", label: "Homework Manager", path: "/homework" },
  { icon: "✏️", label: "Assessment Builder", path: "/assessment" },
  { icon: "🔄", label: "Revision Planner", path: "/revision" },
  { icon: "🎨", label: "Visual Teaching Tools", path: "/visual-tools" },
  { icon: "🎮", label: "Gamification Controls", path: "/gamification" },
  { icon: "📦", label: "Projects & Cases", path: "/projects" },
  { icon: "📈", label: "Reports", path: "/reports" },
  { icon: "⚙️", label: "Automation & Rules", path: "/automation" },
  { icon: "⚡", label: "Tutor Settings", path: "/settings" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Tutor Command</h2>

      {menuItems.map(item => (
        <NavLink
          key={item.label}
          to={item.path}
          className="sidebar-link"
        >
          <span className="sidebar-icon">{item.icon}</span>
          <span className="sidebar-label">{item.label}</span>
        </NavLink>
      ))}
    </aside>
  );
}

export default Sidebar;
