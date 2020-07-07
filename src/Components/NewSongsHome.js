import React from "react";
import { FaHotjar } from "react-icons/fa";
// import OghlumSong from "../assets/Emin - oghlum.mp3";

export default function Follow() {
  return (
    <div className="new-songs-home">
      <p>
        <FaHotjar /> جدیدترین آهنگ ها
      </p>
      {/* <div className="single-new-songs-home">
        <div className="single-new-songs-home-info">
          <h4>Oghlum</h4>
          <p>Emin Rasen</p>
        </div>
        <audio src={OghlumSong} controls preload="metadata"></audio>
      </div> */}
    </div>
  );
}
