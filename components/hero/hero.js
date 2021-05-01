import classes from "./hero.module.scss";

const Hero = (props) => {
  const imageUrl = "/images/hero.jpg";

  return (
    <div
      className={classes.heroWrapper}
      style={{ backgroundImage: `url("${imageUrl}")` }}
    >
      <div className={classes.hero}></div>
    </div>
  );
};

export default Hero;
