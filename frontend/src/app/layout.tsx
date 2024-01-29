import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StoreProvider } from "@/store/StoreProvider";
import { Toaster } from "react-hot-toast";
import SideMenu from "@/components/SideMenu";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dressify",
  description: "Dressify is a E-commerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black relative`}>
        <StoreProvider>
          <Navbar />
          <div className="pt-16">{children}</div>
          <Toaster />
          <Footer />
          <div className=" top-[70%] right-0 fixed z-10">
            <SideMenu />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
