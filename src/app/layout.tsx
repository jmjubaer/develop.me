import type { Metadata } from "next";
import { Bebas_Neue,Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

  // Sporting Grotesque
  const bricolage_Grotesque = Bricolage_Grotesque({
    variable: "--font-bricolage-grotesque",
    weight: ["200","300","400","500","600","700","800"],
    subsets: ["latin"],
  });

  const bebas_Neue = Bebas_Neue({
    subsets: ["latin"],
    weight: ['400'],
    variable: "--font-bebas-neue"
  });

  export const metadata: Metadata = {
    title: "Developer Portfolio",
    description: "",
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className={`${bricolage_Grotesque.className} ${bebas_Neue.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    );
  }
