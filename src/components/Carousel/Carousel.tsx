import { useQuery } from "@tanstack/react-query";
import Card from "../Card/Card";
import { FlixType } from "./Carousel.model";
import CardLoading from "../Card/CardLoading";

export type CarouselProps = { url: string; title: string };

function Carousel({ url, title }: CarouselProps) {
  const fetchFlix = async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: [url],
    queryFn: fetchFlix,
  });

  if (isLoading) {
    return (
      <div className="mb-8 mr-[-1.5rem] md:mb-10 md:mr-[-2.5rem] lg:mb-12 lg:mr-[-3.5rem]">
        <h3 className="my-4 text-xl font-bold md:my-6 md:text-2xl ">{title}</h3>
        <div className="no-scrollbar flex space-x-4 overflow-scroll pr-6 md:space-x-6 lg:space-x-8">
          {Array.from({ length: 20 }, (_, index) => (
            <CardLoading key={index + title} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <p>An error occurred : {error.message}</p>;
  }

  return (
    <div className="mb-8 mr-[-1.5rem] md:mb-10 md:mr-[-2.5rem] lg:mb-12 lg:mr-[-3.5rem]">
      <h3 className="my-4 text-xl font-bold md:my-6 md:text-2xl ">{title}</h3>
      <div className="no-scrollbar flex space-x-4 overflow-scroll pr-6 md:space-x-6 lg:space-x-8">
        {data?.results &&
          data?.results?.map((flix: FlixType) => (
            <Card flix={flix} key={flix.id} />
          ))}
      </div>
    </div>
  );
}

export default Carousel;
