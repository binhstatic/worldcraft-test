import { createContext, useContext } from 'react';
import { IMovie } from '../@types/movie';
import { IMovieDetail } from '../@types/movieDetail';

interface MoviesContextProps {
  movies: Array<IMovie> | IMovieDetail | [];
  isLoading: boolean;
  error: {
    show: boolean;
    msg: string;
  };
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const MoviesContext = createContext<MoviesContextProps>({
  movies: [],
  isLoading: false,
  error: {
    show: false,
    msg: '',
  },
  query: '',
  setQuery: () => {},
});

const useMoviesContext = () => useContext(MoviesContext);

export { MoviesContext, useMoviesContext };
