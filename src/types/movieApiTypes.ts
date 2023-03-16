export type MovieNowPlayingResult = {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string; // formato de fecha: YYYY-MM-DD
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

export type Dates = {
  maximum: string; // formato de fecha: YYYY-MM-DD
  minimum: string; // formato de fecha: YYYY-MM-DD
};

export type MovieNowPlayingResponse = {
  page: number;
  results: MovieNowPlayingResult[];
  dates: Dates;
  total_pages: number;
  total_results: number;
};
