import styled from 'styled-components';

export const StyledCard = styled.div`
  margin: 0 auto;
  padding: 30px;
  background: ${({ theme }) => theme.grays.white};
  color: ${({ theme }) => theme.colors.bodyTextColor};
  border-radius: 6px;
  box-shadow: 0 2px 26px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  h4 {
    margin: 20px 0 0;
    font-size: 35px;
  }

  h5 {
    margin: 0 0 20px;
    font-family: ${({ theme }) => theme.fonts.baseFont};
    font-size: 20px;
    line-height: 1.75;
    letter-spacing: -0.5px;
  }
`;
