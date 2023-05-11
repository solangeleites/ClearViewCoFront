import styled from 'styled-components';

export const Video = styled.video`
  width: 100%;
  height: calc(100vh - 100px);
  object-fit: cover;
  z-index: 1;
  box-shadow: 0 0 5px rgba(0,0,0,0.5);
`;
export const Circle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    bottom: 5px;
    right: 50%;
    z-index: 2;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    background:  #ffffffb2;
`;
