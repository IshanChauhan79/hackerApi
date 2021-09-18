// import React, { useState, useEffect } from "react";
import axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStory = `${baseUrl}newstories.json?print=pretty`;
export const topStory = `${baseUrl}topstories.json?print=pretty`;
export const bestStory = `${baseUrl}beststories.json?print=pretty`;
export const askstories = `${baseUrl}askstories.json?print=pretty`;
export const showstories = `${baseUrl}showstories.json?print=pretty`;
export const jobstories = `${baseUrl}jobstories.json?print=pretty`;
export const storyUrl = `${baseUrl}item/`;

export const getStoryIds = async (loc) => {
  if (loc === "/best") {
    var link = bestStory;
  } else if (loc === "/top") {
    link = topStory;
  } else if (loc === "/ask") {
    link = askstories;
  } else if (loc === "/shows") {
    link = showstories;
  } else if (loc === "/jobs") {
    link = jobstories;
  } else {
    link = newStory;
  }
  const result = await axios.get(link).then((data) => data);
  return result;
};
export const getStory = async (id) => {
  const result = await axios
    .get(`${storyUrl + id}.json`)
    .then((data) => data.data);
  return result;
};

export const getStories = async (ids) => {
  try {
    const stories = await Promise.all(ids.map((id) => getStory(id)));
    return stories;
  } catch (error) {
    console.log("Error while getting list of stories.");
  }
};

// export default hnapi;
