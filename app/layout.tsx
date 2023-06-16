import "./globals.css";
import clsx from "clsx";
import { Open_Sans } from "next/font/google";
import { Header } from "@/components";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Cityworks - Administracion de obras públicas",
  description:
    "Cityworks, servicio utilizado para la administración de obras públicas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
      </head>
      <body className={openSans.className} suppressHydrationWarning={true}>
        <Header />
        {children}
      </body>
    </html>
  );
}
