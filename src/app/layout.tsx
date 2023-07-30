import Navbar from "@/features/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Test",
  description: "John's test moustache republic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed h-screen w-screen">
          <div className="relative">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
