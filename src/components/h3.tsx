import * as React from "react";

import { cn } from "@/lib/utils";

export interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H3 = React.forwardRef<HTMLHeadingElement, Props>(({ className, ...props }, ref) => {
  return (
    <h3
      className={cn("text-2xl font-bold text-second xs:text-3xl md:text-4xl", className)}
      ref={ref}
      {...props}
    />
  );
});
H3.displayName = "H3";

export { H3 };
