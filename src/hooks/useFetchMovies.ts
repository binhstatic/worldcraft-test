import { useEffect, useState } from 'react';
import { IMovie } from '../@types/movie';
import { IMovieDetail } from '../@types/movieDetail';
import { API_ENDPOINT } from '../common/constants/constant';

type Response = {
  data: Array<IMovie> | IMovieDetail | [];
  error: {
    show: boolean;
    msg: string;
  };
  isLoading: boolean;
};

const useFetchMovies = (urlParams: string): Response => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });
  const [data, setData] = useState([]);

  const fetchMovies = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === 'True') {
        setData(data.Search || data);
        setError({ show: false, msg: '' });
      } else {
        setError({ show: true, msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { isLoading, error, data };
};

export default useFetchMovies;
