export type AllPG3DWeapons = {
  primary: PG3DWeapon[];
  backup: PG3DWeapon[];
  melee: PG3DWeapon[];
  special: PG3DWeapon[];
  sniper: PG3DWeapon[];
  heavy: PG3DWeapon[];
};

export type PG3DWeapon = { title: string; img: string; href: string };
