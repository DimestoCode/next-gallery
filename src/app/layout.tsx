import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const TopNav = () => (
  <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
    <div>Gallery</div>
    <button>Sign In</button>
  </nav>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} flex flex-col gap-4 bg-black text-white`}
      >
        <TopNav />
        {children}
      </body>
    </html>
  );
}
