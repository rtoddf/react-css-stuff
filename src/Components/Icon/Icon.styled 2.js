import styled from 'styled-components';

export const StyledIcon = styled.i`
  display: inline-block;
  margin: 5px;
  padding-top: 10px;
  width: 42px;
  height: 42px;
  background-image: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.blueGreen},
    ${({ theme }) => theme.colors.green}
  );
  color: ${({ theme }) => theme.grays.white};
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(149, 149, 149, 0.5);
  font-size: 24px;
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
