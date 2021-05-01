import { MovieService } from "../../services/movie-service";
import MovieDetail from "../../components/movie-detail/movie-detail";

export const getStaticProps = async (context) => {
  const { id } = context.params;

  const movie = await MovieService.GetMovieById(id);
  const casts = await MovieService.GetCastByMovieId(id);

  return {
    props: {
      movie,
      casts,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

const Movie = (props) => {
  const { movie, casts } = props;

  if (!movie || !casts) {
    return <div>Loading...</div>;
  }

  return <MovieDetail />;
};

export default Movie;
