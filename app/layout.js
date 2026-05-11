import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import BackgroundEffect from "@/app/components/BackgroundEffect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Azim Usmanov",
  description: "Personal website of Azim Usmanov.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-[#ededed]">
        <BackgroundEffect />
        <Navbar />
        <main className="flex-1 pt-[73px] pb-14">{children}</main>
        <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#1e1830] bg-black px-8 py-4 text-xs text-[#525252] font-mono">
          © 2026 AU
        </footer>
      </body>
    </html>
  );
}
