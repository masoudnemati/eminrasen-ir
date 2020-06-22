import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import SingleSong from "./pages/SingleSong";
import Error from "./pages/Error";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/songs" component={Songs} />
        <Route exact path="/songs/:slug" component={SingleSong} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
