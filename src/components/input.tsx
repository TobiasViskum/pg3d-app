import * as React from "react";

import { cn } from "@/lib/utils";

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, Props>(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        "disabled:cursor-not-allowed bg-transparent placeholder:text-first placeholder:text-opacity-40 text-second",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
