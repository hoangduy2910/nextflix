import Slider from "react-slick";
import MovieTvItem from "../movie-tv-item/movie-tv-item";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  rows: 2,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const MovieTvSlider = (props) => {
  const { sliderRef, items } = props;

  return (
    <Slider ref={sliderRef} {...settings} arrows={false}>
      {items.map((item) => (
        <MovieTvItem
          key={item.id}
          id={item.id}
          name={item.title ? item.title : item.name}
          imageUrl={item.poster_path}
          description={item.overview}
          rating={item.vote_average}
          date={item.release_date ? item.release_date : item.first_air_date}
        />
      ))}
    </Slider>
  );
};

export default MovieTvSlider;
