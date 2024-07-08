import { useTranslation } from "react-i18next";
import {
  getDiscoveringMoreApiUrl,
  getThisWeekTrendingApiUrl,
} from "../api/api-url";
import Carousel from "../components/Carousel/Carousel";
import useLanguageContext from "../components/LanguageSelector/hooks";

function HomePage() {
  const { t } = useTranslation();
  const { selectedLanguage } = useLanguageContext();

  return (
    <>
      <Carousel
        url={getThisWeekTrendingApiUrl({
          mediaType: "movie",
          language: selectedLanguage,
        })}
        title={t("trendingMovie")}
      />

      <Carousel
        url={getDiscoveringMoreApiUrl({
          mediaType: "movie",
          language: selectedLanguage,
        })}
        title={t("discoverMovie")}
      />
      <Carousel
        url={getThisWeekTrendingApiUrl({
          mediaType: "tv",
          language: selectedLanguage,
        })}
        title={t("trendingTv")}
      />
      <Carousel
        url={getDiscoveringMoreApiUrl({
          mediaType: "tv",
          language: selectedLanguage,
        })}
        title={t("discoverTv")}
      />
    </>
  );
}

export default HomePage;
