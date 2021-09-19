import React from "react";
import classes from "./Story.module.css";

function Story(props) {
  return (
    <div className={classes.Story} key={props.data.id}>
      <div className={classes.Number}>{props.number}.</div>
      <div className={classes.StoryData}>
        <div className={classes.Title}>{props.data.title}</div>
        <div className={classes.Desc}>
          {`${props.data.score} score by ${props.data.by}, ${
            props.data.kids ? props.data.kids.length + " comments, " : ""
          }${Math.floor(props.data.time / 1000 / 60 / 60 / 24 / 7)} weeks ago`}
        </div>
      </div>
    </div>
  );
}

export default Story;
