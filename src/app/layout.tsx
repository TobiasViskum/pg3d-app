import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./transitions.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./_components/ThemeSwitcher";
import { Navbar } from "./_components/Navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atlanic Clan PG3D",
  description: "Tobias' portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script src="/htmx.min.js" />
        <Script src="/view-transitions.js" />
        <meta name="theme-color" content="rgb(var(--background))" />
        <meta name="htmx-config" content='{"globalViewTransitions":"true"}' />
      </head>
      <body className={cn(inter.className, "min-h-[100svh]")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {/* <Sidebar /> */}

          <main className="w-[100svw] flex justify-center px-2">
            <div className="max-w-7xl w-full">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
