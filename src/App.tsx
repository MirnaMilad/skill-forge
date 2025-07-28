import { type JSX } from "react";
import "./App.css";
import ContentLayout from "./layouts/MainLayouts/ContentLayout/ContentLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import AddProject from "./pages/Projects/components/AddProject";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContentLayout />}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<Profile />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/add" element={<AddProject />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
