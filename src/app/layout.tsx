import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Giftass",
  description: "Nicolas Alves",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="eye-svgrepo-com.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
