import type { Metadata } from "next";
import "./globals.css"; // Import global styles if needed
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Hamid Iqbal",
  description: "A modern portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body >
        <Navbar/>
        <main >
        {children}
        </main>

      </body>
    </html>
  );
}
