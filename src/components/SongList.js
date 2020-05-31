import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
import "../SongList.css";

//replacing React.Component with Component
class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <li className="item" key={song.title}>
          <div className="btn">
            <button
              onClick={() =>
                /*pass the song in payload property of action and the action creator is called and reducer functions are also called which changes the state*/
                this.props.selectSong(song)
              }
            >
              select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </li>
      );
    });
  }

  render() {
    return <ul>{this.renderList()}</ul>;
  }
}

//we can name this function as our wish,but by convention this one is suitable
//this function returns the state our application
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

//we configure connect by passing function
export default connect(mapStateToProps, { selectSong })(SongList);
