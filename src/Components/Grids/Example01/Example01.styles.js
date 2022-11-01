import styled from 'styled-components';

export const Example = styled.div`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    background: #f5f5f5;
  }

  .grid-container {
    max-width: 960px;
    margin: 30px auto;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }

  .item {
    background: orange;
    font-size: 1rem;
    padding: 20px;
    border: 1px solid #333;
  }

  @media (max-width: 500px) {
    .grid-container {
      grid-template-columns: 1fr;
    }
  }
`;
