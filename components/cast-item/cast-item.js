import { IMAGE_BASE_URL } from "../../utils/image-url";

const CastItem = (props) => {
  const { id, name, imageUrl, character } = props;

  return (
    <div className={classes.cast}>
      <div className={classes.image}>
        <img src={`${IMAGE_BASE_URL}${imageUrl}`} />
      </div>
      <div className={classes.info}>
        <p className={classes.name}>{name}</p>
        <span className={classes.character}>{character}</span>
      </div>
    </div>
  );
};

export default CastItem;
