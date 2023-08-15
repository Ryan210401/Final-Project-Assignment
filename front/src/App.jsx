import React, { useState } from 'react';
import YouTube from 'react-youtube';

const TokpedPlay = ({ videoId }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(50);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseInt(event.target.value, 10);
    setVolume(newVolume);
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />

      <div>
        <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default TokpedPlay;
