import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MockGPT",
  description: "A mock of the ChatGPT interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
