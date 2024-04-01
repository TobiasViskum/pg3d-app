"use client";

import * as React from "react";
import { default as Link2 } from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link = React.forwardRef<HTMLAnchorElement, Props>(
  ({ className, href, onClick, ...props }, ref) => {
    const router = useRouter();

    function handleClick() {
      // if (!href) return;
      // if (!document.startViewTransition) {
      //   router.push(href);
      //   return;
      // }
      // console.log(document.startViewTransition);
      // document.startViewTransition((e: any) => {
      //   console.log(e);
      //   router.push(href);
      // });
    }

    return (
      <Link2
        onClick={(e) => {
          onClick && onClick(e);
          handleClick();
        }}
        href={href || ""}
        passHref
        className={cn("", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Link.displayName = "Button";

export { Link };
