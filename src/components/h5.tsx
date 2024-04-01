import * as React from "react";

import { cn } from "@/lib/utils";

export interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

const H5 = React.forwardRef<HTMLHeadingElement, Props>(({ className, ...props }, ref) => {
  return (
    <h5
      className={cn("text-lg font-medium text-second xs:text-xl md:text-2xl", className)}
      ref={ref}
      {...props}
    />
  );
});
H5.displayName = "H5";

export { H5 };
