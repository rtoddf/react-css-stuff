import styled from 'styled-components';

export const PodcastsPage = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1440px;
  margin: 20px auto;
  padding: 10px;
  font-size: 16px;

  .image,
  .text {
    grid-row: 1 / 2;
  }

  .image {
    grid-column: 2 / -1;
  }

  .text {
    grid-column: 1 / 3;
    align-self: center;
    /* justify-self: center; */
    padding: 20px;
    background: rgba(17, 17, 17, 0.9);
    color: #fff;

    .headline {
      margin-bottom: 20px;
      font-size: 250%;
      line-height: 1.2;
      text-transform: uppercase;
      font-weight: 600;

      span:nth-of-type(1) {
        display: block;
        color: #fe0000;
      }
    }

    p {
      font-size: 100%;
      opacity: 0.7;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 100%;
    margin: 0 auto;
  }
`;
