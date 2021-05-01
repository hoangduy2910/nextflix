import classes from "./search-bar.module.scss";

const SearchBar = (props) => {
  return (
    <div className={classes.searchBar}>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
