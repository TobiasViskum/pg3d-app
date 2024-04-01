import * as React from "react";

import { cn } from "@/lib/utils";

export interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H4 = React.forwardRef<HTMLHeadingElement, Props>(({ className, ...props }, ref) => {
  return (
    <h4
      className={cn("text-xl font-semibold text-second xs:text-2xl md:text-3xl", className)}
      ref={ref}
      {...props}
    />
  );
});
H4.displayName = "H4";

export { H4 };
