import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  width: 100%;
  margin: 0 auto;
  justify-items: ${({ justify }) =>
    justify === 'center' ? 'center' : 'start'};

  &[data-col='2'] {
    grid-template-columns: repeat(2, [col] 1fr);
  }

  &[data-col='3'] {
    grid-template-columns: repeat(3, [col] 1fr);
  }

  &[data-col='4'] {
    grid-template-columns: repeat(4, [col] 1fr);
  }

  &[data-col='6'] {
    grid-template-columns: repeat(6, [col] 1fr);
  }

  @media (max-width: 900px) {
    &[data-col='2'],
    &[data-col='3'],
    &[data-col='4'] {
      grid-template-columns: repeat(2, [col] 1fr);
    }

    &[data-col='6'] {
      grid-template-columns: repeat(3, [col] 1fr);
    }
  }

  @media (max-width: 600px) {
    &[data-col='2'],
    &[data-col='3'],
    &[data-col='4'],
    &[data-col='6'] {
      grid-template-columns: repeat(1, [col] 1fr);
    }
  }
`;
