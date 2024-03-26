"use client";

import { useContext } from "react";
import NavBar from "./navbar";
import { AuthContext } from "../providers/auth";
import { redirect, useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  if (!user) {
    router.replace("/");
  }

  return (
    <>
      <section className="h-full">
        <NavBar />
        <div className="ml-56 h-screen overflow-y-auto bg-gray-50 px-10 ">
          <main>{children}</main>
        </div>
      </section>
    </>
  );
}
