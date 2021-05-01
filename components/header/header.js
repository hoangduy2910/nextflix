import Logo from "./logo/logo";
import MainNav from "./main-nav/main-nav";
import SearchBar from "./search-bar/search-bar";
import classes from "./header.module.scss";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <Logo />
      <MainNav />
      <SearchBar />
    </header>
  );
};

export default Header;
