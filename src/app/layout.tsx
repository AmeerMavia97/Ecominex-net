import "@/css/style.css";
import React  from "react";
import { Poppins } from 'next/font/google';
import { Roboto } from "next/font/google";

import StoreProvider from "@/lib/feature/provider/StoreProvider";


const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      
      <body suppressHydrationWarning={true}  className={poppins.className}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
        <StoreProvider>
          {children}
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
