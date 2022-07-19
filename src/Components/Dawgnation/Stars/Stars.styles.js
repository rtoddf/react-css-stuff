import styled from 'styled-components';

export const StyledStars = styled.svg`
  height: 15px;
  margin: 0 10px 10px;

  path {
    fill: ${({ theme }) => theme.grays.black};
  }

  &.starRating-1 path:first-of-type,
  &.starRating-2 path:nth-child(-n + 2),
  &.starRating-3 path:nth-child(-n + 3),
  &.starRating-4 path:nth-child(-n + 4),
  &.starRating-5 path:nth-child(-n + 5) {
    fill: ${({ theme }) => theme.grays.white};
  }
`;
