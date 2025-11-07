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
        className={`antialiased flex flex-col gap-8 items-center px-3 max-w-[1000px]`}
      >
        {children}
      </body>
    </html>
  );
}
