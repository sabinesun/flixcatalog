import { HttpResponse, http } from "msw";
import {
  discoverMovieData,
  discoverTvData,
  trendingMovieData,
  trendingTvData,
} from "../components/Carousel/__tests__/Carousel.mocks";

export const genreMovieListData = {
  genres: [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ],
};

export const genreTvListData = {
  genres: [
    { id: 10759, name: "Action & Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 10762, name: "Kids" },
    { id: 9648, name: "Mystery" },
    { id: 10763, name: "News" },
    { id: 10764, name: "Reality" },
    { id: 10765, name: "Sci-Fi & Fantasy" },
    { id: 10766, name: "Soap" },
    { id: 10767, name: "Talk" },
    { id: 10768, name: "War & Politics" },
    { id: 37, name: "Western" },
  ],
};

export const tvPopularityComedyData = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/butPVWgcbtAjL9Z7jU7Xj1KA8KD.jpg",
      genre_ids: [10767, 35],
      id: 22980,
      origin_country: ["US"],
      original_language: "en",
      original_name: "Watch What Happens Live with Andy Cohen",
      overview:
        "Bravo network executive Andy Cohen discusses pop culture topics with celebrities and reality show personalities.",
      popularity: 3024.442,
      poster_path: "/onSD9UXfJwrMXWhq7UY7hGF2S1h.jpg",
      first_air_date: "2009-07-16",
      name: "Watch What Happens Live with Andy Cohen",
      vote_average: 5.2,
      vote_count: 42,
    },
    {
      adult: false,
      backdrop_path: "/hH4YaZuH89Hlyz0DEkf362Mj8gU.jpg",
      genre_ids: [35],
      id: 65701,
      origin_country: ["US"],
      original_language: "en",
      original_name: "Good Mythical Morning",
      overview:
        'Two "Internetainers" (Rhett \u0026 Link) go far out and do the weirdest  things, giving you a daily dose of casual comedy every Monday-Friday.',
      popularity: 2284.216,
      poster_path: "/2Fja87aTeuXxTEI1MH2IuHHSsLq.jpg",
      first_air_date: "2012-01-09",
      name: "Good Mythical Morning",
      vote_average: 6.775,
      vote_count: 51,
    },
  ],
};

export const movieTopRatedActionData = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
      genre_ids: [18, 28, 80, 53],
      id: 155,
      original_language: "en",
      original_title: "The Dark Knight",
      overview:
        "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      popularity: 109.323,
      poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      release_date: "2008-07-16",
      title: "The Dark Knight",
      video: false,
      vote_average: 8.514,
      vote_count: 31625,
    },
    {
      adult: false,
      backdrop_path: "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
      genre_ids: [12, 14, 28],
      id: 122,
      original_language: "en",
      original_title: "The Lord of the Rings: The Return of the King",
      overview:
        "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
      popularity: 120.532,
      poster_path: "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      release_date: "2003-12-01",
      title: "The Lord of the Rings: The Return of the King",
      video: false,
      vote_average: 8.478,
      vote_count: 23160,
    },
  ],
};

export const tvTopRatedAllData = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/AvsNXUbP7UKCVnypyx2eWp8z2N3.jpg",
      genre_ids: [16, 35, 10765],
      id: 94954,
      origin_country: ["US"],
      original_language: "en",
      original_name: "Hazbin Hotel",
      overview:
        "In attempt to find a non-violent alternative for reducing Hell's overpopulation, the daughter of Lucifer opens a rehabilitation hotel that offers a group of misfit demons a chance at redemption.",
      popularity: 329.397,
      poster_path: "/rXojaQcxVUubPLSrFV8PD4xdjrs.jpg",
      first_air_date: "2024-01-18",
      name: "Hazbin Hotel",
      vote_average: 9.068,
      vote_count: 723,
    },
    {
      adult: false,
      backdrop_path: "/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg",
      genre_ids: [18, 80],
      id: 1396,
      origin_country: ["US"],
      original_language: "en",
      original_name: "Breaking Bad",
      overview:
        "Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
      popularity: 623.049,
      poster_path: "/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
      first_air_date: "2008-01-20",
      name: "Breaking Bad",
      vote_average: 8.905,
      vote_count: 13263,
    },
  ],
};

