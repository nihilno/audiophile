import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
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
        <main className="mx-auto flex min-h-dvh max-w-[1920px] flex-col">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
