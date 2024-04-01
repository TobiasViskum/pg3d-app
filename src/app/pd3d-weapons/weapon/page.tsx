import { H1 } from "@/components/h1";
import Link from "next/link";

export default async function PG3DWeaponPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const href = decodeURIComponent(searchParams.href).replace("=", "");

  const html = await fetch(`https://pixelgun.fandom.com/${href}`).then((res) => res.text());

  return (
    <div className="flex gap-x-4 flex-col">
      <Link href="/pd3d-weapons" className="underline text-link">
        {"<-- Search"}
      </Link>
      <H1>Coming soon..</H1>
    </div>
  );
}
