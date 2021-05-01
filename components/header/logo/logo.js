import Link from "next/link";

import classes from "./logo.module.scss";

const Logo = (props) => {
  return (
    <Link href="/">
      <a className={classes.logo}>
        <strong>Next</strong>
        <span>Flix</span>
      </a>
    </Link>
  );
};

export default Logo;
