import styled from "styled-components";

export const  FavoritosContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
 export const Title = styled.h2`
    font-size: 22px;
    font-weight: 600;
    `;
    export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: fuchsia;
    width: 90%;
    height: 100%;
    `;

    export const CardFavoritos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 200px;
    border-bottom: 1px solid black;
`;

export const ContainerDetalles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content:space-around;
    width: 70%;
    height: 90%;
    background: lightblue;
`;
export const Delete = styled.button`
    width: 150px;
    height: 30px;
    border-radius: 5px;
    background-color: crimson;
    color: white;
    font-size: 12px;
    font-weight: 600;
    `;




