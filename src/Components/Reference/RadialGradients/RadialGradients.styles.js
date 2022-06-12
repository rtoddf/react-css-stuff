import styled from 'styled-components';

export const StyledRadialGradients = styled.div`
  .circle {
    margin-top: 40px;
    background-image: radial-gradient(
      ${({ theme }) => theme.grays.white},
      ${({ theme }) => theme.colors.orange}
    );

    &.one {
      background-image: radial-gradient(
        circle,
        ${({ theme }) => theme.grays.white},
        ${({ theme }) => theme.colors.orange}
      );
    }

    &.two {
      background-image: radial-gradient(
        circle closest-side,
        ${({ theme }) => theme.grays.white},
        ${({ theme }) => theme.colors.orange}
      );
    }

    &.three {
      background-image: radial-gradient(
        circle at top right,
        ${({ theme }) => theme.grays.white},
        ${({ theme }) => theme.colors.orange}
      );
    }

    &.four {
      background: repeating-radial-gradient(
        circle closest-side,
        ${({ theme }) => theme.colors.orange},
        ${({ theme }) => theme.grays.white} 10%,
        ${({ theme }) => theme.colors.orange} 25%,
        ${({ theme }) => theme.colors.orange} 30%
      );
    }
  }
`;
