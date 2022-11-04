import styled from 'styled-components';

export const NewsHome = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1440px;
  margin: 20px auto;
  padding: 10px;

  .button {
    width: 50%;
    margin-top: 20px;
    padding: 10px 20px;
    background: #fe0000;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  .lead {
    grid-column: 1 / 3;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 100%;
    margin: 0 auto;
  }
`;
