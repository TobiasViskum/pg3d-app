import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  height?: number;
  width?: number;
};

export function JavascriptIcon({ className, height = 36, width = 36 }: Props) {
  return (
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="JavaScript"
        role="img"
        viewBox={`0 0 512 512`}
        style={{ width: width, height: height }}
      >
        <rect
          className={cn("fill-[#f7df1e]", className)}
          rx="15%"
          width="512"
          height="512"
        />
        <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" />
      </svg>
    </a>
  );
}
