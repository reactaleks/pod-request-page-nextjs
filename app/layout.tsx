import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Pod Request Page - Front End Mentor",
  description: "Project created as part of front end mentor exercise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
