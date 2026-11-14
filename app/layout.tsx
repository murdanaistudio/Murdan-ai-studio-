
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Murdan AI Studio",
  description:
    "AI Creative Studio for Image Generation, Video Creation, and AI Assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
