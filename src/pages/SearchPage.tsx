import { useState } from "react";
import { useTranslation } from "react-i18next";
import ContainerGrid from "../components/ContainerGrid/ContainerGrid";

function SearchPage() {
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center">
      <input
        type="text"
        className="border-rounded mb-10 border-b border-white bg-black p-2 uppercase"
        placeholder={t("movieTv")}
        onChange={(e) => setSearchValue(e.target.value)}
        autoFocus
      />
      {searchValue === undefined || searchValue === "" ? (
        <div className="flex items-center justify-center uppercase">
          {t("noResult")}
        </div>
      ) : (
        <ContainerGrid
          url={`https://api.themoviedb.org/3/search/multi?api_key=92b418e837b833be308bbfb1fb2aca1e&query=${searchValue}`}
        />
      )}
    </div>
  );
}

export default SearchPage;
