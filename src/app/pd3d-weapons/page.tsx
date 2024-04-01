import { H3 } from "@/components/h3";
import { Suspense } from "react";
import { SearchWrapper } from "./_components/SearchWrapper";

export default function PG3DWeaponsPage() {
  return (
    <div className="flex gap-x-4 flex-col gap-y-4">
      <H3 className="pt-2">Search for a weapon</H3>
      <Suspense fallback={<></>}>
        <SearchWrapper />
      </Suspense>
    </div>
  );
}
