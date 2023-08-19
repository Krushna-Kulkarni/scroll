import React, { createContext, useContext, useState } from "react";
import { posts } from "../backend/db/posts";
import { useReducer } from "react";
import { UsersContext } from "./UsersContext";
import moment from "moment";

export const PostsContext = createContext();
export const PostsProvider = ({ children }) => {
  const { currentUser } = useContext(UsersContext);
  const [isFilterOn, setIsFilterOn] = useState(false);

  const allPostsFromDatabase = posts;

  const postsReducer = (state, { type, payload }) => {
    switch (type) {
      case "SORT_POSTS":
        if (payload === "TRENDING") {
          return [...state].sort(
            (a, b) => moment(b.likedBy.length) - moment(a.likedBy.length)
          );
        }
        if (payload === "LATEST") {
          return [...state].sort(
            (a, b) => moment(a.createdAt) - moment(b.createdAt)
          );
        }
        if (payload === "OLDEST") {
          return [...state].sort(
            (a, b) => moment(b.createdAt) - moment(a.createdAt)
          );
        }
        break;
      case "LIKE_POST":
        return [...state].map((post) =>
          post._id === payload
            ? { ...post, likedBy: [...post.likedBy, currentUser?._id] }
            : post
        );
      case "UNLIKE_POST":
        return [...state].map((post) =>
          post._id === payload
            ? {
                ...post,
                likedBy: [...post?.likedBy].filter(
                  (id) => id !== currentUser?._id
                ),
              }
            : post
        );

      default:
        return state;
    }
  };

  const [allPosts, postsDispatch] = useReducer(
    postsReducer,
    allPostsFromDatabase
  );

  return (
    <PostsContext.Provider
      value={{
        allPosts,
        isFilterOn,
        setIsFilterOn,
        postsDispatch,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
