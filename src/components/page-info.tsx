import * as React from "react";

import { cn } from "@/lib/utils";
import { P } from "./p";
import Link from "next/link";

export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  startDate: string;
  endDate?: string;
  externalHref?: string;
  externalText?: string;
  gitHref?: string;
  guestLogin?: string;
}

const PageInfo = React.forwardRef<HTMLDivElement, InputProps>(
  (
    {
      className,
      startDate,
      endDate,
      externalHref,
      externalText,
      gitHref,
      children,
      guestLogin,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(
          "space-y-2 border-l py-1 pl-4 text-foreground",
          className,
        )}
        ref={ref}
        {...props}
      >
        <P className="opacity-80">Begyndelse: {startDate}</P>
        {endDate && <P className="opacity-80">Slut: {endDate}</P>}
        {externalHref && externalText && (
          <div className="flex gap-x-2">
            <P className="opacity-80">Link:</P>
            <Link
              target="_blank"
              href={externalHref}
              className="link opacity-100"
            >
              {externalText}
            </Link>
          </div>
        )}
        {gitHref && (
          <div className="flex gap-x-2">
            <P className="opacity-80">Github:</P>
            <Link target="_blank" href={gitHref} className="link opacity-100">
              github.com
            </Link>
          </div>
        )}
        {guestLogin ? (
          <div className="opacity-80">
            Guest-login:{" "}
            <b>
              <i>{guestLogin}</i>
            </b>
          </div>
        ) : null}
      </div>
    );
  },
);
PageInfo.displayName = "PageInfo";

export { PageInfo };
