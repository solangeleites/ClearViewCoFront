import styled from 'styled-components';

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
`;

export const Image = styled.img`
  height: 600px;
  width: 400px;
`;

export const  Formulario = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 600px;
    `;
export const  Input = styled.input`
    height: 30px;
    width: 300px;
    letter-spacing: 1px;
    border: 1px solid #131415;
    font-family: Manrope, sans-serif;
    outline: none;
    padding-left: 10px;
    `;

    export const TextArea = styled.textarea`  
    padding: 10px;
    width: 300px;
    height: 300px;
    outline: none;
    border: 1px solid #131415;
    font-family: Manrope, sans-serif;
    letter-spacing: 1px;
    `

