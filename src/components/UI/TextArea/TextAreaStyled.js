import styled from "styled-components";

export const TextAreaStyle = styled.textarea`
  border: 1px solid;
  border-color: ${({ error }) => (error ? "crimson" : "black")};
  border-radius: 5px;
  padding: 10px;
  width: 350px;
  resize: none;
  background: transparent;
  outline: none;
`;
export const Error = styled.span`
  padding-left: 5px;
  color: crimson;
`;
