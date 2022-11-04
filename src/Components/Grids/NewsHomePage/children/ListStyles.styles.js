import styled from 'styled-components';

export const ListStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1440px;
  margin: 20px auto;
  padding: 10px;

  .item {
    display: grid;
    gap: 20px;
    grid-template-columns: 85px auto;
  }

  .order {
    color: #999;
    font-size: 24px;
    font-weight: 600;
  }

  .headline {
    font-size: 16px;
    font-weight: 800;
    line-height: 2;
  }

  .text {
    color: #999;
    font-size: 14px;
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 100%;
    margin: 0 auto;
  }
`;