export const tvDetailsData = {
  adult: false,
  backdrop_path: "/zW0v2YT74C6tRafzqqBkfSqLAN0.jpg",
  created_by: [
    {
      id: 566273,
      credit_id: "623ca00ad1a89300885f6b46",
      name: "Kyle Killen",
      gender: 2,
      profile_path: "/aOMs0YHDM4vWM23sQQ5vR08fVQ2.jpg",
    },
    {
      id: 1324451,
      credit_id: "623c9fe4a7e363008bde5e74",
      name: "Steven Kane",
      gender: 2,
      profile_path: null,
    },
  ],
  episode_run_time: [],
  first_air_date: "2022-03-24",
  genres: [
    {
      id: 10759,
      name: "Action & Adventure",
    },
    {
      id: 10765,
      name: "Sci-Fi & Fantasy",
    },
  ],
  homepage: "https://www.paramountplus.com/shows/halo/",
  id: 52814,
  in_production: true,
  languages: ["en"],
  last_air_date: "2024-03-21",
  last_episode_to_air: {
    id: 5085101,
    name: "Halo",
    overview:
      "The climactic battle for the Halo begins. John makes a fateful choice. Soren and Kwan undertake a rescue mission. Halsey and Miranda unleash an ancient horror.",
    vote_average: 8.786,
    vote_count: 14,
    air_date: "2024-03-21",
    episode_number: 8,
    episode_type: "finale",
    production_code: "",
    runtime: 55,
    season_number: 2,
    show_id: 52814,
    still_path: "/gxpRvWI551hkMLT9U4QNmLJfqzw.jpg",
  },
  name: "Halo",
  next_episode_to_air: null,
  networks: [
    {
      id: 4330,
      logo_path: "/fi83B1oztoS47xxcemFdPMhIzK.png",
      name: "Paramount+",
      origin_country: "US",
    },
  ],
  number_of_episodes: 17,
  number_of_seasons: 2,
  origin_country: ["US"],
  original_language: "en",
  original_name: "Halo",
  overview:
    "Depicting an epic 26th-century conflict between humanity and an alien threat known as the Covenant, the series weaves deeply drawn personal stories with action, adventure and a richly imagined vision of the future.",
  popularity: 2114.038,
  poster_path: "/hmHA5jqxN3ESIAGx0jAwV7TJhTQ.jpg",
  production_companies: [
    {
      id: 7671,
      logo_path: "/r7KeUsNVv0iggZRh6XmNNq2OEw1.png",
      name: "Amblin Television",
      origin_country: "US",
    },
    {
      id: 115160,
      logo_path: "/b5e9wBarqIoekgSLSkvpOXMc7IF.png",
      name: "One Big Picture",
      origin_country: "GB",
    },
    {
      id: 115161,
      logo_path: null,
      name: "Chapter Eleven",
      origin_country: "US",
    },
    {
      id: 48856,
      logo_path: "/gyEyIXqnVkOxjbASaWthewkjGgI.png",
      name: "343 Industries",
      origin_country: "US",
    },
    {
      id: 4343,
      logo_path: "/rXq1B1Hnkdnw6soz1zoGcslK3wb.png",
      name: "Showtime Networks",
      origin_country: "US",
    },
    {
      id: 192085,
      logo_path: null,
      name: "David Wiener",
      origin_country: "",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "GB",
      name: "United Kingdom",
    },
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  seasons: [
    {
      air_date: "2022-03-24",
      episode_count: 18,
      id: 284981,
      name: "Specials",
      overview: "",
      poster_path: null,
      season_number: 0,
      vote_average: 0,
    },
    {
      air_date: "2022-03-24",
      episode_count: 9,
      id: 105701,
      name: "Season 1",
      overview: "",
      poster_path: "/nJUHX3XL1jMkk8honUZnUmudFb9.jpg",
      season_number: 1,
      vote_average: 6.8,
    },
    {
      air_date: "2024-02-07",
      episode_count: 8,
      id: 368186,
      name: "Season 2",
      overview:
        "In season two, Master Chief John-117 leads his team of elite Spartans against the alien threat known as the Covenant. In the wake of a shocking event on a desolate planet, John cannot shake the feeling that his war is about to change and risks everything to prove what no one else will believe – that the Covenant is preparing to attack humanity's greatest stronghold. With the galaxy on the brink, John embarks on a journey to find the key to humankind’s salvation, or its extinction: the Halo.",
      poster_path: "/ujlbbxlQdf9sBa47htuXtn24b1n.jpg",
      season_number: 2,
      vote_average: 8.5,
    },
  ],
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Returning Series",
  tagline: "Rise from the fall.",
  type: "Scripted",
  vote_average: 8.332,
  vote_count: 2504,
};

export const handlers = [
  http.get("https://api.themoviedb.org/3/trending/movie/week", () =>
    HttpResponse.json(trendingMovieData),
  ),

  http.get("https://api.themoviedb.org/3/trending/tv/week", () =>
    HttpResponse.json(trendingTvData),
  ),

  http.get("https://api.themoviedb.org/3/discover/movie", ({ request }) => {
    const url = new URL(request.url);
    const sortedBy = url.searchParams.get("sort_by");
    const genre = url.searchParams.get("with_genres");

    if (sortedBy === null || genre === null) {
      return HttpResponse.json(discoverMovieData);
    }

    if (sortedBy === "vote_average.desc" && genre === "28") {
      return HttpResponse.json(movieTopRatedActionData);
    }

    return HttpResponse.json(discoverMovieData);
  }),

  http.get("https://api.themoviedb.org/3/discover/tv", ({ request }) => {
    const url = new URL(request.url);
    const sortedBy = url.searchParams.get("sort_by");
    const genre = url.searchParams.get("with_genres");

    if (sortedBy === null && genre === null) {
      return HttpResponse.json(discoverTvData);
    }

    if (sortedBy === "popularity.desc" && genre === "35") {
      return HttpResponse.json(tvPopularityComedyData);
    }

    if (sortedBy === "vote_average.desc" && genre === null) {
      return HttpResponse.json(tvTopRatedAllData);
    }
    return HttpResponse.json(discoverTvData);
  }),

  http.get("https://api.themoviedb.org/3/genre/movie/list", () =>
    HttpResponse.json(genreMovieListData),
  ),

  http.get("https://api.themoviedb.org/3/genre/tv/list", () =>
    HttpResponse.json(genreTvListData),
  ),

  http.get("https://api.themoviedb.org/3/tv/52814", () =>
    HttpResponse.json(tvDetailsData),
  ),
];
