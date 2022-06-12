import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  margin: 10px;
  padding: 20px;
  background-color: ${({ color, theme }) => (color ? color : theme.grays.four)};
  color: ${({ theme }) => theme.grays.white};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  text-transform: ${({ textStyle }) => (textStyle ? textStyle : 'capitalize')};
  transition: color 0.5s, background-color 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.grays.four};
    color: ${({ theme }) => theme.grays.white};
  }

  &.hidden {
    display: none;
  }
`;

// background-color: ${({ color }) => color.color};
