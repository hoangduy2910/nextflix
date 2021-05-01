import React from "react";
import Head from "next/head";

import { MovieService } from "../../services/movie-service";
import MovieDetail from "../../components/movie-detail/movie-detail";
import CastSlider from "../../components/cast-slider/cast-slider";

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

  return (
    <React.Fragment>
      <Head>
        <title>{movie.title}</title>
        <meta name="description" content={movie.overview} />
      </Head>
      <MovieDetail movie={movie} />
      <CastSlider casts={casts} />
    </React.Fragment>
  );
};

export default Movie;
