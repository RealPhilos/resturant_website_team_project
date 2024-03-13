"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigationLinks = [
  {
    name: "Dashboard",
    href: "/",
    access: [],
  },
  {
    name: "Menus",
    href: "admin-menu",
    access: [],
  },
  {
    name: "Orders",
    href: "orders",
    access: [],
  },
];

export default function NavBar() {
  //   const user = useSession().data?.user;
  //   const role = user?.role;

  //   const filteredNavlinks = navlinks.filter((navlink) =>
  //     navlink.access.includes(role!),
  //   );

  const pathname = `/${usePathname().split("/")[2] || ""}`;

  return (
    <nav className="fixed h-screen w-56 bg-gray-200">
      <ul className="py-8">
        {navigationLinks.map((navlink, index) => {
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
