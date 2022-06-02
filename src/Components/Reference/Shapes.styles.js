import styled from 'styled-components';

export const StyledShapes = styled.div`
  &.box {
    width: 100%;
    height: 100%;
    background: $blue-green-color;
    opacity: 0.8;
    border: 1px solid $black-color;
    color: $white-color;
    text-align: center;
  }

  &.circle {
    display: block;
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 50%;

    &.small {
      width: 20px;
      height: 20px;
    }
  }
`;
