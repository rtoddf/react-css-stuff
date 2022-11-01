import styled from 'styled-components';
import quotes from './images/bg-pattern-quotation.svg';

export const TestimonialStyles = styled.div`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  .testimonials {
    max-width: 1440px;
    margin: 20px auto;
    padding: 20px;

    display: grid;
    gap: 30px;
    grid-template-columns: repeat(4, 1fr);
  }

  .card {
    background: #fff;
    border-radius: 10px;
    padding: 30px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

    &:nth-of-type(1) {
      grid-column: 1 / 3;
    }

    &:nth-of-type(4) {
      grid-column: 2 / 4;
      grid-row: 2;
    }

    &:nth-of-type(3) {
      grid-column: 1 / 2;
      grid-row: 2;
    }

    &:nth-of-type(5) {
      grid-column: 4 / 5;
      grid-row: 1 / 3;
    }

    &.card--bg-purple {
      background: hsl(263, 55%, 52%);
      color: #fff;
      background-image: url(${quotes});
      background-repeat: no-repeat;
      background-position: top 10px right 100px;
    }

    &.card--bg-gray-blue {
      background: hsl(217, 19%, 35%);
      color: #fff;
    }

    &.card--bg-black-blue {
      background: hsl(219, 29%, 14%);
      color: #fff;
    }

    .card__header {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      .card__img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid #996ed9;
        margin-right: 10px;
      }

      h3 {
        font-size: 15px;
      }

      p {
        opacity: 0.56;
      }
    }

    .card__lead {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1.3;
      margin-bottom: 20px;
    }

    .card__quote {
      font-size: 15px;
      font-weight: 500;
      line-height: 1.4;
      opacity: 0.7;
    }
  }

  footer {
    text-align: center;
  }

  @media (max-width: 768px) {
    .testimonials {
      grid-template-columns: 1fr;
      width: 100%;
    }

    /* you can switch around the order if you like */
    .card {
      &:nth-of-type(1) {
        grid-column: 1;
        grid-row: 3;
      }

      &:nth-of-type(2) {
        grid-row: 2;
      }

      &:nth-of-type(3) {
        grid-column: 1;
        grid-row: 5;
      }

      &:nth-of-type(4) {
        grid-column: 1;
        grid-row: 4;
      }

      &:nth-of-type(5) {
        grid-column: 1;
        grid-row: 1;
      }
    }
  }
`;
