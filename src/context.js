import React, { Component } from "react";
import items from "./data";

const SongContext = React.createContext();

class SongProvider extends Component {
  state = {
    songs: [],
    newSongsHome: [],
    loading: true,
  };

  // GetDate
  componentDidMount() {
    let songs = this.formatData(items);
    let newSongsHome = songs.filter((song) => song.new === true);
    this.setState({
      songs,
      newSongsHome,
      loading: false,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let song = { ...item.fields, images, id };
      return song;
    });
    return tempItems;
  }

  render() {
    return (
      <SongContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </SongContext.Provider>
    );
  }
}

const SongConsumer = SongContext.Consumer;

export { SongProvider, SongConsumer, SongContext };
