import React, { useState, useEffect } from "react";
import classes from "./Stories.module.css";
import { useLocation, useHistory } from "react-router";
import { getStories, getStoryIds } from "../../hackerApi/hackerApi";

function Stories() {
  // const history = useHistory();
  const location = useLocation();

  const [storyids, setStoryids] = useState([]);
  const [story, setStories] = useState([]);
  // console.log(location, history);
  useEffect(() => {
    getStoryIds(location.pathname).then((data) => setStoryids(data.data));
  }, [location.pathname]);

  useEffect(() => {
    const data = getStories(storyids.slice(0, 30)).then((storiesList) =>
      setStories(storiesList)
    );
  }, [storyids]);

  return (
    <div className={classes.Stories}>
      {story.map((el, i) => (
        <div className={classes.Story} key={el.id}>
          <div className={classes.Number}>{i + 1}.</div>
          <div className={classes.StoryData}>
            <div className={classes.Title}>{el.title}</div>
            <div className={classes.Desc}>
              {`${el.score} score by ${el.by}, ${
                el.kids.length
              } comments, ${Math.floor(
                el.time / 1000 / 60 / 60 / 24 / 7
              )} weeks ago`}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stories;

/* {storyids.slice(0, 30).map((id) => (
        <Story id={id} key={id} />
    ))} */
