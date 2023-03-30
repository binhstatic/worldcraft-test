export interface IMovieDetail {
  Title: string;
  Year: string;
  Poster: string;
  Plot: string;
  Runtime: string;
  Ratings: Array<{ Source: string; Value: string }>;
  Actors: string;
}
