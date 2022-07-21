import styled from 'styled-components';

export const StyledDropShadows = styled.div`
  .circle {
    margin-top: 40px;
    box-shadow: 0 0 4px 4px ${({ theme }) => theme.grays.four},
      0 0 12px 12px ${({ theme }) => theme.colors.red},
      0 0 18px 16px ${({ theme }) => theme.grays.four};
  }
`;
