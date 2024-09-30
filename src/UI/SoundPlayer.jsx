import React, { useState } from 'react';

const SoundPlayer = (props) => {

  return (
    <div>
      <h2>Sound Player</h2>
      
      <button onClick={handlePlay} disabled={isPlaying}>Play</button>
      <button onClick={handlePause} disabled={!isPlaying}>Pause</button>
    </div>
  );
};

export default SoundPlayer;