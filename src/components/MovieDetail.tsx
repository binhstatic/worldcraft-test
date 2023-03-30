import { Link, useParams } from 'react-router-dom';
import { IMovieDetail } from '../@types/movieDetail';
import useFetchMovies from '../hooks/useFetchMovies';

const MovieDetail = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetchMovies(`&i=${id}`);

  if (isLoading) {
    return <div className='loading'></div>;
  }

  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    );
  }

  if (!movie) {
    return <div>No data</div>;
  }

  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,
    Runtime: runtime,
    Ratings: ratings,
    Actors: actors,
  } = movie as IMovieDetail;

  return (
    <>
      <Link to='/' className='btn'>
        back to movies
      </Link>
      <section className='single-movie'>
        <img src={poster} alt={title} />
        <div className='single-movie-info'>
          <h2>{title}</h2>
          <p>{runtime}</p>
          <p>{plot}</p>
          <p>{year}</p>
          <p>{ratings?.length > 0 ? ratings[0].Value : 'no have rating'}</p>
          <ul>
            {actors?.split(',').map((actor) => (
              <li>{actor}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default MovieDetail;
