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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
        <main
          className="
            relative isolate overflow-hidden
            min-h-screen flex items-start justify-center p-6
            bg-gradient-to-br from-black via-gray-900 to-black

            before:content-[''] before:absolute before:inset-0
            before:bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.15),transparent_60%)]
            before:pointer-events-none before:-z-10

            after:content-[''] after:absolute after:inset-0
            after:bg-[radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.15),transparent_60%)]
            after:pointer-events-none after:-z-10
          "
        >
          <div className="relative z-10 w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
