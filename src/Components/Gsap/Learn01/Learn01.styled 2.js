import styled from 'styled-components';

export const StyledLearn01 = styled.div`
  padding: 50px;
  text-align: center;

  img {
    width: 50%;
    border: 3px solid ${({ theme }) => theme.grays.black};
    opacity: 0;
  }

  p {
    opacity: 0;
  }
`;
