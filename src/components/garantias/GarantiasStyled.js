import styled from 'styled-components';
import { tablet } from '../../queries/mediaQueries';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 0;
  background-color: #809a2b`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  flex-wrap: wrap;

  ${tablet}{
    flex-direction: column;
    height: 800px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 200px;
  width: 300px;
  border:1px solid black;
  border-radius: 3px;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 22px;
  color: white;
  text-align: center;
`;
export const Desc= styled.p`
  font-size: 14px;
  color: white;
  text-align: center;
`;

export const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -50px;
`;
