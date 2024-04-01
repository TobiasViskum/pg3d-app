"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { vEvent } from "@/lib/vEvent";
import { usePathname } from "next/navigation";
import { Fragment, ReactNode, useEffect, useMemo, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  options: { text: string; href: string }[];
};

export function Wrapper({ children, options }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const path = usePathname();
  const expandDivRef = useRef<HTMLDivElement | null>(null);

  const linkTw =
    'hover:text-first py-2 text-base transition-[transform,color] hover:scale-110 origin-left w-full whitespace-nowrap outline-0 focus-visible:scale-110 focus-visible:text-first [&[data-active="true"]:not(:hover):not(:focus-visible)]:text-link font-normal';

  const lineSize = 2;
  const lineLeftOffset = 12;

  useEffect(() => {
    function onSidebarChange({ detail }: CustomEvent<{ newState: "open" | "closed" }>) {
      if (detail.newState === "closed") {
        setIsExpanded(false);
      } else if (detail.newState === "open") {
        const elem = expandDivRef.current;

        if (elem && elem.matches(':has([data-active="true"])')) {
          setIsExpanded(true);
        }
      }
    }

    vEvent.listen("sidebarChange", onSidebarChange);

    return () => vEvent.removeListener("sidebarChange", onSidebarChange);
  }, []);

  return (
    <div
      className="group/expand flex min-w-[140px] flex-col 3xl:min-w-[164px]"
      data-expanded={isExpanded}
      ref={expandDivRef}
    >
      <button
        className="group/item outline-0"
        onClick={() => {
          const div = expandDivRef.current;
          if (div) {
            const prev = div.getAttribute("data-expanded") || "";

            if (prev === "false") {
              setIsExpanded(true);
            } else {
              setIsExpanded(false);
            }
          }
        }}
      >
        {children}
      </button>
      <div
        className={cn(
          'grid w-full overflow-y-hidden transition-[grid-template-rows] group-data-[expanded="false"]/expand:grid-rows-[0fr] group-data-[expanded="true"]/expand:grid-rows-[1fr]'
        )}
      >
        <div
          className="relative flex flex-col overflow-y-hidden overflow-x-hidden"
          style={{ paddingLeft: 24 + lineLeftOffset }}
        >
          <div
            className="absolute h-[calc(100%-20px)] rounded-full bg-foreground"
            style={{ width: `${lineSize}px`, left: lineLeftOffset }}
          />
          {options.map((option, i) => {
            const baseTop = 22;
            let top = 0;
            if (i === 0) {
              top = baseTop;
            } else {
              top = i * (baseTop + 18) + baseTop;
            }
            top = top - 2 - lineSize;

            return (
              <Fragment key={option.href + option.text}>
                <Link
                  tabIndex={isExpanded ? 0 : -1}
                  href={option.href}
                  className={linkTw}
                  data-active={path.includes(option.href)}
                >
                  {option.text}
                </Link>
                <div
                  className="absolute w-4 rounded-full bg-foreground"
                  style={{
                    top: `${top}px`,
                    height: lineSize,
                    left: lineLeftOffset,
                  }}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
