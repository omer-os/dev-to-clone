import React from "react";
import Navbar from "./Navbar";

export default function NavBarLayout({ children }) {
  return (
    <div className="text-white">
      <Navbar />
      {children}
    </div>
  );
}
