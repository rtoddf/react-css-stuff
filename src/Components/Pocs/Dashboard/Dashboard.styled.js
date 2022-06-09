import styled from 'styled-components';

export const StyledDashboard = styled.div`
  margin: 40px 0;
  padding: 20px;
  background-color: ${({ theme }) => theme.grays.four};
  color: ${({ theme }) => theme.grays.white};
  border-radius: 20px;
`;
