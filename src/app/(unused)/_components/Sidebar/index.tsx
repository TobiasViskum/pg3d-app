import { Boxes, Home, AxeIcon } from "lucide-react";
import { ItemExpand } from "./ItemExpand";
import { ItemNoExpand } from "./ItemNoExpand";
import { Wrapper } from "./Wrapper";

export function Sidebar() {
  return (
    <Wrapper>
      <ItemNoExpand text="Home" href="/" Icon={<Home />} />
      <ItemExpand
        title="Projekter"
        options={[
          {
            text: "Viskum App",
            href: "/viskum-app",
          },
          {
            text: "Teoriprøve",
            href: "/teoriproeve-practice",
          },
          {
            text: "Lectio",
            href: "/lectio",
          },
          {
            text: "Rust-projekt",
            href: "/programmeringssprog-i-rust",
          },
        ]}
        Icon={<Boxes />}
      />
    </Wrapper>
  );
}
