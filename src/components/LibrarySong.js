import React from 'react';

const LibrarySong = ({
  id,
  cover,
  name,
  artist,
  setCurrentSong,
  songs,
  setIsPlaying,
  isPlaying,
  audioRef,
  active,
  setSongs,
}) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(selectedSong[0]);

    // Add Active State
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    console.log(newSongs);

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${active ? 'selected' : ''}`}
    >
      <img src={cover} alt={name} />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;

// if (isPlaying) {
//   const result = await fetch(audioRef.src);
//   const result2 = result.status;
//   console.log(result);
//   if (result2 === 200) {
//     audioRef.current.play();
//   }
// }
