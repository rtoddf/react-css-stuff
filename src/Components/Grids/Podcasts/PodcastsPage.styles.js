import styled from 'styled-components';

export const PodcastsPage = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
  max-width: 1600px;
  margin: 0 auto;
  font-size: 16px;

  .image,
  .text {
    grid-row: 1 / 2;
  }

  .image {
    grid-column: 1 / -1;
  }

  .text {
    grid-column: 2 / 5;
    align-self: center;
    /* justify-self: center; */
    padding: 20px;
    background: rgba(17, 17, 17, 0.9);
    color: #fff;

    .headline {
      margin-bottom: 20px;
      font-size: 250%;
      line-height: 1.2;
      font-family: 'Montserrat', sans-serif;
      text-transform: uppercase;
      font-weight: 100;

      span:nth-of-type(1) {
        display: block;
        color: #fe0000;
      }
    }

    p {
      font-size: 100%;
      font-weight: 100;
      opacity: 0.7;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 100%;
    margin: 0 auto;
  }
`;


// src/Components/Container/Container.styled.js