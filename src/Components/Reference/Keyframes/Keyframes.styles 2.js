import styled from 'styled-components';

export const StyledKeyframes = styled.div`
  .box {
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 6s;
    transform-style: preserve-3d;

    &.rotate-x {
      animation-name: rotate-x;
      animation-delay: 0.5s;
    }

    &.rotate-y {
      animation-name: rotate-y;
      animation-delay: 1s;
    }

    &.rotate-z {
      animation-name: rotate-z;
      animation-delay: 1.5s;
    }

    &.origin-top {
      transform-origin: top;
    }

    &.origin-bottom {
      transform-origin: bottom;
    }

    &.origin-left {
      transform-origin: left;
    }

    &.origin-right {
      transform-origin: right;
    }
  }
`;
