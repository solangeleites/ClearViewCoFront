import styled from 'styled-components';

export const CardGift = styled.div`
  height: 400px;
  width: 300px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #203040;
`;
export const SectionGift = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 0;
`;
export const ImageGift = styled.img`
  height: 250px;
  width: 265px;
`;
export const TitleGift = styled.h2`
  font-size: 16px;
  color: #203040;
`;

export const Description = styled.p`
  font-size: 14px;
  text-align: center;
  font-weight: 400;
`;
export const Price = styled.p`
  font-size: 14px;
  color: #909090;
  text-align: center;
`;
export const Title = styled.h2`
  font-size: 24px;
  color: #203040;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  width: 90%;
  flex-wrap: wrap;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  background: lightgray;
  color: white;
  border: none;
  cursor: pointer;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: gray;
  }
`;
