import styled from 'styled-components';

export const StyledBio = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  padding: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-family: ${({ theme }) => theme.fonts.baseFont};
  /* font-size: ${({ bioFontSize }) => bioFontSize}; */
  font-weight: 400;

  @media (max-width: 600px) {
    background-color: transparent;
  }

  .position {
    font-size: ${({ positionFontSize }) => positionFontSize};
  }

  .cityState {
    font-size: ${({ bioFontSize }) => bioFontSize};
  }

  /* img {
    max-width: 30px;
  } */
`;
