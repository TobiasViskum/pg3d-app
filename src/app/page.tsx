import { clanLogo, pg3dBg1 } from "@/assets";
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
            className="bg-transparent w-64 h-64 text-center grid place-items-center aspect-square relative rounded-3xl overflow-hidden shadow-xl group"
          >
            <Image
              src={pg3dBg1}
              alt=""
              height={256}
              width={256}
              className="absolute top-0 left-0 transition-transform group-hover:scale-105 duration-500"
            />
            <div className="bg-background bg-opacity-80 absolute w-full h-full">
              <P className="scale-125 font-semibold bg-background rounded-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48">
                Weapons and Gadgets
              </P>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
