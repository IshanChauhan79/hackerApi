import React from "react";
import classes from "./Story.module.css";

function Story(props) {
  function time2TimeAgo(ts) {
    // This function computes the delta between the
    // provided timestamp and the current time, then test
    // the delta for predefined ranges.

    var d = new Date(); // Gets the current time
    var nowTs = Math.floor(d.getTime() / 1000); // getTime() returns milliseconds, and we need seconds, hence the Math.floor and division by 1000
    var seconds = nowTs - ts;

    // more that two days
    if (seconds > 24 * 3600) {
      return Math.floor(seconds / 24 / 3600) + " days ago";
    }
    if (seconds > 3600) {
      return Math.floor(seconds / 3600) + " hours ago";
    }
    if (seconds > 60) {
      return Math.floor(seconds / 60) + " minutes ago";
    } else {
      return seconds + " seconds ago";
    }
  }
  return (
    <div className={classes.Story} key={props.data.id}>
      <div className={classes.Number}>{props.number}.</div>
      <div className={classes.StoryData}>
        <div className={classes.Title}>
          <a href={props.data.url} target="_blank" rel="noreferrer">
            {props.data.title}
          </a>
        </div>
        <div className={classes.Desc}>
          {`${props.data.score} score by ${props.data.by}, ${
            props.data.kids ? props.data.kids.length + " comments, " : ""
          }${time2TimeAgo(props.data.time)}`}
        </div>
      </div>
    </div>
  );
}

export default Story;
