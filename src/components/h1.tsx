import * as React from "react";

import { cn } from "@/lib/utils";

export interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H1 = React.forwardRef<HTMLHeadingElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <h1
        className={cn(
          "text-gradient py-1 text-4xl font-extrabold xs:text-5xl md:text-6xl",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
H1.displayName = "H1";

export { H1 };
