import React from "react";
import classes from "./Stories.module.css";

const data = {
  by: "Funes-",
  descendants: 650,
  id: 28550764,
  kids: [28552193, 28551057, 28554552, 28551558, 28563998],
  score: 3251,
  time: 1631794574,
  title:
    "A search engine that favors text-heavy sites and punishes modern web design",
  type: "story",
  url: "https://search.marginalia.nu/",
};
function Stories() {
  return (
    <div className={classes.Stories}>
      <div className={classes.Story}>
        <div className={classes.Number}>1.</div>
        <div className={classes.StoryData}>
          <div className={classes.Title}>{data.title}</div>
          <div className={classes.Desc}>
            {`${data.score} score by ${data.by}, ${data.kids.length} comments, ${Math.floor(data.time/1000/60/60/24/7)} weeks ago`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
