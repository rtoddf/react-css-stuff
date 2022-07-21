import styled from 'styled-components';

export const StyledBio = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.dawgNationRed};
  color: ${({ theme }) => theme.grays.white};
  font-family: ${({ theme }) => theme.fonts.baseFont};
  font-size: 1rem;
  font-weight: 400;

  .position {
    font-size: 1.25rem;
  }

  .cityState {
    font-size: 0.875rem;
  }

  img {
    max-width: 30px;
  }
`;
