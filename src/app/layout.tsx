import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Shared/Nav";

export const metadata: Metadata = {
  title: "925Wear",
  description: "Official Website for 925 Wear",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
