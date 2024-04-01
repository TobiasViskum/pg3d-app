"use client";

import { Input } from "@/components/input";
import { AllPG3DWeapons } from "@/types/types";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
import { Weapon } from "./Weapon";
import { P } from "@/components/p";
import { FixedSizeList } from "react-window";

export function Search({ pg3dWeapons }: { pg3dWeapons: AllPG3DWeapons }) {
  const [search, setSearch] = useState("");

  const filteredPrimary = pg3dWeapons.primary.filter((weapon) =>
    weapon.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredBackup = pg3dWeapons.backup.filter((weapon) =>
    weapon.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredMelee = pg3dWeapons.melee.filter((weapon) =>
    weapon.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredSpecial = pg3dWeapons.special.filter((weapon) =>
    weapon.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredSniper = pg3dWeapons.sniper.filter((weapon) =>
    weapon.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredHeavy = pg3dWeapons.heavy.filter((weapon) =>
    weapon.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex bg-first bg-opacity-5 rounded-lg px-1 py-0.5 max-w-xs w-full">
        <MagnifyingGlassCircleIcon width={48} height={48} />
        <Input
          placeholder="Search..."
          className="outline-0 w-full px-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="space-y-2 overflow-y-auto max-h-[75svh]">
        {filteredPrimary.length ? <P className="font-semibold pb-2">Primary</P> : null}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(275px,1fr))] gap-x-6 gap-y-4">
          {filteredPrimary.map((weapon, i) => (
            <Weapon key={weapon.href} weapon={weapon} />
          ))}
        </div>
        {filteredBackup.length ? <P className="font-semibold pb-2 pt-4">Backup</P> : null}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(275px,1fr))] gap-x-6 gap-y-4">
          {filteredBackup.map((weapon) => (
            <Weapon key={weapon.href} weapon={weapon} />
          ))}
        </div>
        {filteredMelee.length ? <P className="font-semibold pb-2 pt-4">Melee</P> : null}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(275px,1fr))] gap-x-6 gap-y-4">
          {filteredMelee.map((weapon) => (
            <Weapon key={weapon.href} weapon={weapon} />
          ))}
        </div>
        {filteredSpecial.length ? <P className="font-semibold pb-2 pt-4">Special</P> : null}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(275px,1fr))] gap-x-6 gap-y-4">
          {filteredSpecial.map((weapon) => (
            <Weapon key={weapon.href} weapon={weapon} />
          ))}
        </div>
        {filteredSniper.length ? <P className="font-semibold pb-2 pt-4">Sniper</P> : null}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(275px,1fr))] gap-x-6 gap-y-4">
          {filteredSniper.map((weapon) => (
            <Weapon key={weapon.href} weapon={weapon} />
          ))}
        </div>
        {filteredHeavy.length ? <P className="font-semibold pb-2 pt-4">Heavy</P> : null}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(275px,1fr))] gap-x-6 gap-y-4">
          {filteredHeavy.map((weapon) => (
            <Weapon key={weapon.href} weapon={weapon} />
          ))}
        </div>
      </div>
    </div>
  );
}
