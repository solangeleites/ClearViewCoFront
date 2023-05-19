import styled from "styled-components";
import { tablet } from "../../queries/mediaQueries";


export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 0;
  background-color:#ffffff99;
  border-top: 1px solid #203040;

`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  width: 90%;
  flex-wrap: wrap;

  ${tablet} {
    flex-direction: column;
    align-items: center;
    gap: 50px;
    width: 100%;
    align-items: center;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${tablet} {
    border-right: none;
    border-bottom: 1px solid #203040;
    padding-bottom: 50px;
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  color: #203040;
  font-weight: 600;
`;

export const ContainerIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 50px;
  `;
