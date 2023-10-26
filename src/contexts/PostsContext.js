import React, { createContext, useContext, useState } from "react";
import { posts } from "../backend/db/posts";
import { useReducer } from "react";
import { UsersContext } from "./UsersContext";
import moment from "moment";

export const PostsContext = createContext();
export const PostsProvider = ({ children }) => {
  const { currentUser, setCurrentUser } = useContext(UsersContext);
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
            (a, b) => moment(b.createdAt) - moment(a.createdAt)
          );
        }
        if (payload === "OLDEST") {
          return [...state].sort(
            (a, b) => moment(a.createdAt) - moment(b.createdAt)
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
      case "CREATE_POST":
        return [...state, payload];
      case "BOOKMARK_POST":
        return [...state].map((post) => {
          if (post?._id === payload) {
            setCurrentUser({
              ...currentUser,
              bookmarks: [...currentUser?.bookmarks, payload],
            });
          }
          return post;
        });

      case "UNBOOKMARK_POST":
        return [...state].map((post) => {
          if (post._id === payload) {
            setCurrentUser({
              ...currentUser,
              bookmarks: [...currentUser?.bookmarks].filter(
                (id) => id !== payload
              ),
            });
          }
          return post;
        });

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
