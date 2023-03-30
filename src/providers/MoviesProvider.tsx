import { ReactNode, useState } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import useFetchMovies from '../hooks/useFetchMovies';

interface MoviesProviderProps {
  children: ReactNode;
}

const MoviesProvider = (props: MoviesProviderProps) => {
  const { children } = props;
  const [query, setQuery] = useState('world');
  const { isLoading, error, data: movies } = useFetchMovies(`&s=${query}`);
  const value = { isLoading, error, movies, query, setQuery };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};

export default MoviesProvider;
