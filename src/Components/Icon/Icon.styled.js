import styled from 'styled-components';

export const StyledIcon = styled.i`
  display: inline-block;
  margin: 10px 10px 5px;
  padding-top: 8px;
  width: 32px;
  height: 32px;
  background-image: linear-gradient(
    to top,
    ${({ gradientColor1 }) => gradientColor1},
    ${({ gradientColor2 }) => gradientColor2}
  );
  color: ${({ color }) => color};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(255, 255, 255, 0.5);
  font-size: 16px;
  text-align: center;
  transition: transform 0.5s;
  cursor: pointer;

  &.rotate {
    &:hover {
      transform: rotate(90deg);
    }
  }

  &.pulse {
    &:hover {
      animation: icon-pulse 0.5s 0s ease-out;
    }
  }

  @keyframes icon-pulse {
    0% {
      transform: scale(1);
    }
    30% {
      transform: scale(0.7);
    }
    60% {
      transform: scale(1.5);
      opacity: 0.75;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
