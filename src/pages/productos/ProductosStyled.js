import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h2`
  font-size: 24px;
`;

export const ContainerProductos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 350px;
  border: 1px solid black;
  padding: 20px 0px;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

export const Name = styled.h3`
  font-size: 18px;
`;

export const Price = styled.p`
  font-size: 18px;
`;

export const Button = styled.button`
  background: lightgray;
  color: white;
  border: none;
  cursor: pointer;
  height: 45px;
  width: 40px;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: gray;
  }
`;

export const ContainerDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
`;

export const ContainerButtons = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`;
