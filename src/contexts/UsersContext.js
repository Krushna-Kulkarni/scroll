import React, { createContext, useReducer, useState } from "react";
import { users } from "../backend/db/users";

export const UsersContext = createContext();
export const UsersProvider = ({ children }) => {
  const allUsers = users;

  const [currentUser, setCurrentUser] = useState(allUsers[0]);

  const usersReducer = (state, { type, payload }) => {
    switch (type) {
      case "BOOKMARK_POST": {
        console.log({ type, payload });
        return [...state].map((user) =>
          user?._id === currentUser?._id
            ? {
                ...currentUser,
                bookmarks: [...currentUser?.bookmarks, payload],
              }
            : user
        );
      }

      case "UNBOOKMARK_POST":
        return [...state].map((user) =>
          user._id === currentUser._id
            ? {
                ...currentUser,
                bookmarks: [...currentUser?.bookmarks].filter(
                  (id) => id !== payload
                ),
              }
            : user
        );

      default:
        return state;
    }
  };

  const [myUsers, usersDispatch] = useReducer(usersReducer, allUsers);

  return (
    <UsersContext.Provider value={{ myUsers, currentUser, usersDispatch }}>
      {children}
    </UsersContext.Provider>
  );
};
