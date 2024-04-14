/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const Context = createContext({
  isAuthenticated: false,
});

const Appwrap = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [user, setuser] = useState({});
  const [blogs, setBlogs] = useState({});
  const [mode, setMode] = useState("dark");

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setisAuthenticated,
        user,
        setuser,
        blogs,
        setBlogs,
        mode,
        setMode,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Appwrap />
  </React.StrictMode>
);
