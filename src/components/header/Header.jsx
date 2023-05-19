import React, { useRef, useEffect } from 'react';
import { Video } from './HeaderStyled';

const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <Video
      muted
      autoPlay
      playsInline
      loop
      ref={videoRef}
      src="/video/video1.mp4"
      type="video/mp4"
      style={{ position: 'relative' }}
    />
  );
};

export default Header;
