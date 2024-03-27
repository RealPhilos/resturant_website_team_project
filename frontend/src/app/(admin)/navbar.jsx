"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { AuthContext } from "../providers/auth";
import { useContext } from "react";

const navigationLinks = [
  {
    name: "Dashboard",
    href: "dashboard",
    access: ["Waiter", "Chef"],
  },
  {
    name: "Menus",
    href: "admin-menu",
    access: ["Waiter", "Chef"],
  },
  {
    name: "Orders",
    href: "admin-orders",
    access: ["Waiter", "Chef"],
  },
  {
    name: "Waiter",
    href: "admin-waiter",
    access: ["Waiter"],
  },
  {
    name: "Kitchen Staff",
    href: "admin-kitchenstaff",
    access: ["Chef"],
  },
  {
    name: "Tables",
    href: "admin-table",
    access: ["Waiter"],
  },
];

export default function NavBar() {
  const pathname = `/${usePathname().split("/")[1] || ""}`;
  const { user } = useContext(AuthContext);

  //Filter links based on user role
  const accessibleLinks = user
    ? navigationLinks.filter((link) => link.access.includes(user.role))
    : [];

  return (
    <nav className="fixed h-screen w-56 bg-gray-200">
      <ul className="py-8">
        {accessibleLinks.map((navlink, index) => {
          return (
            <li
              key={index}
              className={cn(
                "mb-8 leading-8",
                pathname == `/${navlink.href}` && " border-l-4 border-green-600"
              )}
            >
              <Link
                href={`/${navlink.href}`}
                className={`pl-6 font-semibold ${
                  pathname == navlink.href
                    ? "text-green-600"
                    : "text-gray-900 hover:text-gray-600"
                }`}
              >
                {navlink.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
