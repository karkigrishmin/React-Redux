import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
    //conditional rendering
  if (!song) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

//to get state from provider we define function
const mapStateToProps = (state) => {
  //seeing the final combine reducers key name
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
