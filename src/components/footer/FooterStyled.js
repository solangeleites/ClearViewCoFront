import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 0;
  border-top: 1px solid #203040;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  width: 90%;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #203040;
  padding-right: 50px;
`;

export const Title = styled.h2`
  font-size: 22px;
  color: #203040;
`;
