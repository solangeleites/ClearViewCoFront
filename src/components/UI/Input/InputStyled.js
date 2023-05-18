import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 1rem;
  display: flex;
`;

export const InputStyle = styled.input`
  border: 1px solid ;
  border-color: ${({ error }) => (error ? "crimson" : "black")};
  border-radius: 5px;
  padding: 10px;
  width: 350px;
  background: transparent;
  outline: none;
`;

export const Error = styled.span`
  padding-left: 5px;
  color: crimson;
  font-size: 12px;
  font-weight: 500;
`;