import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SidebarContextProvider from "@/context/SidebarContext";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "MKGNRL",
  description: "Miko Generale Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${inter.className} antialiased`}
      >
        <SidebarContextProvider>
          {children}
        </SidebarContextProvider>
      </body>
    </html>
  );
}
