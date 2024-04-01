import { cn } from "@/lib/utils";

export function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 260 325"
      className={cn(className, "h-10 w-10 fill-foreground")}
    >
      <path d="M252.7,113.7L138.1,15.2c-3.8-3.2-9.3-3.2-13.1,0L7.3,117c-4.2,3.6-4.6,9.9-1,14.1c2,2.3,4.8,3.5,7.6,3.5   c2.3,0,4.6-0.8,6.5-2.4l23.1-20v114.8c0,5.5,4.5,10,10,10h53.3v-98h46.6v98h56.5c5.5,0,10-4.5,10-10V111.8l19.9,17.1   c4.2,3.6,10.5,3.1,14.1-1.1S256.9,117.3,252.7,113.7z" />
    </svg>
  );
}
