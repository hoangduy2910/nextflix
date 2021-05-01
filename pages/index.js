import React from "react";
import Head from "next/head";

import { MovieService } from "../services/movie-service";
import Hero from "../components/hero/hero";
import Section from "../components/section/section";

export const getStaticProps = async () => {
  const popularMovies = await MovieService.GetPopularMovies();
  const trendingMovies = await MovieService.GetTrendingMovies();

  let popular;
  if (popularMovies && popularMovies.results) {
    popular = popularMovies.results;
  }

  let trending;
  if (trendingMovies && trendingMovies.results) {
    trending = trendingMovies.results;
  }

  return {
    props: {
      popular,
      trending,
    },
    revalidate: 86400, // 1 day
  };
};

const Home = (props) => {
  const { popular, trending } = props;

  return (
    <React.Fragment>
      <Head>
        <title>NextFlix</title>
        <meta name="description" content="NextFlix" />
      </Head>
      <Hero />
      <Section id="popular" title="What's popular" items={popular} />
      <Section id="trending" title="Trending" items={trending} />
    </React.Fragment>
  );
};

export default Home;
