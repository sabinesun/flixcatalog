import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

function NavbarLink({ isMobile }: { isMobile: boolean }) {
  const { t } = useTranslation();

  return (
    <div
      className={`${isMobile ? "flex justify-between md:hidden" : "hidden md:flex md:items-center md:space-x-4 "}`}
    >
      <NavLink
        to="home/"
        className={({ isActive }) => (isActive ? "text-red-600" : "text-white")}
      >
        {t("home")}
      </NavLink>
      <NavLink
        to="movie/"
        className={({ isActive }) => (isActive ? "text-red-600" : "text-white")}
      >
        {t("movie")}
      </NavLink>
      <NavLink
        to="serie/"
        className={({ isActive }) => (isActive ? "text-red-600" : "text-white")}
      >
        {t("serie")}
      </NavLink>
    </div>
  );
}

export default NavbarLink;
