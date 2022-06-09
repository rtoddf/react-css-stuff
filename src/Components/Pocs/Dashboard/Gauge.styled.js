import styled from 'styled-components';

export const StyledGauge = styled.article`
  h3 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }

  svg {
    transform: rotate(-90deg);
    width: 200px;
    height: 200px;
  }

  circle {
    r: 80;
    cy: 50%;
    cx: 50%;
    stroke: ${({ strokeColor }) => strokeColor};
    stroke-width: 20px;
    fill: none;
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    animation: html 1s ease-out forwards;
  }

  @keyframes html {
    to {
      stroke-dashoffset: ${({ amount }) => amount};
    }
  }
`;
