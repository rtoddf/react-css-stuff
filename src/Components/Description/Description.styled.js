import styled from 'styled-components';

export const StyledDescription = styled.div`
  font-family: ${({ theme }) => theme.fonts.baseFont};

  h3 {
    font-size: 1rem;
    margin: 0.625rem 0;
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
