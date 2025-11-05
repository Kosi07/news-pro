import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "News Pro",
  description: "Your one-stop news-shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
