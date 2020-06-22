import React, { Component } from "react";
import OghlumSong from "../assets/Emin - oghlum.mp3";

export default function Hero() {
  return (
    <div>
      <div className="hero">
        <h1>EMIN RASEN</h1>
        <h4>Rap Turkmen Bir Dalisi</h4>
        <hr />
      </div>
      <div>
        <figure>
          <figcaption>Oghlum</figcaption>
          <audio controls autoplay preload="metadata" src={OghlumSong}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
      </div>
    </div>
  );
}
