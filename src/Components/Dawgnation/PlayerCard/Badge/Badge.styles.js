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
    ${({ gradientColor1 }) => gradientColor1} 0%,
    ${({ gradientColor2 }) => gradientColor2} 50%,
    ${({ gradientColor1 }) => gradientColor1} 100%
  );
  color: ${({ color }) => color};
  border-radius: 50%;
  border: 2px solid ${({ borderColor }) => borderColor};
  font-size: 2rem;
  font-weight: 600;
`;
