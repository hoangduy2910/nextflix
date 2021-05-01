import Slider from "react-slick";
import CastItem from "../cast-item/cast-item";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  rows: 1,
  swipeToSlide: true,
};

const CastSlider = (props) => {
  return (
    <Slider {...settings} arrows={false}>
      {items.map((item, idx) => (
        <CastItem key={idx} />
      ))}
    </Slider>
  );
};

export default CastSlider;
