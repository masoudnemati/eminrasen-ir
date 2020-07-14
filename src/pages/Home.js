import React from "react";
import Hero from "../Components/Hero";
import NewSongsHome from "../Components/NewSongsHome";

export default function Home() {
  window.scrollTo(0, 0);
  return (
    <div>
      <Hero />
      <NewSongsHome />
    </div>
  );
}
