import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Today from "../pages/Today";
import Progress from "../pages/Progress";
import Homework from "../pages/Homework";
import Assessment from "../pages/Assessment";
import Reports from "../pages/Reports";
import Placeholder from "../pages/Placeholder";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Today />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/homework" element={<Homework />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/reports" element={<Reports />} />

        {/* future routes */}
        <Route path="*" element={<Placeholder />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
