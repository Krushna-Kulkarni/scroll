import React, { createContext, useReducer, useState } from "react";
import { users } from "../backend/db/users";

export const UsersContext = createContext();
export const UsersProvider = ({ children }) => {
  const allUsers = users;

  const [currentUser, setCurrentUser] = useState(allUsers[0]);

  const usersReducer = (state, { type, payload }) => {
    let finalState;
    switch (type) {
      case "BOOKMARK_POST":
        finalState = [...state].map((user) =>
          user?._id === currentUser?._id
            ? {
                ...currentUser,
                bookmarks: [...currentUser?.bookmarks, payload],
              }
            : user
        );
        break;
      case "UNBOOKMARK_POST":
        finalState = [...state].map((user) =>
          user._id === currentUser._id
            ? {
                ...currentUser,
                bookmarks: [...currentUser?.bookmarks].filter(
                  (id) => id !== payload
                ),
              }
            : user
        );
        break;
      default:
        return state;
    }
    setCurrentUser(finalState?.find((user) => user?._id === currentUser?._id));
    return finalState;
  };

  const [myUsers, usersDispatch] = useReducer(usersReducer, allUsers);

  return (
    <UsersContext.Provider value={{ myUsers, currentUser, usersDispatch }}>
      {children}
    </UsersContext.Provider>
  );
};
