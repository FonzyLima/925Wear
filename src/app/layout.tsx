import "./globals.css";
import "./fonts.css"
import type { Metadata } from "next";
import Nav from "@/components/Shared/Nav";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "@/components/Shared/Footer";

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
    <>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <html lang="en">
        <body className="font-primary">
          <Nav />
          {children}
          <div className="mb-[350px] -z-30 w-full max-[560px]:mb-[400px]"></div>
          <Footer />
        </body>
      </html>
    </>
  );
}
