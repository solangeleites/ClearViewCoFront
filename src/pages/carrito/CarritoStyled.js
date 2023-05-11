import styled from 'styled-components';
import { ListContainer } from '../favoritos/FavoritosStyled';

export const ListContainerCart = styled(ListContainer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  gap: 30px;
  background: none;
  padding: 20px;
`;
export const DetalleCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 70%;
`;

export const ResumenCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    justify-content: space-around;
  width: 30%;
  height: 200px;
  border: 1px solid grey;
`;

export const ContainerResumen = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
  width: 70%;
`;
export const DescriptionResumen = styled.p`
  font-size: 12px;
  font-weight: 600;
`;
