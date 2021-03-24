import React from "react";
import NavBar from "./Components/navbar";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Screens/Home";
import Login from "./Components/Screens/Login";
import Register from "./Components/Screens/Register";
import Profile from "./Components/Screens/Profile";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/myprofile">
        <Profile />
      </Route>
    </BrowserRouter>
  );
}

export default App;
