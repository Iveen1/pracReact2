import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import UsersData from "./components/context";
import Users from "./components/Users";
import Posts from "./components/Posts";
import updateContext from "./updateContext";

function App() {
  const currentUsers = useContext(UsersData);
  const [state, dispatch] = useReducer(updateContext, currentUsers);
  return (
    <UsersData.Provider value={{ state, dispatch }}>
      <Posts />
      <Users />
    </UsersData.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);