import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import RightPanel from "./RightPanel";
import { Outlet } from "react-router-dom";

/*
Root shell:
- Sidebar never unmounts
- TopBar global
- Middle swaps via routing
- RightPanel isolated (AI later)
*/

function MainLayout() {
  return (
    <div className="app-shell">
      <Sidebar />

      <div className="main-column">
        <TopBar />

        <div className="content-area">
          <Outlet />
        </div>
      </div>

      <RightPanel />
    </div>
  );
}

export default MainLayout;
