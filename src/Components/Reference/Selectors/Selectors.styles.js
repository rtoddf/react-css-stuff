import styled from 'styled-components';

export const StyledSelectors = styled.div`
  h4 {
    font-size: 1.25rem;
    font-weight: bold;
  }

  p {
    margin: 10px 0;
  }

  ul {
    margin-bottom: 20px;
  }

  li {
    margin-bottom: 5px;
  }

  ul ul {
    margin-left: 20px;
  }

  li > ul > li {
    color: ${({ theme }) => theme.colors.orange};
    font-weight: bold;
  }

  hr {
    margin: 20px 0;
  }

  .adjacent-sibling h4 + p {
    color: ${({ theme }) => theme.colors.orange};
    font-weight: bold;
  }

  .general-sibling p ~ div {
    color: ${({ theme }) => theme.colors.orange};
    font-weight: bold;
  }
`;
