"use client";

import { vEvent } from "@/lib/vEvent";
import { ReactNode, useEffect, useRef, useState } from "react";

export function Wrapper({ children }: { children: ReactNode }) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [sidebarState, setSidebarState] = useState<"open" | "closed">("closed");

  function closeSidebar() {
    const sidebar = sidebarRef.current;
    if (sidebar) {
      const allExpandElements = sidebar.querySelectorAll("[data-expanded]");

      if (allExpandElements.length > 0) {
        for (let expandElement of allExpandElements) {
          expandElement.setAttribute("data-expanded", "false");
        }

        setTimeout(() => {
          vEvent.dispatch("sidebarChange", { newState: "closed" });

          setSidebarState("closed");
        }, 50);
      } else {
        vEvent.dispatch("sidebarChange", { newState: "closed" });

        setSidebarState("closed");
      }
    }
  }

  useEffect(() => {
    function handleSidebarChange() {
      const sidebar = sidebarRef.current;

      if (sidebar) {
        const noFocus = sidebar.matches(":not(:focus)");
        const noHover = sidebar.matches(":not(:hover)");
        const hasNoFocus = sidebar.matches(":not(:has(:focus))");
        const hasNoHover = sidebar.matches(":not(:has(:hover))");
        if (noFocus && noHover && hasNoFocus && hasNoHover) {
          closeSidebar();
        }
      }
    }
    function windowBlur() {
      handleSidebarChange();
      const activeElement = document.activeElement;
      if (activeElement && activeElement instanceof HTMLElement) {
        activeElement.blur();
      }
    }
    function documentElemFocus() {
      const sidebar = sidebarRef.current;
      if (sidebar) {
        const hasFocus = sidebar.matches(":has(:focus)");
        if (hasFocus) setSidebarState("open");
      }
    }

    document.addEventListener("keyup", handleSidebarChange);
    document.addEventListener("click", handleSidebarChange);
    window.addEventListener("blur", windowBlur);
    document.addEventListener("focusin", documentElemFocus);

    return () => {
      document.removeEventListener("keyup", handleSidebarChange);
      document.removeEventListener("click", handleSidebarChange);
      window.removeEventListener("blur", windowBlur);
      document.removeEventListener("focusin", documentElemFocus);
    };
  }, []);

  return (
    <div
      ref={sidebarRef}
      onMouseLeave={() => {
        closeSidebar();

        const activeElement = document.activeElement;
        if (activeElement && activeElement instanceof HTMLElement) {
          activeElement.blur();
        }
      }}
      data-sidebar-state={sidebarState}
      onMouseEnter={() => {
        vEvent.dispatch("sidebarChange", { newState: "open" });
        setSidebarState("open");
      }}
      className="group/sidebar 3xl:w-72 fixed left-0 hidden h-full w-64 flex-col items-start justify-start gap-y-8 pl-8 pt-[25svh] 2xl:flex"
    >
      {children}
    </div>
  );
}
