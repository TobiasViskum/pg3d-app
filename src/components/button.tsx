import * as React from "react";

import { cn } from "@/lib/utils";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, Props>(({ className, ...props }, ref) => {
  return (
    <button
      className={cn(
        "w-fit rounded-lg bg-first px-4 py-2 text-sm text-background transition-[background-color,box-shadow] hover:bg-second focus-visible:bg-second focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-first focus-visible:ring-opacity-50 max-xs:text-xs",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
