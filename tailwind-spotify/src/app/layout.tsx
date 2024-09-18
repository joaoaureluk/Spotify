import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Spotify",
  description: "Escutar musicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-900 text-zinc-50" >{children}</body>
    </html>
  );
}
