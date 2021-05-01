import classes from "./star-rating.module.scss";

const StarRating = (props) => {
  const { rating } = props;

  const converRating = parseInt((rating * 5) / 10);

  return (
    <div className={classes.rating}>
      {[...Array(5)].map((_, idx) => {
        if (converRating > idx) {
          return <i key={idx} className={`fas fa-star ${classes.star}`} />;
        }

        return <i key={idx} className={`far fa-star ${classes.star}`} />;
      })}
      <span>{converRating}/5</span>
    </div>
  );
};

export default StarRating;
