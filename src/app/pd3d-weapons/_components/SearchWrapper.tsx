import { getPg3dWeapons } from "@/pg3d-api/get-weapons";
import { Search } from "./Search";

export async function SearchWrapper() {
  const pg3dWeapons = await getPg3dWeapons();

  return <Search pg3dWeapons={pg3dWeapons} />;
}
