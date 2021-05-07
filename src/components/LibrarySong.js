import React from 'react';

const LibrarySong = ({ cover, name, artist }) => {
  return (
    <div className="library-song">
      <img src={cover} alt={name} />
      <div class="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
