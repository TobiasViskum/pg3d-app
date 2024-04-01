import { AllPG3DWeapons, PG3DWeapon } from "@/types/types";
import * as cheerio from "cheerio";

const PRIMARY_WEAPONS_HREFS = [
  "https://pixelgun.fandom.com/wiki/Category:Primary",
  "https://pixelgun.fandom.com/wiki/Category:Primary?from=Shell+Bubbler",
];

const BACKUP_WEAPONS_HREFS = [
  "https://pixelgun.fandom.com/wiki/Category:Backup",
  "https://pixelgun.fandom.com/wiki/Category:Backup?from=Tunnel+Riveter",
];

const MELEE_WEAPONS_HREFS = ["https://pixelgun.fandom.com/wiki/Category:Melee"];

const SPECIAL_WEAPONS_HREFS = [
  "https://pixelgun.fandom.com/wiki/Category:Special",
  "https://pixelgun.fandom.com/wiki/Category:Special?from=Special%0AGeneral+Pixel+Gun+World+Discussion%2F%40comment-29099806-20170531234624%2F%40comment-31917581-20170609075004",
];

const SNIPER_WEAPONS_HREFS = [
  "https://pixelgun.fandom.com/wiki/Category:Sniper",
  "https://pixelgun.fandom.com/wiki/Category:Sniper?from=Thunder+Storm",
];

const HEAVY_WEAPONS_HREFS = [
  "https://pixelgun.fandom.com/wiki/Category:Heavy",
  "https://pixelgun.fandom.com/wiki/Category:Heavy?from=Signal+Pistol+%28PG3D%29",
];

export async function getPg3dWeapons(): Promise<AllPG3DWeapons> {
  const allWeapons: AllPG3DWeapons = {
    primary: [],
    backup: [],
    melee: [],
    special: [],
    sniper: [],
    heavy: [],
  };

  const primaryPromises = getWeaponsFromHrefs(PRIMARY_WEAPONS_HREFS);
  const backupPromises = getWeaponsFromHrefs(BACKUP_WEAPONS_HREFS);
  const meleePromises = getWeaponsFromHrefs(MELEE_WEAPONS_HREFS);
  const specialPromises = getWeaponsFromHrefs(SPECIAL_WEAPONS_HREFS);
  const sniperPromises = getWeaponsFromHrefs(SNIPER_WEAPONS_HREFS);
  const heavyPromises = getWeaponsFromHrefs(HEAVY_WEAPONS_HREFS);

  const [primaries, backups, melees, specials, snipers, heavies] = await Promise.all([
    primaryPromises,
    backupPromises,
    meleePromises,
    specialPromises,
    sniperPromises,
    heavyPromises,
  ]);

  allWeapons.primary = primaries;
  allWeapons.backup = backups;
  allWeapons.melee = melees;
  allWeapons.special = specials;
  allWeapons.sniper = snipers;
  allWeapons.heavy = heavies;

  return allWeapons;
}

async function getWeaponsFromHrefs(hrefs: string[]): Promise<PG3DWeapon[]> {
  let weapons: PG3DWeapon[] = [];

  let promises: Promise<void>[] = [];

  for (const href of hrefs) {
    promises.push(getPg3dWeaponsFromHref(href, weapons));
  }

  await Promise.all(promises);

  return weapons;
}

async function getPg3dWeaponsFromHref(href: string, weapons: PG3DWeapon[]) {
  const html = await fetch(href).then((res) => res.text());
  const $ = cheerio.load(html);

  const items = $(".category-page__members > .category-page__members-wrapper > ul > li > div > a");

  for (const item of items) {
    const href = $(item).attr("href")!;
    const title = $(item).attr("title")!.replaceAll('"', "");

    let imgUrl = $(item).find("img").attr("src")!;

    const imgId = imgUrl.match(/cb=(.*)/);

    if (imgId) {
      imgUrl = imgUrl.replace(
        /\/revision\/latest\/.*\?cb=(\d+)/,
        `/revision/latest?cb=${imgId[1]}`
      );
      weapons.push({ title, img: imgUrl, href });
    }
  }
}
