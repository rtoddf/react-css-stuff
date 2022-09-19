import styled from 'styled-components';

export const StyledPulse = styled.div`
  margin-top: 60px;

  .circle {
    &:nth-child(1) {
      background: ${({ theme }) => theme.colors.blueGreen};
      /* name duration delay timing-function iteration-count */
      /* these are also available - direction | fill-mode | play-state */
      animation: r1 2s 0s ease-out infinite;
    }

    &:nth-child(2) {
      background: ${({ theme }) => theme.colors.blue};
      animation: r2 2s 0.25s ease-out infinite;
    }

    &:nth-child(3) {
      background: ${({ theme }) => theme.colors.orange};
      animation: r3 2s 0.5s ease-out infinite;
    }

    &:nth-child(4) {
      background: ${({ theme }) => theme.colors.red};
      animation: r4 2s 0.75s ease-out infinite;
    }

    &:nth-child(5) {
      background: ${({ theme }) => theme.colors.green};
      animation: r5 2s 1s ease-out infinite;
    }

    &:nth-child(6) {
      background: ${({ theme }) => theme.colors.brown};
      animation: r6 2s 1.25s ease-out infinite;
    }

    // huh???
    &:hover {
      background: transparent;
      animation: pulse-hover 0.5s 0.4s ease-out infinite;
    }
  }

  @keyframes r1 {
    0% {
      box-shadow: 0 0 8px 6px ${({ theme }) => theme.colors.blueGreen},
        0 0 0px 0px ${({ theme }) => theme.grays.white},
        0 0 0px 0px ${({ theme }) => theme.grays.white};
    }
    10% {
      box-shadow: 0 0 8px 6px ${({ theme }) => theme.colors.blueGreen},
        0 0 12px 10px ${({ theme }) => theme.grays.white},
        0 0 12px 14px ${({ theme }) => theme.colors.blueGreen};
    }
    100% {
      box-shadow: 0 0 8px 6px rgba(26, 217, 255, 0),
        0 0 0px 40px ${({ theme }) => theme.grays.white},
        0 0 0px 40px ${({ theme }) => theme.grays.white};
    }
  }

  @keyframes r2 {
    0% {
      box-shadow: 0 0 8px 6px ${({ theme }) => theme.colors.blue},
        0 0 0px 0px ${({ theme }) => theme.grays.white},
        0 0 0px 0px ${({ theme }) => theme.grays.white};
    }
    10% {
      box-shadow: 0 0 8px 6px ${({ theme }) => theme.colors.blue},
        0 0 12px 10px ${({ theme }) => theme.grays.white},
        0 0 12px 14px ${({ theme }) => theme.colors.blue};
    }
    100% {
      box-shadow: 0 0 8px 6px rgba(26, 217, 255, 0),
        0 0 0px 40px ${({ theme }) => theme.grays.white},
        0 0 0px 40px ${({ theme }) => theme.grays.white};
    }
  }

  @keyframes r3 {
    0% {
      box-shadow: 0 0 8px 6px ${({ theme }) => theme.colors.orange},
        0 0 0px 0px ${({ theme }) => theme.grays.white},
        0 0 0px 0px ${({ theme }) => theme.grays.white};
    }
    10% {
      box-shadow: 0 0 8px 6px ${({ theme }) => theme.colors.orange},
        0 0 12px 10px ${({ theme }) => theme.grays.white},
        0 0 12px 14px ${({ theme }) => theme.colors.orange};
    }
    100% {
      box-shadow: 0 0 8px 6px rgba(26, 217, 255, 0),
        0 0 0px 40px ${({ theme }) => theme.grays.white},
        0 0 0px 40px ${({ theme }) => theme.grays.white};
    }
  }

  @keyframes r4 {
    0% {
      box-shadow: 0 0 8px 6px ${({ theme }) => theme.colors.red},
        0 0 0px 0px ${({ theme }) => theme.grays.white},
        0 0 0px 0px ${({ theme }) => theme.grays.white};
    }
    10% {
      box-shadow: 0 0 8px 6px ${({ theme }) => theme.colors.red},
        0 0 12px 10px ${({ theme }) => theme.grays.white},
        0 0 12px 14px ${({ theme }) => theme.colors.red};
    }
    100% {
      box-shadow: 0 0 8px 6px rgba(26, 217, 255, 0),
        0 0 0px 40px ${({ theme }) => theme.grays.white},
        0 0 0px 40px ${({ theme }) => theme.grays.white};
    }
  }

  @keyframes r5 {
    0% {
      box-shadow: 0 0 8px 6px ${({ theme }) => theme.colors.green},
        0 0 0px 0px ${({ theme }) => theme.grays.white},
        0 0 0px 0px ${({ theme }) => theme.grays.white};
    }
    10% {
      box-shadow: 0 0 8px 6px ${({ theme }) => theme.colors.green},
        0 0 12px 10px ${({ theme }) => theme.grays.white},
        0 0 12px 14px ${({ theme }) => theme.colors.green};
    }
    100% {
      box-shadow: 0 0 8px 6px rgba(26, 179, 255, 0),
        0 0 0px 40px ${({ theme }) => theme.grays.white},
        0 0 0px 40px ${({ theme }) => theme.grays.white};
    }
  }

  @keyframes r6 {
    0% {
      box-shadow: 0 0 8px 6px ${({ theme }) => theme.colors.brown},
        0 0 0px 0px ${({ theme }) => theme.grays.white},
        0 0 0px 0px ${({ theme }) => theme.grays.white};
    }
    10% {
      box-shadow: 0 0 8px 6px ${({ theme }) => theme.colors.brown},
        0 0 12px 10px ${({ theme }) => theme.grays.white},
        0 0 12px 14px ${({ theme }) => theme.colors.brown};
    }
    100% {
      box-shadow: 0 0 8px 6px rgba(26, 179, 255, 0),
        0 0 0px 40px ${({ theme }) => theme.grays.white},
        0 0 0px 40px ${({ theme }) => theme.grays.white};
    }
  }
  // begin keyframes animations

  // begin pulse animations
  @keyframes pulse-hover {
    from {
      box-shadow: 0 0 8px 6px ${({ theme }) => theme.grays.white},
        0 0 12px 10px ${({ theme }) => theme.grays.white},
        0 0 12px 14px ${({ theme }) => theme.grays.white};
    }
    to {
      box-shadow: 0 0 8px 6px rgba(255, 255, 255, 0),
        0 0 4px 40px ${({ theme }) => theme.grays.white},
        0 0 4px 41px rgba(255, 255, 255, 0);
    }
  }
`;
