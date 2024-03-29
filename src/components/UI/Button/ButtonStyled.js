import styled from 'styled-components';

export const ButtonStyle = styled.button`
  background: grey;
  padding: 0.8rem 1rem;
  outline: none;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: black;
    transition: all 0.3s ease-in-out;
  }
`;