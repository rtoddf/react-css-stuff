import styled from 'styled-components';

export const StyledList = styled.ul`
  margin-bottom: 0;

  li {
    border: none;
    line-height: 1.25;

    a {
      padding: 0 0 0.5rem;
      border: none;
      background: transparent;
      font-size: 0.875rem;
      font-weight: 600;
      text-decoration: none;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }

    &:after {
      width: 100%;
      background-color: ${({ theme }) => theme.grays.seven};
      content: '';
      display: block;
      height: 1px;
      margin-top: 1.125rem;
      margin-bottom: 1.0625rem;
    }

    &:last-child:after {
      margin-bottom: 0;
      background-color: transparent;
    }
  }
`;
