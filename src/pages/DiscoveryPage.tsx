import { useEffect, useState } from "react";
import ContainerGrid from "../components/ContainerGrid/ContainerGrid";
import FilterBar from "../components/FilterBar/FilterBar";
import { getFlixByGenreSortedApiUrl, getGenreListApiUrl } from "../api/api-url";
import useLanguageContext from "../components/LanguageSelector/hooks";

export type DiscoveryPageProps = {
  mediaType: string;
};

function DiscoveryPage({ mediaType }: DiscoveryPageProps) {
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const [sortedBy, setSortedBy] = useState("popularity");
  const { selectedLanguage } = useLanguageContext();

  const handleGenreChange = (genreID: string) => {
    setSelectedGenre(genreID);
  };

  const handleSortedChange = (sortType: string) => {
    setSortedBy(sortType);
  };

  useEffect(() => {
    setSelectedGenre("all");
    setSortedBy("popularity");
  }, [mediaType]);

  return (
    <>
      <FilterBar
        url={getGenreListApiUrl({
          mediaType,
          language: selectedLanguage,
        })}
        onGenreChange={handleGenreChange}
        onSortedChange={handleSortedChange}
        mediaType={mediaType}
      />

      <ContainerGrid
        url={getFlixByGenreSortedApiUrl({
          mediaType,
          sortedBy,
          genre: selectedGenre,
          language: selectedLanguage,
        })}
      />
    </>
  );
}

export default DiscoveryPage;
