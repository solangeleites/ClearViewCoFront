import styled from 'styled-components';
import { tablet } from '../../queries/mediaQueries';

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
  height: 450px;
  border: 1px solid lightgray;
  padding: 20px 0px;
  border-radius:10px;

  ${tablet}{
    width: 300px;
    height: 300px;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;

  ${tablet}{
    width: 200px;
    height: 200px;
  }
`;

export const Name = styled.h3`
  font-size: 18px;

  ${tablet}{
    font-size: 14px;
  }
`;

export const Price = styled.p`
  font-size: 18px;

  ${tablet}{
    font-size: 14px;
  }
`;

export const Button = styled.button`
  background: #94a94fd4 ;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  &:hover {
    background:  #10583a;
    color: white;
  }

  ${tablet}{
    height: 40px;
    width: 40px;
  }
`;

export const ContainerDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const ContainerButtons = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`;
