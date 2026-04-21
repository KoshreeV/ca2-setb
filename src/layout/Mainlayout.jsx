import React from "react";
import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div style={{ width: "100%", maxWidth: "800px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <nav style={{ width: "100%", display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        <Link to="/activities" style={{ color: "blue", textDecoration: "underline" }}>Activities</Link>
        <Link to="/filter" style={{ color: "blue", textDecoration: "underline" }}>Filter</Link>
        <Link to="/stats" style={{ color: "blue", textDecoration: "underline" }}>Stats</Link>
      </nav>
      <main style={{ padding: "20px", width: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
