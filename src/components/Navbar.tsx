import { Squash as Hamburger } from "hamburger-react";
import Navlinks from "./Nav-links";
import { useState } from "react";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="p-4 flex justify-between items-center fixed z-10 w-full max-w-7xl border-b border-black/50 bg-primary">
      <Link to="/">
        <div className="flex gap-2 items-center">
          <span className="font-bold py-1.5 px-3 rounded-xl bg-orange-400">
            C
          </span>
          <h2 className="font-bold tracking-wide text-xl">Cookify</h2>
        </div>
      </Link>
      <nav
        className={cn(
          "hidden md:block",
          isOpen && "block absolute top-full bg-primary w-full left-0 p-4",
        )}
      >
        <ul className={cn("flex gap-4", isOpen && "flex-col")}>
          <Navlinks name="Home" href="/" />
          <Navlinks name="Recipes" href="/recipes" />
          <Navlinks name="Categories" href="/categories" />
        </ul>
      </nav>
      <div className="flex gap-2 items-center">
        <button className="text-sm py-2 px-4 bg-orange-400 rounded-2xl cursor-pointer hover:bg-orange-500">
          Subscribe
        </button>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </div>
  );
}
