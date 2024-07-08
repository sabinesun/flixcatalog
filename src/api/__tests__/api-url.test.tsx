import { it, expect, describe } from "vitest";
import {
  getDiscoveringMoreApiUrl,
  getFlixByGenreSortedApiUrl,
  getGenreListApiUrl,
  getThisWeekTrendingApiUrl,
} from "../api-url";

describe("API", () => {
  it("should give me the trending api", () => {
    const weekTrendingApiUrl1 = getThisWeekTrendingApiUrl({
      mediaType: "movie",
    });
    expect(weekTrendingApiUrl1).toBe(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=92b418e837b833be308bbfb1fb2aca1e&include_adult=false&language=fr",
    );

    const weekTrendingApiUrl2 = getThisWeekTrendingApiUrl({ mediaType: "tv" });
    expect(weekTrendingApiUrl2).toBe(
      "https://api.themoviedb.org/3/trending/tv/week?api_key=92b418e837b833be308bbfb1fb2aca1e&include_adult=false&language=fr",
    );
  });

  it("should give me the discovery api", () => {
    const discoveringMoreApiUrl1 = getDiscoveringMoreApiUrl({
      mediaType: "movie",
    });
    expect(discoveringMoreApiUrl1).toBe(
      "https://api.themoviedb.org/3/discover/movie?api_key=92b418e837b833be308bbfb1fb2aca1e&include_adult=false&vote_count.gte=500&language=fr",
    );

    const discoveringMoreApiUrl2 = getDiscoveringMoreApiUrl({
      mediaType: "tv",
    });
    expect(discoveringMoreApiUrl2).toBe(
      "https://api.themoviedb.org/3/discover/tv?api_key=92b418e837b833be308bbfb1fb2aca1e&include_adult=false&vote_count.gte=500&language=fr",
    );
  });

  it("should give me the filtered api", () => {
    const flixByGenreSortedApiUrl1 = getFlixByGenreSortedApiUrl({
      mediaType: "movie",
      sortedBy: "top rated",
      genre: "all",
    });
    expect(flixByGenreSortedApiUrl1).toBe(
      "https://api.themoviedb.org/3/discover/movie?api_key=92b418e837b833be308bbfb1fb2aca1e&include_adult=false&sort_by=vote_average.desc&vote_count.gte=500&language=fr",
    );

    const flixByGenreSortedApiUrl2 = getFlixByGenreSortedApiUrl({
      mediaType: "tv",
      sortedBy: "popularity",
      genre: "35",
    });
    expect(flixByGenreSortedApiUrl2).toBe(
      "https://api.themoviedb.org/3/discover/tv?api_key=92b418e837b833be308bbfb1fb2aca1e&include_adult=false&sort_by=popularity.desc&with_genres=35&language=fr",
    );
  });

  it("should give me the genre's list api", () => {
    const genreListApiUrl1 = getGenreListApiUrl({ mediaType: "movie" });
    expect(genreListApiUrl1).toBe(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=92b418e837b833be308bbfb1fb2aca1e&language=fr",
    );

    const genreListApiUrl2 = getGenreListApiUrl({ mediaType: "tv" });
    expect(genreListApiUrl2).toBe(
      "https://api.themoviedb.org/3/genre/tv/list?api_key=92b418e837b833be308bbfb1fb2aca1e&language=fr",
    );
  });
});
