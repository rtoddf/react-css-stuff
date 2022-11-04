import styled from 'styled-components';

export const NewsHome = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1440px;
  margin: 20px auto;
  padding: 10px;

  .lead {
    grid-column: 1 / 3;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 100%;
    margin: 0 auto;
  }
`;
