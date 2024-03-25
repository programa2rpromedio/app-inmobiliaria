import type { Metadata } from "next";
import "../app/globals.css";
import '@radix-ui/themes/styles.css';
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Alquileres Ya!",
  description: "Alquileres Ya!",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} font-sans`}>
      <body >{children}</body>
    </html>
  );
}
