import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav-bar";
import AuthProvider from "./providers/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oaxaca Restaurant",
  description: "Resturant App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NavBar />
          <div className="px-[13vw]">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
