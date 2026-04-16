import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FTH Net | Internet Service Provider",
  description: "Website profil FTH Net dengan pengelolaan konten melalui Sanity CMS."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
