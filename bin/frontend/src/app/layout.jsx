import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Test Restaurant",
  description: "Resturant App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="px-[13vw]">{children}</div>
      </body>
    </html>
  );
}
