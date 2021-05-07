import React, { useState } from 'react';
import './styles/app.scss';
// Adding Components
import Song from './components/Song';
import Player from './components/Player';
// Import Util
import data from './util';

function App() {
  // State
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
