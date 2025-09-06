import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CyberSafe Community - Cybersecurity Awareness Campaign",
  description: "Learn about common cybersecurity threats and effective prevention methods to protect yourself and your community online.",
  keywords: ["cybersecurity", "awareness", "phishing", "malware", "online safety", "digital security"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-gray-50 font-sans">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}