import styled from 'styled-components';

export const StyledHeader = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  /* background-color: ${(props) => props.bg}; */
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};

  h1 {
    text-decoration: underline;

    &:hover {
      background-color: black;
      cursor: pointer;
    }
  }
`;
