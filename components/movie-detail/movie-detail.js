import { IMAGE_BASE_URL, IMAGE_BACKDROP_URL } from "../../utils/image-url";
import classes from "./movie-detail.module.scss";

const MovieDetail = (props) => {
  const { movie } = props;

  return (
    <div className={classes.detail}>
      <div className={classes.backdrop}>
        <img
          src={`${IMAGE_BACKDROP_URL}${movie.backdrop_path}`}
          alt={movie.title}
        />
      </div>
      <div className={classes.content}>
        <div className={classes.image}>
          <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} />
        </div>
        <div className={classes.info}>
          <h1 className={classes.name}>{movie.title}</h1>
          <div className={classes.genres}>
            <span>Genres: </span>
            <ul>
              {movie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div className={classes.date}>
            <span>Release Date: </span>
            <time>{movie.release_date}</time>
          </div>
          <div className={classes.overview}>
            <span>Overview</span>
            <p>{movie.overview}</p>
          </div>
          <div className={classes.buttons}>
            <button className={classes.trailer}>Trailer</button>
            <button className={classes.watch}>Watch now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
