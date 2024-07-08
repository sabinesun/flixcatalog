import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { FlixType } from "../Carousel/Carousel.model";
import LoadingDot from "../Loader/LoadingDot";
import Backdrop from "../Image/Backdrop";
import useFlixModalContext from "../Modal/hooks";

export type ContainerGridProps = {
  url: string;
};

function ContainerGrid({ url }: ContainerGridProps) {
  const openDialog = useFlixModalContext();
  const { ref, inView } = useInView();
  const { t } = useTranslation();

  const fetchFlixByGenre = async ({ pageParam }: { pageParam: number }) => {
    const response = await fetch(`${url}&page=${pageParam}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  };

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [url],
    queryFn: fetchFlixByGenre,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.results ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 20 }, (_, index) => (
          <div
            key={index}
            className="aspect-video w-full animate-pulse rounded-xl bg-gray-900"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return <p>An error occurred : {error.message}</p>;
  }

  const content =
    data?.pages &&
    data?.pages.map((page) =>
      page.results.map(
        (flix: FlixType, index) =>
          flix.media_type !== "person" && (
            <button
              type="button"
              onClick={() => openDialog(flix)}
              key={flix.id}
            >
              {page.results.length === index + 1 ? (
                <div ref={ref}>
                  <Backdrop flix={flix} />
                </div>
              ) : (
                <Backdrop flix={flix} />
              )}
            </button>
          ),
      ),
    );

  return (
    <>
      {data?.pages[0].results.length === 0 ? (
        <div className="flex items-center justify-center uppercase">
          {t("noResult")}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {content}
        </div>
      )}
      {isFetchingNextPage && <LoadingDot />}
    </>
  );
}

export default ContainerGrid;
