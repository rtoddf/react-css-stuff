import styled from 'styled-components';

export const StyledShapes = styled.div`
  .cont {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto;
    border: 1px solid ${({ theme }) => theme.grays.five};
    text-align: center;
    perspective: 600px;
  }

  .box {
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.blueGreen};
    opacity: 0.8;
    border: 1px solid ${({ theme }) => theme.grays.black};
    color: ${({ theme }) => theme.grays.white};
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
