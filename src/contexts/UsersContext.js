import React, { createContext, useReducer, useState } from "react";
import { users } from "../backend/db/users";

export const UsersContext = createContext();
export const UsersProvider = ({ children }) => {
  const allUsers = users;

  const [currentUser, setCurrentUser] = useState(allUsers[0]);

  const usersReducer = (state, { type, payload }) => {};

  const [myUsers, usersDispatch] = useReducer(usersReducer, allUsers);

  return (
    <UsersContext.Provider
      value={{ myUsers, currentUser, setCurrentUser, usersDispatch }}
    >
      {children}
    </UsersContext.Provider>
  );
};
