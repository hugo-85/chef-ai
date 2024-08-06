import "./globals.css";
import { Inter } from "next/font/google";
import { ChefStoreProvider } from "./providers/chef-store-provider";
import { Head } from "next/document";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chef AI",
  description: "Generate recipes with artificial intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/chef-hat.png"
          sizes="128x128"
          type="image/png"
        />
      </head>
      <body className={inter.className}>
        <ChefStoreProvider>{children}</ChefStoreProvider>
      </body>
    </html>
  );
}
