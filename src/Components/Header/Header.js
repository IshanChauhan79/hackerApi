import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/images/y18.gif";

function Header() {
  return (
    <div className={classes.Header}>
      <div className={classes.Logo}>
        <img src={logo} alt="" />
      </div>
      <div className={classes.HeaderComp}>
        <div className={classes.Title}>Hacker News</div>
        <div className={classes.Nav}>
          <div>Best</div>
          <div>Top</div>
          <div>Latest</div>
          <div>Ask</div>
          <div>Shows</div>
          <div>Jobs</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
