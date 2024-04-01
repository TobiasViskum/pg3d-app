import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const PageWrapper = React.forwardRef<HTMLDivElement, InputProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-8", className)} {...props}>
        {children}
      </div>
    );
  },
);
PageWrapper.displayName = "PageWrapper";

export { PageWrapper };
