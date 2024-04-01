import { clanLogo } from "@/assets";
import { H1 } from "@/components/h1";
import { H2 } from "@/components/h2";
import { H3 } from "@/components/h3";
import { H4 } from "@/components/h4";
import { Input } from "@/components/input";
import { P } from "@/components/p";

import { getPg3dWeapons } from "@/pg3d-api/get-weapons";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";

import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // const pg3dWeapons = await getPg3dWeapons();

  // const weaponDummy = pg3dWeapons.primary[0];

  return (
    <div className="flex w-full flex-col items-center px-4 pt-8">
      <div className="text-center">
        <H1>Atlantic</H1>
        <P>- A Pixel Gun 3D clan founded by the Viskum brothers -</P>
        <div className="flex py-8 px-8 gap-x-4">
          <div>
            <Image src={clanLogo} alt="logo" width={100} height={100} className="rounded-3xl" />
          </div>
          <div className="text-left flex flex-col justify-center gap-y-1">
            <H3>Join us now!</H3>
            <div>
              <P>Clan id: 30283457</P>
              <P>
                {"Discord: "}
                <a
                  target="_blank"
                  href="https://discord.gg/44nrshfR"
                  className="underline text-link"
                >
                  discord.gg/44nrshfR
                </a>
              </P>
            </div>
          </div>
        </div>

        <div className="pt-16 flex items-center flex-col gap-y-4">
          <H2>Content</H2>
          <Link
            href="/pd3d-weapons"
            className="bg-first bg-opacity-10 w-64 h-36 text-center grid place-items-center"
          >
            <P className="scale-125 font-semibold">Weapons and Gadgets</P>
          </Link>
        </div>
      </div>
    </div>
  );
}
