import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import SocketProvider from "@/context/useSocket";

const inter = Inter({ subsets: ["latin"] });
const poppins = Lato({ weight: "700", subsets: ["latin"] });

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
      <body className={poppins.className}>
        <SocketProvider url="https://socket-io-chat-backend.onrender.com">{children}</SocketProvider>
      </body>
    </html>
  );
}
