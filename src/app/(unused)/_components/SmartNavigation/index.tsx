"use client";

import { cn } from "@/lib/utils";
import { ArrowRightIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";

export function SmartNavigation() {
  const path = usePathname();
  const splitPath = path.split("/");
  const router = useRouter();

  const pathArray: { title: string; href: string }[] = [{ title: "Hjem", href: "/" }];

  if (path === "/viskum-app") {
    pathArray.push({
      href: "/viskum-app",
      title: "Viskum app",
    });
  } else if (/\/viskum-app\/.*/.test(path)) {
    const lastPath = splitPath[splitPath.length - 1];
    pathArray.push({
      href: "/viskum-app",
      title: "Viskum app",
    });
    pathArray.push({
      href: `/viskum-app/${lastPath}`,
      title: lastPath,
    });
  } else if (path === "/teoriproeve-practice") {
    pathArray.push({
      href: "/teoriproeve-practice",
      title: "Teoriprøve practice",
    });
  } else if (path === "/lectio") {
    pathArray.push({
      href: "/lectio",
      title: "Lectio web",
    });
  } else if (path === "/programmeringssprog-i-rust") {
    pathArray.push({
      href: "/programmeringssprog-i-rust",
      title: "Programmeringssprog i Rust",
    });
  }

  return (
    <div className="flex items-center gap-x-1 text-link">
      <div className="flex items-center gap-x-4 pr-3">
        <button onClick={() => router.back()} className="flex items-center hover:underline">
          <ChevronLeft className="h-5 w-5" />
          <p className="hidden sm:block">Tilbage</p>
        </button>
        <div className="h-3.5 w-[1px] rounded-full bg-foreground" />
      </div>
      {pathArray.map((path, i) => {
        const addArrow = i !== pathArray.length - 1;

        return (
          <Fragment key={path.href}>
            <Link
              href={path.href}
              className={cn(
                "flex items-center gap-x-1 hover:underline",
                !addArrow ? "pointer-events-none text-foreground" : "cursor-pointer"
              )}
            >
              {path.title}
            </Link>
            {addArrow && <ChevronRightIcon className="text-foreground" />}
          </Fragment>
        );
      })}
    </div>
  );
}
