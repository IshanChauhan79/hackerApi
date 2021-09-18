import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/images/y18.gif";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={classes.Header}>
      <div className={classes.Logo}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className={classes.HeaderComp}>
        <Link to="/" className={classes.Title}>
          Hacker News
        </Link>
        <div className={classes.Nav}>
          <Link to="/best">Best </Link>
          <Link to="/top">Top </Link>
          <Link to="/ask">Ask </Link>
          <Link to="/shows">Shows </Link>
          <Link to="/jobs">Jobs </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
