import styled from 'styled-components';

export const StyledDashboard = styled.div`
  .item {
    position: relative;
    float: left;
  }

  svg {
    transform: rotate(-90deg);
  }

  .circle_animation {
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
  }

  circle {
    r: 69.85699;
    cy: 81;
    cx: 81;
    stroke-width: 8px;
    stroke: #6fdb6f;
    fill: none;
  }

  .html {
    .circle_animation {
      stroke: #6fdb6f;
      animation: html 1s ease-out forwards;
    }
  }

  .css {
    .circle_animation {
      stroke: #69aff4;
      animation: css 1s ease-out forwards;
    }
  }

  @keyframes html {
    to {
      stroke-dashoffset: 80;
    }
  }

  @keyframes css {
    to {
      stroke-dashoffset: 300;
    }
  }
`;
