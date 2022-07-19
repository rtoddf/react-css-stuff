import styled from 'styled-components';

export const StyledFoot = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px 0;
  color: ${({ theme }) => theme.colors.dawgNationGray};
  font-family: ${({ theme }) => theme.fonts.baseFont};
  font-size: 0.75rem;

  img {
    max-width: 30px;
  }
`;
