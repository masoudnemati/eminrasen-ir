import React from "react";
// import { Link } from "react-router-dom";

export default function Song({ song }) {
  const { name, images, singers, songurl } = song;

  return (
    <article>
      <div className="songs-single">
        <img src={images[0]} width="300" height="300" alt="single song" />
        <p>{name}</p>
        <p className="singers">{singers}</p>
        <audio src={songurl} controls />
        <a href={songurl} download={name}>
          Download MP3
        </a>
      </div>
    </article>
  );
}
