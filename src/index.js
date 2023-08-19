import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

import { makeServer } from "./server";
import { UsersContext, UsersProvider } from "./contexts/UsersContext";
import { PostsContext, PostsProvider } from "./contexts/PostsContext";
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
export { UsersContext, PostsContext };

root.render(
  <React.StrictMode>
    <Router>
      <UsersProvider>
        <PostsProvider>
          <App />
        </PostsProvider>
      </UsersProvider>
    </Router>
  </React.StrictMode>
);
