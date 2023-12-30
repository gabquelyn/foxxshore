import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const mon = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FoxxShore",
  description: "Petroleum and energy providing company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en text-[.9rem]">
      <body className={`${mon.className} relative`}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
