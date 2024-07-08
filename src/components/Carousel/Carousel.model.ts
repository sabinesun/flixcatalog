export type FlixType = {
  name: string | undefined;
  id: number;
  poster_path: string;
  original_title: string;
  vote_average: number;
  title: string | undefined;
  backdrop_path: string | null;
  first_air_date: string;
  popularity: number;
  overview: string;
  release_date: string;
  vote_count: number;
  genre_ids: [number];
  original_language: string;
  media_type: string;
};
