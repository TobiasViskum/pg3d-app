import { H4 } from "@/components/h4";
import { H5 } from "@/components/h5";
import { PG3DWeapon } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export function Weapon({ weapon }: { weapon: PG3DWeapon }) {
  const pathUrl = encodeURIComponent(weapon.href);

  const search = new URLSearchParams(weapon.href);

  return (
    <Link
      href={{
        pathname: "/pd3d-weapons/weapon",
        query: { href: search.toString() },
      }}
      className="flex items-center gap-x-2 rounded-md px-2 group max-w-sm w-full hover:bg-second hover:bg-opacity-10 cursor-pointer py-1"
    >
      <Image
        src={weapon.img}
        alt="weapon"
        width={56}
        height={56}
        className="group-hover:scale-105 transition-transform h-14 w-14"
      />
      <H5 className="w-full text-ellipsis overflow-hidden whitespace-nowrap tracking-tight">
        {weapon.title}
      </H5>
    </Link>
  );
}
