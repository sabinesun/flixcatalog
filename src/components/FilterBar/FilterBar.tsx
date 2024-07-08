import { ChangeEvent, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { GenreType } from "./FilterbBar.model";

export type FilterBarProps = {
  url: string;
  onGenreChange: (value: string) => void;
  onSortedChange: (value: string) => void;
  mediaType: string;
};

function FilterBar({
  url,
  onGenreChange,
  onSortedChange,
  mediaType,
}: FilterBarProps) {
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedSorted, setSelectedSorted] = useState("popularity");
  const { t } = useTranslation();

  useEffect(() => {
    setSelectedGenre("all");
    setSelectedSorted("popularity");
  }, [mediaType]);

  const fetchGenreList = async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: [url],
    queryFn: fetchGenreList,
  });

  const handleGenreChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedGenre(value);
    onGenreChange(value);
  };
  const handleSortedChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedSorted(value);
    onSortedChange(value);
  };

  if (isLoading) {
    return <div className="my-6 h-7" />;
  }

  if (error) {
    return <p>An error occurred : {error.message}</p>;
  }

  return (
    <form className="my-6 flex items-baseline justify-between">
      <label className="hidden" htmlFor="genre">
        {t("genre")}
      </label>
      <select
        id="genre"
        className="block w-32 border-0 border-b border-white bg-transparent pb-2 text-sm text-white/90 focus:outline-0"
        onChange={handleGenreChange}
        value={selectedGenre}
      >
        <option value="all">{t("all")}</option>
        {data?.genres &&
          data?.genres?.map((genre: GenreType) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
      </select>

      <div className="flex items-baseline space-x-1">
        <label className="text-sm" htmlFor="sorted_by">
          {t("sortedBy")}
        </label>
        <select
          id="sorted_by"
          className="block appearance-none border-0 border-b border-white bg-transparent	pb-2 text-sm text-white/90 focus:outline-0"
          onChange={handleSortedChange}
          value={selectedSorted}
        >
          <option value="popularity"> {t("popularity")}</option>
          <option value="top rated"> {t("topRated")}</option>
        </select>
      </div>
    </form>
  );
}

export default FilterBar;
