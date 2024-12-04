"use client";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

const navigationItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Pokedex",
    href: "/pokedex",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 right-0 shadow-md bg-yellow-200 min-h-8 p-4">
      <div className="flex justify-between">
        <div>Pokemon</div>
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="flex flex-col gap-1"
        >
          <CollapsibleTrigger className="self-end">
            {isOpen ? <XIcon /> : <MenuIcon />}
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-end">
            {navigationItems.map((item) => (
              <Link key={item.title} href={item.href}>
                <span className="p-2 hover:bg-gray-200">{item.title}</span>
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </nav>
  );
};

export default Navbar;
