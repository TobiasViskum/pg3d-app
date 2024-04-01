import { clanLogo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "@/app/_components/ThemeSwitcher";
import { LockClosedIcon } from "@heroicons/react/24/outline";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex flex-col items-center border-b bg-background bg-opacity-70 backdrop-blur-[8px]">
      <nav className="mx-auto flex h-16 w-full items-center justify-center px-4">
        <div className="flex w-full max-w-7xl justify-between">
          <div className="flex items-center gap-x-2">
            <Link href="/">
              <Image
                priority
                src={clanLogo}
                alt="profile"
                width={48}
                height={48}
                className="aspect-square h-12 w-12 rounded-xl"
              />
            </Link>
            <button>
              <LockClosedIcon width={32} height={32} />
            </button>
          </div>
          {/* <div className="h-12 flex items-center gap-x-8">
            <Button>Admin login</Button>
          </div> */}
          <ThemeSwitcher inNavbar />
        </div>
      </nav>
      {/* <div className="border-t flex w-full max-w-7xl px-2 py-4 2xl:hidden">
        <SmartNavigation />
      </div> */}
    </header>
  );
}
