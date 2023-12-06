import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/header";
import Head from "next/head";
import Footer from "@/components/Footer/footer";

export const metadata: Metadata = {
  title: "Vipin Bohra | Vipin's Portfolio",
  description: "Vipin Bohra's Dev Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,200&display=swap"
          rel="stylesheet"
        /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
