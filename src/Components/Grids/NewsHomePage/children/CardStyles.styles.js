import styled from 'styled-components';

export const CardStyles = styled.div`
  /* for this element */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);

  /* for how this compoennt works in the parent element */
  grid-column: 1 / 3;
  /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
  font-size: 16px;

  .headline {
    font-size: 200%;
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
      font-size: 100%;
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
    font-size: 75%;

    .author {
      display: flex;
      align-items: center;

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
    }
  }

  .lead {
    grid-column: 1 / 3;
  }

  .button {
    width: 50%;
    margin-top: 20px;
    padding: 10px 20px;
    background: #fe0000;
    color: #fff;
    font-size: 87.5%;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    .content {
      grid-template-columns: 1fr;
      padding: 20px 0 0;
    }
  }
`;
