import React, { createContext, useState } from "react";
import { users } from "../backend/db/users";

export const UsersContext = createContext();
export const UsersProvider = ({ children }) => {
  const [myUsers, setMyUsers] = useState(users);

  return (
    <UsersContext.Provider value={{ myUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
