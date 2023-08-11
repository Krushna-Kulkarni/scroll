import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

import { makeServer } from "./server";
import { UsersContext, UsersProvider } from "./contexts/UsersContext";
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
export { UsersContext };

root.render(
  <React.StrictMode>
    <Router>
      <UsersProvider>
        <App />
      </UsersProvider>
    </Router>
  </React.StrictMode>
);
