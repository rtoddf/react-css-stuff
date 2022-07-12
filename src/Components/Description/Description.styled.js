import styled from 'styled-components';

export const StyledDescription = styled.div`
  font-family: 'Open Sans', sans-serif;
  background-color: ${({ theme }) => theme.colors.red};

  h3 {
    font-size: 1rem;
    margin: 0.625rem 0;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
