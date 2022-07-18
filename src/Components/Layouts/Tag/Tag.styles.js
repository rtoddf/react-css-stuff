import styled from 'styled-components';

export const StyledTag = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.bodyTextColor};
  border-radius: 10px;
  box-shadow: 0 2px 26px 4px rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.dawgNationRed} 0%,
    ${({ theme }) => theme.grays.black} 80%
  );

  .number {
    position: absolute;
    top: -10px;
    left: -10px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-image: linear-gradient(
      45deg,
      ${({ theme }) => theme.grays.black} 0%,
      ${({ theme }) => theme.colors.dawgNationRed} 50%,
      ${({ theme }) => theme.grays.black} 100%
    );
    color: white;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.grays.white};
    font-size: 1.5rem;
    font-weight: 600;
  }

  .cap {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dawgNationGray};

    .name {
      margin: 10px 10px 5px;
      color: ${({ theme }) => theme.grays.white};
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .starRating {
      height: 15px;
      margin: 0 10px 10px;

      path {
        fill: ${({ theme }) => theme.grays.black};
      }
    }

    .starRating-1 path:first-child,
    .starRating-2 path:nth-child(-n + 2),
    .starRating-3 path:nth-child(-n + 3),
    .starRating-4 path:nth-child(-n + 4),
    .starRating-5 path:nth-child(-n + 5) {
      fill: ${({ theme }) => theme.grays.white};
    }
  }

  figure {
    margin: 20px;
    padding: 0;
    overflow: hidden;
    border-radius: 40px;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.grays.white},
      0 0 0 6px ${({ theme }) => theme.grays.black};

    img {
    }
  }

  .bio {
    padding: 0 20px 20px;
    color: ${({ theme }) => theme.grays.white};
    font-family: ${({ theme }) => theme.fonts.baseFont};
    font-size: 1rem;
    line-height: 1.5rem;

    .position {
      font-weight: 400;
    }
  }
`;
