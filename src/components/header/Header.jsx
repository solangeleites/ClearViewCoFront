import React, { useRef, useEffect } from 'react';
import { Circle, Video } from './HeaderStyled';
import { SlArrowDown } from 'react-icons/Sl';

const Header = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <>
      <Video
        muted
        autoPlay
        playsInline
        loop
        ref={videoRef}
        src="/video/video1.mp4"
        type="video/mp4"
        style={{position: 'relative' }}
      />
      <Circle style={{position: 'absolute',display:'flex', justifyContent:'center', alignItems:'center',  top:'705px'}}>
        <SlArrowDown className='icon' />
      </Circle>
    </>
  );
};

export default Header;
