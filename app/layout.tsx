import type { Metadata } from "next";
import { Actor } from "next/font/google";
import "./globals.css";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bugendai Studios",
  description:
    "Estatuetas impressas em 3D meticulosamente elaboradas, com arte e precisão inspiradas no Japão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={actor.className}>{children}</body>
    </html>
  );
}
