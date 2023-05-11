import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 0;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  flex-wrap: wrap;
  gap: 30px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const Image = styled.img`
  height: 700px;
  width: 650px;
  object-fit: cover;
`;
export const Description = styled.p`
  font-size: 14px;
  text-align: center;
  font-weight:400;
  margin-bottom: 20px;
  position: absolute;
  z-index: 1;
  color: #ffff;
  bottom: 100px;
  left: 50px;
  text-shadow: ' 0 0 3px #131415',
`;
export const Button = styled.button`
  border: none;
  background: white;
  border: 0.5px solid #131415;
  padding: 15px 30px;
  font-family: 'Manrope', sans-serif;
  letter-spacing: 1px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out;
  position: absolute;
  z-index: 1;
  bottom: 50px;
  left: 50px;

  &::after {
    content: '';
    background-color: #131415;
    position: absolute;
    transform: translateX(-50%);
    transition: transform 0.3s ease;
  }
  &:hover {
    background-color: transparent;
    border: 0.5px solid #ffff;
    color: #ffff;
    transform: translateX(0%);
  }
`;