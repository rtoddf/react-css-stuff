import styled from 'styled-components';

export const StyledTransforms = styled.div`
  .box {
    &.rotate-x {
      transform: rotateX(45deg);
    }

    &.rotate-y {
      transform: rotateY(45deg);
    }

    &.rotate-z {
      transform: rotateZ(45deg);
    }

    &.translate-x {
      transform: translateX(100px);
    }
    &.translate-y {
      transform: translateY(100px);
    }

    &.translate-z {
      transform: translateZ(150px);
    }

    &.origin-bottom {
      transform-origin: bottom;
    }

    &.origin-top {
      transform-origin: top;
    }

    &.origin-left {
      transform-origin: left;
    }

    &.origin-right {
      transform-origin: right;
    }

    &.origin-left-top {
      transform-origin: left top;
    }

    &.origin-left-bottom {
      transform-origin: left bottom;
    }

    &.origin-right-top {
      transform-origin: right top;
    }

    &.origin-right-bottom {
      transform-origin: right bottom;
    }
  }
`;
