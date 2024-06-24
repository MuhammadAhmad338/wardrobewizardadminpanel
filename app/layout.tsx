"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import Footer from "../app/Footer/page";
import Header from "./Header/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <title>Title</title>
          <meta name="description" content="Description" />
        </head>
        <Provider store={store}>
          <body className={inter.className}>
            <Header />
            {children}
            <Footer />
          </body>
        </Provider>
      </html>
    </Provider>
  );
}
