import Slider from "react-slick";
import CastItem from "../cast-item/cast-item";
import classes from "./cast-slider.module.scss";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  rows: 1,
  swipeToSlide: true,
};

const CastSlider = (props) => {
  const { casts } = props;

  return (
    <div className={classes.slider}>
      <h2 className={classes.title}>Top Billed Cast</h2>
      <Slider {...settings} arrows={false}>
        {casts.map((cast) => (
          <CastItem
            key={cast.id}
            id={cast.id}
            name={cast.name}
            imgUrl={cast.profile_path}
            character={cast.character}
            gender={cast.gender}
          />
        ))}
      </Slider>
    </div>
  );
};

export default CastSlider;
