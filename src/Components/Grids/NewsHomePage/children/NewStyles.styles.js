import styled from 'styled-components';

export const NewStyles = styled.div`
  .new {
    padding: 10px 20px;
    background: #333;
    color: #fff;
    background: #333;

    .head {
      margin-bottom: 15px;
      color: #fe0000;
      font-size: 2rem;
      font-weight: 800;
    }

    .item {
      margin-bottom: 20px;
      padding-bottom: 20px;

      .headline {
        margin-bottom: 15px;
        color: #fff;
        font-weight: 800;
      }

      .content {
        font-size: 14px;
        opacity: 0.7;
      }
    }
  }

  @media (max-width: 600px) {
  }
`;
