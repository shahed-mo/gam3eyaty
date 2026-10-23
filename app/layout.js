import { Cairo } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "../Components/layout/Navbar";
import Footer from "@/Components/layout/Footer";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata = {
  title: "جمعيتي",
  description: "نظّم جمعيتك بسهولة وبثقة",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${cairo.variable} font-sans bg-surface font-body-md text-body-md text-on-surface antialiased`}>
        <ClerkProvider>
          <Navbar />
          <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)] pb-20 sm:pb-0">
            <div className="max-w-[1200px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-lg">
              <div className="flex flex-col w-full">
                {children}
              </div>
            </div>
          </main>
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}