import React, { useEffect } from 'react';

const KeyboardListener = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); 

  return <></>;
};

export default KeyboardListener;