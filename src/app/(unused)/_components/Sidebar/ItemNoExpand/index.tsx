import { cn } from "@/lib/utils";
import { cloneElement } from "react";
import { Wrapper } from "./Wrapper";
import Link from "next/link";

type Props = {
  text: string;
  href: string;
  Icon: JSX.Element;
};

export function ItemNoExpand({ text, href, Icon }: Props) {
  const buttonTw =
    'group/item min-w-[140px] flex items-start gap-x-2 py-4 3xl:min-w-[164px] group-data-[active="true"]/noExpand:text-link';
  const animateTw =
    'origin-left transition-transform hover:scale-sidebar-hover focus-visible:scale-sidebar-hover outline-0 group-data-[sidebar-state="open"]/sidebar:[&:not(:hover):not(:focus-visible)]:scale-sidebar-initial';

  const IconElem = cloneElement(Icon, {
    className: cn(
      Icon.props.className || "",
      "transition-colors group-hover/item:text-first group-focus-visible/item:text-first h-5 w-5",
    ),
  });

  return (
    <Wrapper href={href}>
      <Link href={href} className={cn(buttonTw, animateTw)}>
        {IconElem}
        <p className='text-base font-medium opacity-0 transition-[opacity,color] group-hover/item:text-first group-focus/item:opacity-100 group-focus-visible/item:text-first group-data-[sidebar-state="open"]/sidebar:opacity-100'>
          {text}
        </p>
      </Link>
    </Wrapper>
  );
}
