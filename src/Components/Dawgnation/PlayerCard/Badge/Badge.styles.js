import styled from 'styled-components';

export const StyledBadge = styled.div`
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
`;
