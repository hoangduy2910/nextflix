import Header from "../../components/header/header";
import classes from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <div>
        <Header />
        <main className={classes.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
