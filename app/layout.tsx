import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marvel Logistics & Auto",
  description:
    "Premier car dealership in Ghana offering new, used and freshly imported vehicles. Quality cars, flexible financing, and exceptional customer service.",
  icons: {
    icon: "https://res.cloudinary.com/dshe5kflb/image/upload/v1771844735/MAlogo_tew3ln.jpg",
    apple:
      "https://res.cloudinary.com/dshe5kflb/image/upload/v1771844735/MAlogo_tew3ln.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
