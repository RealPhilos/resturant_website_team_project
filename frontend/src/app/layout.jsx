import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./providers/auth";
import { Toaster } from "@/components/ui/toaster";

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
          <div>{children}</div>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
