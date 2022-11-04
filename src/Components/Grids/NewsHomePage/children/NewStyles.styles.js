import styled from 'styled-components';

export const NewStyles = styled.div`
  font-size: 100%;

  .new {
    padding: 10px 20px;
    background: #333;
    color: #fff;
    background: #333;

    .head {
      margin-bottom: 15px;
      color: #fe0000;
      font-size: 200%;
      font-weight: 800;
    }

    .item {
      margin-bottom: 20px;
      padding-bottom: 20px;

      .headline {
        margin-bottom: 15px;
        color: #fff;
        font-size: 100%;
        font-weight: 600;
      }

      .content {
        font-size: 87.5%;
        font-weight: 400;
        opacity: 0.7;
      }
    }
  }

  @media (max-width: 600px) {
  }
`;
