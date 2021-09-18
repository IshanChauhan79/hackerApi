import React, { useState, useEffect } from "react";
import classes from "./Stories.module.css";
import { useLocation, useHistory } from "react-router";
import { getStories, getStoryIds } from "../../hackerApi/hackerApi";

function Stories() {
  // const history = useHistory();
  const location = useLocation();

  const [storyids, setStoryids] = useState([]);
  const [story, setStories] = useState([]);
  const [loading, setloading] = useState(true);

  // console.log(location, history);
  useEffect(() => {
    getStoryIds(location.pathname).then((data) => setStoryids(data.data));
    setloading(true);
  }, [location.pathname]);

  useEffect(() => {
    getStories(storyids.slice(0, 30)).then((storiesList) => {
      setStories(storiesList);
      setloading(false);
    });
  }, [storyids]);

  let storyList = "";
  if (loading) {
    storyList = "";
  } else {
    storyList = story.map((el, i) => (
      <div className={classes.Story} key={el.id}>
        <div className={classes.Number}>{i + 1}.</div>
        <div className={classes.StoryData}>
          <div className={classes.Title}>{el.title}</div>
          <div className={classes.Desc}>
            {`${el.score} score by ${el.by}, ${
              el.kids ? el.kids.length + " comments, " : ""
            }${Math.floor(el.time / 1000 / 60 / 60 / 24 / 7)} weeks ago`}
          </div>
        </div>
      </div>
    ));
  }
  return <div className={classes.Stories}>{storyList}</div>;
}

export default Stories;

/* {storyids.slice(0, 30).map((id) => (
        <Story id={id} key={id} />
    ))} */
