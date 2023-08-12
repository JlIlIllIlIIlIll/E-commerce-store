import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const font = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "E-commerce store built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
