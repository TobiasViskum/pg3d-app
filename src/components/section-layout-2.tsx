import * as React from "react";

import { cn } from "@/lib/utils";
import { P } from "./p";
import Image, { StaticImageData } from "next/image";
import { H3 } from "./h3";

export interface InputProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  image?: StaticImageData;
  video?: string;
  direction?: "normal" | "reverse";
  children: React.ReactNode;
}

const SectionLayout2 = React.forwardRef<HTMLElement, InputProps>(
  (
    {
      className,
      title,
      image,
      video,
      children,
      direction = "normal",
      ...props
    },
    ref,
  ) => {
    return (
      <article className="clearfix" ref={ref} {...props}>
        <div className="w-full space-y-4 sm:space-y-0">
          <H3 className="block sm:hidden">{title}</H3>
          {image !== undefined ? (
            <div>
              <Image
                priority
                src={image}
                width={640}
                height={1280}
                alt="img"
                className={cn(
                  "mb-4 w-full rounded-md sm:mb-2 sm:w-7/12 sm:max-w-md",
                  direction === "reverse"
                    ? "sm:float-right sm:ml-4"
                    : "sm:float-left sm:mr-4",
                )}
              />
            </div>
          ) : (
            video !== undefined && (
              <div>
                <video
                  width={640}
                  height={1280}
                  loop
                  controls
                  className={cn(
                    "mb-4 w-full rounded-md sm:mb-2 sm:w-7/12 sm:max-w-md",
                    direction === "reverse"
                      ? "sm:float-right sm:ml-4"
                      : "sm:float-left sm:mr-4",
                  )}
                >
                  <source src={video} />
                </video>
              </div>
            )
          )}
        </div>
        <div className="w-full">
          <H3 className="hidden pb-1 sm:block">{title}</H3>
          <P>{children}</P>
        </div>
      </article>
    );
  },
);
SectionLayout2.displayName = "SectionLayout2";

export { SectionLayout2 };
