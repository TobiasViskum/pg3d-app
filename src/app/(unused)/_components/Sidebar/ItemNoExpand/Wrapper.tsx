"use client";

import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
  href: string;
};

export function Wrapper({ children, href }: Props) {
  const path = usePathname();
  const [isActive, setIsActive] = useState(path === href);

  useEffect(() => {
    setIsActive(path === href);
  }, [path, href]);

  return (
    <div data-active={isActive} className="group/noExpand">
      {children}
    </div>
  );
}
