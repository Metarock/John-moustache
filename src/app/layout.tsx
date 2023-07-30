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
        <div className="relative">
          <Navbar />
          <div className="h-full min-h-[calc(100vh-5.5rem-284px)] lg:min-h-[calc(100vh-5.5rem-328px)]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
              <div className="bg-white rounded-2xl">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
