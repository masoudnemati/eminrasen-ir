import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import SingleSong from "./pages/SingleSong";
import MusicVideo from "./pages/MusicVideo";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Error from "./pages/Error";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/eminrasen-ir" component={Home} />
        <Route exact path="/songs" component={Songs} />
        <Route exact path="/musicvideo" component={MusicVideo} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/songs/:slug" component={SingleSong} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
