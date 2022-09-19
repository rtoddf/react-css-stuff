import styled from 'styled-components';

export const StyledCap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: ${({ theme }) => theme.grays.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.dawgNationGray};

  .name {
    margin: 10px 10px 5px;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .classLevel {
    display: flex;
    align-items: center;
    margin: 0 10px 5px;
    text-transform: capitalize;
  }

  img {
    max-width: 30px;
    margin: 0 0 0 5px;
  }
`;
