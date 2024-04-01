import * as React from "react";

import { cn } from "@/lib/utils";
import { H1 } from "./h1";

export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

const PageHeader = React.forwardRef<HTMLDivElement, InputProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-4", className)} {...props}>
        <H1>{title}</H1>

        <div className="flex items-center gap-x-2">{children}</div>
      </div>
    );
  },
);
PageHeader.displayName = "PageHeader";

export { PageHeader };
