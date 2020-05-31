import { combineReducers } from "redux";

//Reducer function
const songsReducer = () => {
  return [
    { title: "Happier", duration: "4:02" },
    { title: "Perfect", duration: "3:50" },
    { title: "Galway girl", duration: "3:30" },
    { title: "Thinking out loud", duration: "2:50" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

//combining reducer functions
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
