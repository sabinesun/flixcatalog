import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { FlixType } from "../Carousel/Carousel.model";
import Backdrop from "../Image/Backdrop";
import RatingStar from "../Rating/RatingStar";
import "./FlixModalProvider.css";
import { getFlixDetails } from "../../api/api-url";
import Poster from "../Image/Poster";

function Info({
  subTitle,
  subContent,
  unit = "",
}: {
  subTitle: string;
  subContent: string;
  unit?: string;
}) {
  const { t } = useTranslation();
  return (
    <div className="dialog-container__description__sub-row">
      <h6 className="dialog-container__description__sub-title">
        {t(subTitle)}
      </h6>
      <p className="dialog-container__description__sub-content">
        {`${subContent} ${unit}`}
      </p>
    </div>
  );
}

function ModalContent({
  flix,
  language,
}: {
  flix: FlixType;
  language: string;
}) {
  const { t } = useTranslation();
  const mediaType = flix.title !== undefined ? "movie" : "tv";
  const fetchFlixDetails = async () => {
    const response = await fetch(
      getFlixDetails({ flixId: flix.id, mediaType, language }),
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["FlixDetails"],
    queryFn: fetchFlixDetails,
  });

  if (isLoading) {
    return <p> is loading ... </p>;
  }

  if (error) {
    return <p>An error occurred : {error.message}</p>;
  }

  let moreInfo;

  if (mediaType === "movie") {
    moreInfo = (
      <>
        <Info subTitle="releaseDate" subContent={data.release_date} />
        <Info subTitle="runtime" subContent={data.runtime} unit="min" />
        <Info subTitle="budget" subContent={data.budget} unit="$" />
        <Info subTitle="revenue" subContent={data.revenue} unit="$" />
      </>
    );
  } else if (mediaType === "tv") {
    moreInfo = (
      <>
        <Info subTitle="firstAirDate" subContent={data.first_air_date} />
        <Info subTitle="lastAirDate" subContent={data.last_air_date} />
        <Info
          subTitle="episodeRuntime"
          subContent={
            data?.episode_run_time?.length !== 0 ? data.episode_run_time : "N/A"
          }
          unit="min"
        />
        <Info subTitle="numberOfSeasons" subContent={data.number_of_seasons} />
        <Info
          subTitle="numberOfEpisodes"
          subContent={data.number_of_episodes}
        />
      </>
    );
  }

  return (
    <>
      <div className="dialog-container__backdrop">
        <Backdrop flix={flix} />
      </div>
      <div className="dialog-container__poster">
        <Poster flix={flix} />
        <h4 className="dialog-container__poster__title">
          {data.title ? data.title : data.name}
        </h4>
      </div>
      <div className="dialog-container__description">
        <div className="dialog-container__description__row">
          <h5 className="dialog-container__description__title">
            {t("genres")}
          </h5>
          <div className="dialog-container__description__content">
            {data?.genres &&
              data?.genres.map((genre) => (
                <div className="badge" key={data.id + genre.id}>
                  {genre.name}
                </div>
              ))}
          </div>
        </div>
        <div className="dialog-container__description__row">
          <h5 className="dialog-container__description__title">
            {t("rating")}
          </h5>
          <div className="dialog-container__description__content">
            <div className="dialog-container__description__sub-row">
              <div className="dialog-container__description__sub-title">
                <RatingStar flix={flix} />
              </div>
              <p>
                {flix.vote_count} {t("votes")}
              </p>
            </div>
            <div className="dialog-container__description__sub-row">
              <h5 className="dialog-container__description__sub-title">
                {t("popularity")}
              </h5>
              <p>#{flix.popularity}</p>
            </div>
          </div>
        </div>
        <div className="dialog-container__description__row">
          <h5 className="dialog-container__description__title">
            {t("overview")}
          </h5>
          <p className="dialog-container__description__content">
            {data.overview}
          </p>
        </div>
        <div className="dialog-container__description__row">
          <h5 className="dialog-container__description__title">
            {t("moreInfo")}
          </h5>
          <div className="dialog-container__description__content">
            {moreInfo}
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalContent;
