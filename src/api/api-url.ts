export const getThisWeekTrendingApiUrl = ({
  mediaType,
  language = "fr",
}: {
  mediaType: string;
  language?: string;
}) => {
  const apiKey = `api_key=${process.env.API_KEY}`;

  return `https://api.themoviedb.org/3/trending/${mediaType}/week?${apiKey}&include_adult=false&language=${language}`;
};

export const getDiscoveringMoreApiUrl = ({
  mediaType,
  language = "fr",
}: {
  mediaType: string;
  language?: string;
}) => {
  const apiKey = `api_key=${process.env.API_KEY}`;
  return `https://api.themoviedb.org/3/discover/${mediaType}?${apiKey}&include_adult=false&vote_count.gte=500&language=${language}`;
};

export const getFlixByGenreSortedApiUrl = ({
  mediaType,
  sortedBy,
  genre,
  language = "fr",
}: {
  mediaType: string;
  sortedBy: string;
  genre: string;
  language?: string;
}) => {
  const apiKey = `api_key=${process.env.API_KEY}`;
  let selectedSort = "";

  if (sortedBy === "popularity") {
    selectedSort = "&sort_by=popularity.desc";
  } else if (sortedBy === "top rated") {
    selectedSort = "&sort_by=vote_average.desc&vote_count.gte=500";
  }
  const selectedGenre =
    genre === undefined || genre === "all" || genre === null
      ? ""
      : `&with_genres=${genre}`;

  const url = `https://api.themoviedb.org/3/discover/${mediaType}?${apiKey}&include_adult=false${selectedSort}${selectedGenre}&language=${language}`;
  return url;
};

export const getGenreListApiUrl = ({
  mediaType,
  language = "fr",
}: {
  mediaType: string;
  language?: string;
}) => {
  const apiKey = `api_key=${process.env.API_KEY}`;
  return `https://api.themoviedb.org/3/genre/${mediaType}/list?${apiKey}&language=${language}`;
};

export const getFlixDetails = ({
  flixId,
  mediaType,
  language = "fr",
}: {
  flixId: number;
  mediaType: string;
  language?: string;
}) => {
  const apiKey = `api_key=${process.env.API_KEY}`;
  return `https://api.themoviedb.org/3/${mediaType}/${flixId}?${apiKey}&language=${language}`;
};
