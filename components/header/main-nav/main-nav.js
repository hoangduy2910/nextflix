import Link from "next/link";

import classes from "./main-nav.module.scss";

const initialMainNav = [
  {
    id: "movies",
    name: "Movies",
    subs: [
      { id: "popular", name: "Popular", url: "/movies/popular" },
      { id: "now-playing", name: "Now playing", url: "/movies/now-playing" },
      { id: "upcoming", name: "Upcoming", url: "/movies/upcoming" },
      { id: "top-rated", name: "Top Rated", url: "/movies/top-rated" },
    ],
  },
  {
    id: "tv-shows",
    name: "TV Shows",
    subs: [
      { id: "popular", name: "Popular", url: "/tv-shows/popular" },
      {
        id: "airing-today",
        name: "Airing Today",
        url: "/tv-shows/airing-today",
      },
      { id: "on-tv", name: "On TV", url: "/tv-shows/on-tv" },
      { id: "top-rated", name: "Top Rated", url: "/tv-shows/top-rated" },
    ],
  },
  {
    id: "people",
    name: "Pepole",
    subs: [{ id: "popular", name: "Popular Peple", url: "/people/popular" }],
  },
];

const MainNav = (props) => {
  return (
    <ul className={classes.navItems}>
      {initialMainNav.map((navItem) => (
        <li key={navItem.id} className={classes.navItem}>
          {navItem.name}
          <ul className={classes.subItems}>
            {navItem.subs.map((subItem) => (
              <li key={subItem.id} className={classes.subItem}>
                <Link href={subItem.url}>{subItem.name}</Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default MainNav;
