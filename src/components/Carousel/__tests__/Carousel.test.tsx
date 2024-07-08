import { render, screen } from "@testing-library/react";
import { expect, describe, it } from "vitest";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Carousel from "../Carousel";
import {
  discoverMovieData,
  discoverTvData,
  trendingMovieData,
  trendingTvData,
} from "./Carousel.mocks";
import FlixModalProvider from "../../Modal/FlixModalProvider";
import LanguageProvider from "../../LanguageSelector/LanguageProvider";
import ratingOnFive from "../../Rating/helper";

describe("Carousel", () => {
  const queryClient = new QueryClient();

  it("should render trending movie list", async () => {
    // ARRANGE
    render(
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <FlixModalProvider>
            <Carousel
              url="https://api.themoviedb.org/3/trending/movie/week?api_key=92b418e837b833be308bbfb1fb2aca1e&include_adult=false"
              title="Trending movie this week"
            />
          </FlixModalProvider>
        </LanguageProvider>
      </QueryClientProvider>,
    );

    const DuneData = trendingMovieData.results[0];
    const PoorThingsData = trendingMovieData.results[1];

    // ACT

    const title = screen.getByText("Trending movie this week");

    const DuneTitle = await screen.findByText(DuneData.title);
    const DuneVote = await screen.findByText(
      ratingOnFive(DuneData.vote_average),
    );
    const DunePopularity = await screen.findByText(
      `#${Math.round(DuneData.popularity)}`,
    );
    const trendingMovieImage = screen.getByRole("img", {
      name: /dune: part two/i,
    });

    const PoorThingsTitle = await screen.findByText(PoorThingsData.title);
    const PoorThingsVote = await screen.findByText(
      ratingOnFive(PoorThingsData.vote_average),
    );
    const PoorThingsPopularity = await screen.findByText(
      `#${Math.round(PoorThingsData.popularity)}`,
    );
    const trendingMovieImage2 = screen.getByRole("img", {
      name: /poor things/i,
    });

    // ASSERT
    expect(title).toBeInTheDocument();

    expect(DuneTitle).toBeInTheDocument();
    expect(DuneVote).toBeInTheDocument();
    expect(DunePopularity).toBeInTheDocument();
    expect(trendingMovieImage).toBeInTheDocument();

    expect(PoorThingsTitle).toBeInTheDocument();
    expect(PoorThingsVote).toBeInTheDocument();
    expect(PoorThingsPopularity).toBeInTheDocument();
    expect(trendingMovieImage2).toBeInTheDocument();
  });

  it("should render trending tv list", async () => {
    // ARRANGE
    render(
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <FlixModalProvider>
            <Carousel
              url="https://api.themoviedb.org/3/trending/tv/week?api_key=92b418e837b833be308bbfb1fb2aca1e&include_adult=false"
              title="Trending serie this week"
            />
            /
          </FlixModalProvider>
        </LanguageProvider>
      </QueryClientProvider>,
    );
    const ShogunData = trendingTvData.results[0];
    const HaloData = trendingTvData.results[1];

    // ACT
    const title = screen.getByText("Trending serie this week");

    const ShogunTitle = await screen.findByText(ShogunData.name);
    const ShogunVote = await screen.findByText(
      ratingOnFive(ShogunData.vote_average),
    );
    const ShogunPopularity = await screen.findByText(
      `#${Math.round(ShogunData.popularity)}`,
    );

    const HaloTitle = await screen.findByText(HaloData.name);
    const HaloVote = await screen.findByText(
      ratingOnFive(HaloData.vote_average),
    );
    const HaloPopularity = await screen.findByText(
      `#${Math.round(HaloData.popularity)}`,
    );
    const trendingTVImage = screen.getByRole("img", {
      name: /shōgun/i,
    });
    const trendingTvImage2 = screen.getByRole("img", {
      name: /halo/i,
    });

    // ASSERT

    expect(title).toBeInTheDocument();

    expect(ShogunTitle).toBeInTheDocument();
    expect(ShogunVote).toBeInTheDocument();
    expect(ShogunPopularity).toBeInTheDocument();
    expect(trendingTVImage).toBeInTheDocument();

    expect(HaloTitle).toBeInTheDocument();
    expect(HaloVote).toBeInTheDocument();
    expect(HaloPopularity).toBeInTheDocument();
    expect(trendingTvImage2).toBeInTheDocument();
  });

  it("should render discover movie list", async () => {
    // ARRANGE
    render(
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <FlixModalProvider>
            <Carousel
              url="https://api.themoviedb.org/3/discover/movie?api_key=92b418e837b833be308bbfb1fb2aca1e&include_adult=false"
              title="Discover more movie"
            />
            /
          </FlixModalProvider>
        </LanguageProvider>
      </QueryClientProvider>,
    );
    const DamselData = discoverMovieData.results[0];
    const KungFuPandaData = discoverMovieData.results[1];

    // ACT

    const title = screen.getByText("Discover more movie");

    const DamselTitle = await screen.findByText(DamselData.title);
    const DamselVote = await screen.findByText(
      ratingOnFive(DamselData.vote_average),
    );
    const DamselPopularity = await screen.findByText(
      `#${Math.round(DamselData.popularity)}`,
    );
    const discoverMovieImage = screen.getByRole("img", {
      name: /damsel/i,
    });

    const KungFuPandaTitle = await screen.findByText(KungFuPandaData.title);
    const KungFuPandaVote = await screen.findByText(
      ratingOnFive(KungFuPandaData.vote_average),
    );
    const KungFuPandaPopularity = await screen.findByText(
      `#${Math.round(KungFuPandaData.popularity)}`,
    );
    const discoverMovieImage2 = screen.getByRole("img", {
      name: /kung fu panda 4/i,
    });

    // ASSERT

    expect(title).toBeInTheDocument();

    expect(DamselTitle).toBeInTheDocument();
    expect(DamselVote).toBeInTheDocument();
    expect(DamselPopularity).toBeInTheDocument();
    expect(discoverMovieImage).toBeInTheDocument();

    expect(KungFuPandaTitle).toBeInTheDocument();
    expect(KungFuPandaVote).toBeInTheDocument();
    expect(KungFuPandaPopularity).toBeInTheDocument();
    expect(discoverMovieImage2).toBeInTheDocument();
  });

  it("should render discover tv list", async () => {
    // ARRANGE
    render(
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <FlixModalProvider>
            <Carousel
              url="https://api.themoviedb.org/3/discover/tv?api_key=92b418e837b833be308bbfb1fb2aca1e&include_adult=false"
              title="Discover more serie"
            />
            /
          </FlixModalProvider>
        </LanguageProvider>
      </QueryClientProvider>,
    );
    const TagesschauData = discoverTvData.results[0];
    const HaloData = discoverTvData.results[1];

    // ACT
    const title = screen.getByText("Discover more serie");

    const TagesschauTitle = await screen.findByText(TagesschauData.name);
    const TagesschauVote = await screen.findByText(
      ratingOnFive(TagesschauData.vote_average),
    );
    const TagesschauPopularity = await screen.findByText(
      `#${Math.round(TagesschauData.popularity)}`,
    );
    const discoverTvImage = screen.getByRole("img", {
      name: /tagesschau/i,
    });

    const HaloTitle = await screen.findByText(HaloData.name);
    const HaloVote = await screen.findByText(
      ratingOnFive(HaloData.vote_average),
    );
    const HaloPopularity = await screen.findByText(
      `#${Math.round(HaloData.popularity)}`,
    );
    const discoverTvImage2 = screen.getByRole("img", {
      name: /halo/i,
    });

    // ASSERT

    expect(title).toBeInTheDocument();

    expect(TagesschauTitle).toBeInTheDocument();
    expect(TagesschauVote).toBeInTheDocument();
    expect(TagesschauPopularity).toBeInTheDocument();
    expect(discoverTvImage).toBeInTheDocument();

    expect(HaloTitle).toBeInTheDocument();
    expect(HaloVote).toBeInTheDocument();
    expect(HaloPopularity).toBeInTheDocument();

    expect(discoverTvImage2).toBeInTheDocument();
  });
});
