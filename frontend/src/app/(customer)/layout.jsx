import React from "react";
import NavBar from "../components/nav-bar";
import Footer from "@/app/components/footer";

export default function CustomerLayout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <div className="px-[13vw]" style={{ flex: '1' }}>{children}</div>
      <Footer />
    </div>
  );
}