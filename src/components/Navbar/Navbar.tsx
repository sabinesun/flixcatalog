import { NavLink } from "react-router-dom";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import NavbarLink from "./NavbarLink";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

function Navbar() {
  return (
    <nav className="mb-10 flex flex-col space-y-4">
      <div className="relative flex flex-row  justify-between space-x-8 md:col-start-1">
        <div className="flex space-x-8">
          <h1 className="text-nowrap text-xl font-bold uppercase md:text-2xl">
            Popcorn
          </h1>
          <NavbarLink isMobile={false} />
        </div>
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <NavLink to="search/">
            <MagnifyingGlassIcon width={18} height={18} />
          </NavLink>
        </div>
      </div>
      <NavbarLink isMobile />
    </nav>
  );
}

export default Navbar;
