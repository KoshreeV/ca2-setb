import React from "react";
import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <nav style={{ padding: "20px", borderBottom: "1px solid #ccc", display: "flex", gap: "20px" }}>
        <Link to="/activities">Activities</Link>
        <Link to="/filter">Filter</Link>
        <Link to="/stats">Stats</Link>
      </nav>
      <main style={{ padding: "20px" }}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
