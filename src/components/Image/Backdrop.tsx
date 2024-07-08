import { ValueNoneIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";
import { FlixType } from "../Carousel/Carousel.model";

export type BackdropProps = {
  flix: FlixType;
};
function Backdrop({ flix }: BackdropProps) {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="aspect-video w-full">
        {flix.backdrop_path == null ? (
          <div className="flex aspect-video flex-col items-center justify-center rounded-xl bg-gray-900 text-sm font-extralight uppercase text-white/60">
            <ValueNoneIcon width={24} height={24} />
            <p> {t("noImageAvailable")}</p>
          </div>
        ) : (
          <div className="relative flex flex-col text-sm">
            <picture>
              <source
                media="(max-width: 299px)"
                srcSet={`https://image.tmdb.org/t/p/w300${flix.backdrop_path} `}
              />
              <source
                media="(min-width: 300px)"
                srcSet={`https://image.tmdb.org/t/p/w780${flix.backdrop_path} `}
              />
              <source
                media="(min-width: 780px)"
                srcSet={`https://image.tmdb.org/t/p/w1280${flix.backdrop_path} `}
              />
              <source
                media="(min-width: 1280px)"
                srcSet={`https://image.tmdb.org/t/p/original${flix.backdrop_path} `}
              />
              <img
                src={`https://image.tmdb.org/t/p/original${flix.backdrop_path}`}
                alt={flix.title === undefined ? flix.name : flix.title}
                className="rounded-xl"
                loading="lazy"
                width="100%"
                height="auto"
              />
            </picture>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
          </div>
        )}
        <h4
          className={`absolute bottom-0 flex w-full justify-center p-2 font-semibold uppercase `}
        >
          {flix.title === undefined ? flix.name : flix.title}
        </h4>
      </div>
    </div>
  );
}

export default Backdrop;
