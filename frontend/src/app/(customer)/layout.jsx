import React from "react";
import NavBar from "../components/nav-bar";

export default function CustomerLayout({ children }) {
  return (
    <div>
      <NavBar />
      <div className="px-[13vw]">{children}</div>
    </div>
  );
}
