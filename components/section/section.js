import { useState, useEffect, useRef } from "react";

import { TvShowService } from "../../services/tv-show-service";
import { MovieService } from "../../services/movie-service";
import MovieTvSlider from "../movie-tv-slider/movie-tv-slider";
import classes from "./section.module.scss";

const nav = [
  { id: "movies", name: "Movies" },
  { id: "tv-shows", name: "Tv Shows" },
];

const Section = (props) => {
  const { id, title, items } = props;

  const [movieTvs, setMovieTvs] = useState(items);
  const [activeNavItem, setActiveNavItem] = useState(nav[0].id);
  const sliderRef = useRef(null);

  useEffect(() => {
    getMoviesOrTvShowsHandler(id, activeNavItem);
  }, [activeNavItem]);

  const getMoviesOrTvShowsHandler = (id, type) => {
    switch (id) {
      case "popular":
        if (type === "movies") {
          getPopularMoviesHandler();
        } else {
          getPopularTvShowsHandler();
        }
        break;
      case "trending":
        if (type === "movies") {
          getTrendingMoviesHandler();
        } else {
          getTrendingTvShowsHandler();
        }
        break;
      default:
        break;
    }
  };

  const getPopularMoviesHandler = async () => {
    const res = await MovieService.GetPopularMovies();
    if (res && res.results) {
      setMovieTvs(res.results);
    }
  };

  const getTrendingMoviesHandler = async () => {
    const res = await MovieService.GetTrendingMovies();
    if (res && res.results) {
      setMovieTvs(res.results);
    }
  };

  const getPopularTvShowsHandler = async () => {
    const res = await TvShowService.GetPopularTvShows();
    if (res && res.results) {
      setMovieTvs(res.results);
    }
  };

  const getTrendingTvShowsHandler = async () => {
    const res = await TvShowService.GetTrendingTvShows();
    if (res && res.results) {
      setMovieTvs(res.results);
    }
  };

  const slideLeftHandler = () => {
    sliderRef.current.slickPrev();
  };

  const slideRightHandler = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>{title}</h2>
      <ul className={classes.nav}>
        {nav.map((item) => (
          <li
            key={item.id}
            className={`${classes.item} ${
              activeNavItem == item.id && classes.active
            }`}
            onClick={() => setActiveNavItem(item.id)}
          >
            {item.name}
          </li>
        ))}
        <li className={classes.icons}>
          <i
            className="fas fa-long-arrow-alt-left"
            onClick={slideLeftHandler}
          />
          <i
            className="fas fa-long-arrow-alt-right"
            onClick={slideRightHandler}
          />
        </li>
      </ul>
      <MovieTvSlider sliderRef={sliderRef} items={movieTvs} />
    </div>
  );
};

export default Section;
