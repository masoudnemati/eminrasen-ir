import React, { Component } from "react";
import { FaHotjar } from "react-icons/fa";
import Loading from "../Components/Loading";
import { SongContext } from "../context";
import Song from "./Song";

export default class NewSongsHome extends Component {
  static contextType = SongContext;

  render() {
    let { loading, newSongsHome: songs } = this.context;
    songs = songs.map((song) => {
      return <Song key={song.id} song={song} />;
    });

    return (
      <section className="new-songs-home">
        <p>
          <FaHotjar /> جدیدترین آهنگ ها
        </p>
        <div className="new-songs-home-center">
          {loading ? <Loading /> : songs}
        </div>
      </section>
    );
  }
}
