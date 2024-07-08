import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { FlixType } from "../Carousel/Carousel.model";
import ratingOnFive from "./helper";

function RatingStar({ flix }: { flix: FlixType }) {
  const renderStarRating = (voteAverage) => {
    const filledStars = Math.floor((Number(voteAverage.toFixed(2)) * 5) / 10);
    const stars: JSX.Element[] = [];

    for (let i = 0; i < 5; i += 1) {
      if (i < filledStars) {
        stars.push(
          <StarFilledIcon
            key={`${i}filled`}
            className="text-yellow-500"
            width="13"
            height="13"
          />,
        );
      } else {
        stars.push(
          <StarIcon
            key={`${i}noFilled`}
            className="text-yellow-500"
            width="13"
            height="13"
          />,
        );
      }
    }

    return stars;
  };
  return (
    <div className=" flex items-center space-x-2 ">
      <div className="flex">{renderStarRating(flix.vote_average)}</div>
      <p>{ratingOnFive(flix.vote_average)}</p>
    </div>
  );
}

export default RatingStar;
