import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios.get('/api/playlists')
      .then(res => setPlaylists(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Playlists</h2>
      {playlists.map(pl => (
        <div key={pl.playlistId} className="p-4 border rounded mb-2">
          <h3 className="font-semibold text-lg">{pl.playlistName}</h3>
        </div>
      ))}
    </div>
  );
};

export default Playlists;