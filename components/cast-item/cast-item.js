import { IMAGE_BASE_URL } from "../../utils/image-url";
import { GENDER_TYPE } from "../../constants/constants";
import classes from "./cast-item.module.scss";

const CastItem = (props) => {
  const { id, name, imgUrl, character, gender } = props;

  let image;
  if (imgUrl) {
    image = IMAGE_BASE_URL + imgUrl;
  } else {
    switch (gender) {
      case GENDER_TYPE.MALE:
        image = "/images/male.png";
        break;
      case GENDER_TYPE.FEMALE:
        image = "/images/female.png";
        break;
      default:
        break;
    }
  }

  return (
    <div className={classes.cast}>
      <div className={classes.image}>
        <img src={image} alt={name} />
      </div>
      <div className={classes.info}>
        <p className={classes.name}>{name}</p>
        <span className={classes.character}>{character}</span>
      </div>
    </div>
  );
};

export default CastItem;
