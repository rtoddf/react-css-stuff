import styled from 'styled-components';

export const StyledStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  padding: 10px;
  background: transparent;
  color: ${({ theme }) => theme.grays.white};
  // border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  font-family: ${({ theme }) => theme.fonts.baseFont};
  font-size: 1rem;
  font-weight: 400;
`;
