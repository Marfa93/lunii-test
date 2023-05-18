import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "URRL",
  description: "An URL shortener service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bgBlue`}>
        <header className="bg-bgBlueAlt h-12 w-full"></header>
        <main className="flex flex-col items-center justify-between pt-12 pr-12 pl-12">
          <h1 className="text-5xl">URRL</h1>
          {children}
        </main>
      </body>
    </html>
  );
}
