import type { Metadata } from "next";
import { Open_Sans, Lato } from 'next/font/google';
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const lato = Lato({
  subsets: ['latin'], // Use 'latin' subset (customize if needed)
  weight: ['100', '300', '400', '700', '900'], // Choose the weights you need
  variable: '--font-lato'
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Define which font weights you want to use
  variable: '--font-open-sans'
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
            </head> */}
            <body
              className={`${lato.className} ${openSans.variable} antialiased`}
            >
              <UserProvider>
                {children}
              </UserProvider>
            </body>
          </html>
          );
}
