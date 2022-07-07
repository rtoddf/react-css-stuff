import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  grid-gap: ${({ gap }) => (gap !== undefined ? gap : '2.5rem')};
  grid-auto-rows: 1fr;
  width: 100%;
  margin: 0 auto;

  justify-items: ${({ justify }) =>
    justify === 'center' ? 'center' : 'inherit'};

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

  &[data-col='7'] {
    grid-template-columns: repeat(7, [col] 1fr);
  }

  @media (max-width: 900px) {
    &[data-col='2'],
    &[data-col='3'],
    &[data-col='4'] {
      grid-template-columns: repeat(2, [col] 1fr);
    }

    &[data-col='6'],
    &[data-col='7'] {
      grid-template-columns: repeat(3, [col] 1fr);
    }
  }

  @media (max-width: 600px) {
    &[data-col='2'],
    &[data-col='3'],
    &[data-col='4'],
    &[data-col='6'],
    &[data-col='7'] {
      grid-template-columns: repeat(1, [col] 1fr);
    }
  }
`;
