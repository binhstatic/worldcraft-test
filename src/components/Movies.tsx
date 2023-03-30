import { Link } from 'react-router-dom';
import { IMovie } from '../@types/movie';
import { NO_PICTURE_AVAILABLE } from '../common/constants/constant';
import { useMoviesContext } from '../context/MoviesContext';

const Movies = () => {
  const { movies, isLoading, error } = useMoviesContext();

  if (isLoading) {
    return <div className='loading'></div>;
  }

  return (
    <section className='movies'>
      {!error.show &&
        (movies as Array<IMovie>).map((movie) => {
          const {
            imdbID: id,
            Poster: poster,
            Title: title,
            Year: year,
          } = movie;

          return (
            <Link to={`/movies/${id}`} key={id} className='movie'>
              <article>
                <img
                  src={poster === 'N/A' ? NO_PICTURE_AVAILABLE : poster}
                  alt={title}
                />
                <div className='movie-info'>
                  <h4 className='title'>{title}</h4>
                  <p>{year}</p>
                </div>
              </article>
            </Link>
          );
        })}
    </section>
  );
};

export default Movies;
