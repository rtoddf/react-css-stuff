import styled from 'styled-components';

export const StyledLearn02 = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  min-height: 100vh;

  .box {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;
    margin: 10px;

    background-color: ${({ theme }) => theme.colors.green};
    border: 1px solid ${({ theme }) => theme.grays.black};
    border-radius: 0;

    &.orange {
      background-color: ${({ theme }) => theme.colors.orange};
    }

    &.gray {
      background-color: ${({ theme }) => theme.grays.four};
    }
  }
`;
