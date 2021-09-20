import React, { useState, useEffect } from "react";
import classes from "./Stories.module.css";
import { useLocation } from "react-router";
import { getStories, getStoryIds } from "../../hackerApi/hackerApi";
import Story from "./Story/Story";

function Stories() {
  const location = useLocation();
  const [storyids, setStoryids] = useState([]);
  const [story, setStories] = useState([]);
  const [loading, setloading] = useState(true);
  const [currentStoryIndex, setCurrenStoryIndex] = useState(30);

  const [maxStories, setMaxStories] = useState(0);

  useEffect(() => {
    getStoryIds(location.pathname).then((data) => {
      setStoryids(data.data);
      setMaxStories(data.data.length);
    });
    setStories([]);
    setloading(true);
    setCurrenStoryIndex(30);
  }, [location.pathname]);

  useEffect(() => {
    getStories(storyids.slice(0, 30)).then((storiesList) => {
      setStories(storiesList);
      setloading(false);
    });
  }, [storyids]);

  const nextPageHandler = () => {
    setloading(true);

    getStories(storyids.slice(currentStoryIndex, currentStoryIndex + 30)).then(
      (storiesList) => {
        setStories(storiesList);
        setloading(false);
        setCurrenStoryIndex((prev) => prev + 30);
      }
    );
  };

  const backPageHandler = () => {
    setloading(true);

    getStories(storyids.slice(currentStoryIndex, currentStoryIndex + 30)).then(
      (storiesList) => {
        setStories(storiesList);
        setloading(false);
        setCurrenStoryIndex((prev) => prev - 30);
      }
    );
  };

  let storyList = null;
  let hasNextPage = null;
  let hasPrevPage = null;

  if (!loading) {
    var index = 0;
    storyList = story.map((el, i) => {
      if (el !== null) {
        index = index + 1;
        return (
          <Story data={el} number={index + currentStoryIndex - 30} key={i} />
        );
      }else{
        return null
      }
    });
  }
  if (!loading && currentStoryIndex < maxStories) {
    hasNextPage = <div onClick={nextPageHandler}>more</div>;
  }
  if (!loading && currentStoryIndex > 30) {
    hasPrevPage = <div onClick={backPageHandler}>back</div>;
  }
  return (
    <div className={classes.Stories}>
      {storyList}
      <div className={classes.StoryPageNavigation}>
        {hasPrevPage}
        {hasNextPage}
      </div>
    </div>
  );
}

export default Stories;

/* {storyids.slice(0, 30).map((id) => (
        <Story id={id} key={id} />
    ))} */
