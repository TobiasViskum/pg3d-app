import * as React from "react";

import { cn } from "@/lib/utils";

export interface Props extends React.HTMLAttributes<HTMLParagraphElement> {}

const P = React.forwardRef<HTMLParagraphElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <p
        className={cn("text-sm text-foreground xs:text-base", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
P.displayName = "P";

export { P };
