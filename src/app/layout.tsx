import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sri Chaitanya Admin Dashboard",
  description: "Teacher and admin dashboard for Sri Chaitanya institutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body
        className="min-h-full bg-[#F5F8FC] font-sans text-[#071B52]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
