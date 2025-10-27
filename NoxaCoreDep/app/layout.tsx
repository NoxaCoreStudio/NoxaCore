import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NoxaCore Studio",
  description: "High-performance digital assets for developers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}