import styled from 'styled-components';

export const NewsHome = styled.div`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .grid-container {
    display: grid;

    &.main {
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      max-width: 1440px;
      margin: 20px auto;
      padding: 10px;
    }

    &.card {
      grid-column: 1 / 3;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, auto);
      /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */

      .headline {
        color: #fe0000;
        font-size: 1.5rem;
        font-weight: 800;
        line-height: 1.2;
      }

      .content {
        grid-column: 1/3;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
        align-items: center;
      }

      .credits {
        grid-column: 1 / 3;
        grid-row: 1;
        display: flex;
        justify-content: space-between;
        padding: 5px 10px;
        background: #333;
        color: #fff;

        .author {
          display: flex;
          align-items: center;
          font-size: 12px;

          img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
            border-radius: 50%50%;
            border: 1px solid #fe0000;
          }
        }

        .posted {
          display: flex;
          align-items: center;
          font-size: 12px;
        }
      }
    }

    .new {
      padding: 20px;
      background: #333;
      color: #fff;

      .head {
        color: #fe0000;
        font-size: 2rem;
        font-weight: 800;
      }

      .item {
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(254, 0, 0, 0.75);

        &:last-child {
          border-bottom: none;
        }

        .headline {
          margin-bottom: 15px;
          font-weight: 800;
        }

        .content {
          font-size: 14px;
        }
      }
    }
  }

  .image.lead {
    grid-column: 1 / 3;
  }

  @media (max-width: 768px) {
    /* .grid-container {
      grid-template-columns: 1fr;
    } */
  }
`;
