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

    &.card {
      grid-column: 1 / 3;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, auto);
      /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
      background: #fff;

      .headline {
        font-size: 2rem;
        font-weight: 800;
        line-height: 1.2;
      }

      .content {
        grid-column: 1/3;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
        align-items: center;
        padding: 20px;

        .text {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
      }

      .credits {
        grid-column: 1 / 3;
        grid-row: 1;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
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
            border: 1px solid #fff;
          }
        }

        .posted {
          display: flex;
          align-items: center;
          font-size: 12px;
        }
      }
    }
  }

  .image.lead {
    grid-column: 1 / 3;
  }

  @media (max-width: 600px) {
    .grid-container {
      &.main {
        grid-template-columns: 1fr;
        max-width: 100%;
        margin: 0 auto;
      }

      &.card {
        grid-template-columns: 1fr;

        .content {
          grid-template-columns: 1fr;
          padding: 20px 0 0;
        }
      }
    }
  }
`;
