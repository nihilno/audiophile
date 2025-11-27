import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import ScrollToTop from "@/components/global/scroll-to-top";
import { manropeFont } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Audiophile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manropeFont.className} text-[15px] antialiased`}>
        <main className="flex min-h-dvh flex-col">
          <Header />
          <ScrollToTop />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
