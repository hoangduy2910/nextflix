import Link from "next/link";

import { IMAGE_BASE_URL } from "../../utils/image-url";
import StarRating from "../star-rating/start-rating";
import classes from "./movie-tv-item.module.scss";

const MovieTvItem = (props) => {
  const { id, name, imageUrl, description, rating, date } = props;

  return (
    <div className={classes.item}>
      <img
        className={classes.image}
        src={`${IMAGE_BASE_URL}${imageUrl}`}
        alt={name}
      />
      <div className={classes.name}>{name}</div>
      <div className={classes.detail}>
        <div className={classes.title}>{name}</div>
        <StarRating rating={rating} />
        <div className={classes.description}>
          <p>{description}</p>
        </div>
        <div className={classes.date}>{new Date(date).getFullYear()}</div>
        <Link href={`/movies/${id}`}>
          <a className={classes.link}>Watch now</a>
        </Link>
      </div>
    </div>
  );
};

export default MovieTvItem;
