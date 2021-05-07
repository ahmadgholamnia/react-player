import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ songs }) => {
  //   console.log(data);
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return <LibrarySong {...song} />;
        })}
      </div>
    </div>
  );
};

export default Library;
