import styled from 'styled-components';

export const StyledCap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dawgNationGray};

  .name {
    margin: 10px 10px 5px;
    color: ${({ theme }) => theme.grays.white};
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
`;
