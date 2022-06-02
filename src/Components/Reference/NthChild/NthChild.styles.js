import styled from 'styled-components';

export const StyledNthChild = styled.div`
  article {
    border: 1px solid ${({ theme }) => theme.grays.white};
    justify-self: center;
  }

  article .dot {
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.grays.black};
    border-radius: 50%;
  }

  .a article:nth-child(3) .dot {
    background: ${({ theme }) => theme.colors.redColor};
  }

  .b article:nth-child(n + 4) .dot {
    background: ${({ theme }) => theme.colors.redColor};
  }

  .c article:nth-child(-n + 3) .dot {
    background: ${({ theme }) => theme.colors.redColor};
  }

  .d article:nth-child(3n + 1) .dot {
    background: ${({ theme }) => theme.colors.redColor};
  }

  .e article:nth-child(odd) .dot {
    background: ${({ theme }) => theme.colors.redColor};
  }

  .f article:last-child .dot {
    background: ${({ theme }) => theme.colors.redColor};
  }

  .g article:nth-last-child(2) .dot {
    background: ${({ theme }) => theme.colors.redColor};
  }
`;
