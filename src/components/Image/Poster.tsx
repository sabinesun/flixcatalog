import { useTranslation } from "react-i18next";
import { ValueNoneIcon } from "@radix-ui/react-icons";
import { FlixType } from "../Carousel/Carousel.model";

export type PosterProps = {
  flix: FlixType;
};
function Poster({ flix }: PosterProps) {
  const { t } = useTranslation();

  if (flix.poster_path === null) {
    return (
      <div className="flex aspect-auto flex-col items-center justify-center rounded-xl bg-gray-900 text-sm font-extralight uppercase text-white/60">
        <ValueNoneIcon width={24} height={24} />
        <p> {t("noImageAvailable")}</p>
      </div>
    );
  }

  return (
    <div className="flex aspect-auto w-full justify-center">
      <picture>
        <source
          media="(max-width:341px)"
          srcSet={`https://image.tmdb.org/t/p/w342${flix.poster_path}`}
        />
        <source
          media="(min-width:342px)"
          srcSet={`https://image.tmdb.org/t/p/w500${flix.poster_path}`}
        />
        <source
          media="(min-width:500px)"
          srcSet={`https://image.tmdb.org/t/p/w780${flix.poster_path}`}
        />
        <source
          media="(min-width:780px)"
          srcSet={`https://image.tmdb.org/t/p/original${flix.poster_path}`}
        />

        <img
          src={`https://image.tmdb.org/t/p/original${flix.poster_path}`}
          alt={flix.title === undefined ? flix.name : flix.title}
          className="rounded-xl"
          loading="lazy"
        />
      </picture>
    </div>
  );
}

export default Poster;
