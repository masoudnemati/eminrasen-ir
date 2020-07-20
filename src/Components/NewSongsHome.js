import React, { Component } from "react";
import { FaHotjar } from "react-icons/fa";
import Loading from "../Components/Loading";
import { SongContext } from "../context";

export default class NewSongsHome extends Component {
  static contextType = SongContext;

  render() {
    const newSongshome = this.context;
    console.log(newSongshome);

    return (
      <div className="new-songs-home">
        <p>
          <FaHotjar /> جدیدترین آهنگ ها
        </p>
      </div>
    );
  }
}
