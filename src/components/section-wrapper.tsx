import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const SectionWrapper = React.forwardRef<HTMLDivElement, InputProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={cn("space-y-20", className)} ref={ref} {...props}>
        {children}
      </div>
    );
  },
);
SectionWrapper.displayName = "SectionWrapper";

export { SectionWrapper };
