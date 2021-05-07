import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({
  songs,
  setCurrentSong,
  setIsPlaying,
  isPlaying,
  audioRef,
}) => {
  //   console.log(data);
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              key={song.id}
              {...song}
              songs={songs}
              setCurrentSong={setCurrentSong}
              setIsPlaying={setIsPlaying}
              isPlaying={isPlaying}
              audioRef={audioRef}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
