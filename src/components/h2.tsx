import * as React from "react";

import { cn } from "@/lib/utils";

export interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H2 = React.forwardRef<HTMLHeadingElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <h2
        className={cn(
          "text-3xl font-extrabold text-first xs:text-4xl md:text-5xl",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
H2.displayName = "H2";

export { H2 };
