import Navlinks from "./Nav-links";

export default function Navbar() {
  return (
    <div className="p-4 flex justify-between items-center fixed z-10 w-full border-b border-black/50 bg-primary">
      <div className="flex gap-2 items-center">
        <span className="font-bold py-1.5 px-3 rounded-xl bg-orange-400">
          C
        </span>
        <h2 className="font-bold tracking-wide text-xl">Cookify</h2>
      </div>
      <nav className="hidden md:block">
        <ul className="flex gap-4">
          <Navlinks name="Home" href="/" />
          <Navlinks name="Resep" href="/" />
          <Navlinks name="Kategori" href="/" />
        </ul>
      </nav>
      <div>
        <button className="text-sm py-2 px-4 bg-orange-400 rounded-2xl cursor-pointer hover:bg-orange-500">
          Subscribe
        </button>
      </div>
    </div>
  );
}
