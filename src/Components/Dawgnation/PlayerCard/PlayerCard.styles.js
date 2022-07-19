import styled from 'styled-components';

export const StyledPlayerCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.bodyTextColor};
  border-radius: 10px;
  box-shadow: 0 2px 26px 4px rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.dawgNationRed} 0%,
    ${({ theme }) => theme.grays.black} 80%
  );

  .number {
    position: absolute;
    top: -10px;
    left: -10px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-image: linear-gradient(
      45deg,
      ${({ theme }) => theme.grays.black} 0%,
      ${({ theme }) => theme.colors.dawgNationRed} 50%,
      ${({ theme }) => theme.grays.black} 100%
    );
    color: white;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.grays.white};
    font-size: 2rem;
    font-weight: 600;
  }

  .cap {
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
  }

  .bio,
  .stats {
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
  }

  .stats {
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  }
`;
