import { useTranslation } from "react-i18next";
import { FlixType } from "../Carousel/Carousel.model";

import Backdrop from "../Image/Backdrop";
import RatingStar from "../Rating/RatingStar";
import useFlixModalContext from "../Modal/hooks";

export type CardProps = { flix: FlixType };

function Card({ flix }: CardProps) {
  const { t } = useTranslation();
  const openDialog = useFlixModalContext();

  return (
    <button
      type="button"
      aria-label={`${t("moreInfo")} : ${flix.name ? flix.name : flix.title}`}
      onClick={() => openDialog(flix)}
    >
      <div className="flex min-w-60 flex-col md:min-w-72 lg:min-w-80">
        <Backdrop flix={flix} />
        <div className="my-2 flex h-9 justify-between text-sm md:my-4">
          <RatingStar flix={flix} />
          <div className=" m-2 flex items-center space-x-2">
            <p>{t("popularity")}</p>
            <p>#{Math.round(flix.popularity)}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default Card;
