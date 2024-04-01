"use client";

import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

type Props = {
  inNavbar?: boolean;
};

export function ThemeSwitcher({ inNavbar = false }: Props) {
  const { setTheme } = useTheme();

  const iconTw =
    "h-12 w-12 hover:bg-accent p-3 rounded-md transition-colors focus-visible:bg-foreground hover:bg-opacity-20 focus-visible:bg-opacity-30 hover:bg-foreground";

  function handleThemeSwitch(newTheme: "dark" | "light") {
    setTheme(newTheme);
  }

  return (
    <div
      className={cn(
        inNavbar
          ? "flex"
          : "fixed bottom-8 left-1/2 hidden w-full max-w-3xl justify-end 2xl:flex",
      )}
    >
      <div
        className={cn(
          "flex w-full max-w-[1500px] justify-end",
          inNavbar ? "" : "pr-8",
        )}
      >
        <button className={iconTw} onClick={() => handleThemeSwitch("light")}>
          <SunIcon className="h-full w-full" />
        </button>
        <button className={iconTw} onClick={() => handleThemeSwitch("dark")}>
          <MoonIcon className="h-full w-full" />
        </button>
      </div>
    </div>
  );
}
