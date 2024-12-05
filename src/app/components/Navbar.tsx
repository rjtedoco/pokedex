"use client";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import useMobile from "../hooks/useMobile";

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
  const isMobile = useMobile();
  const [selected, setSelected] = useState<string>("Home");

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isMobile]);

  return (
    <nav className="sticky top-0 z-10 right-0 shadow-md bg-slate-900 p-4 text-white">
      <div className="flex justify-between">
        <div className="">Pokedex</div>
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="flex flex-col gap-1"
        >
          <CollapsibleTrigger className="self-end md:hidden">
            {isOpen ? <XIcon /> : <MenuIcon />}
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-end md:flex-row">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setSelected(item.title)}
              >
                <span
                  className={`p-2 hover:bg-slate-700 rounded-lg ${selected === item.title && "bg-slate-600"} `}
                >
                  {item.title}
                </span>
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </nav>
  );
};

export default Navbar;
