import * as React from "react";

import { cn } from "@/lib/utils";
import { H2 } from "./h2";
import { P } from "./p";

export interface InputProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  children?: React.ReactNode;
}

const SectionLayout1 = React.forwardRef<HTMLElement, InputProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <article className={cn("space-y-2", className)} ref={ref} {...props}>
        <H2>{title}</H2>
        <P>{children}</P>
      </article>
    );
  },
);
SectionLayout1.displayName = "SectionLayout1";

export { SectionLayout1 };
