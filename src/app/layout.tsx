import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavigationBar } from "./ui/NavigationBar/NavigationBar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amdev Academy",
  description: "Learn and master the art of development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
        <main className="min-h-screen bg-black flex items-start justify-center p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
