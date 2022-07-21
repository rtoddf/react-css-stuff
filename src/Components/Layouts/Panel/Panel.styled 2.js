import styled from 'styled-components';

export const StyledPanel = styled.article`
  padding: 20px 20px 10px;
  margin-bottom: 40px;
  background: ${({ theme }) => theme.grays.white};
  border: 1px solid ${({ theme }) => theme.grays.five};
  border-radius: ${({ theme }) => theme.borders.radius};
  color: ${({ theme }) => theme.colors.bodyTextColor};
  box-shadow: 0 2px 26px 4px rgba(0, 0, 0, 0.1);

  figure {
    margin: 0 -20px 10px;

    .filler > img {
      width: 102%;
      max-width: 102%;
    }
  }

  h3 {
    margin: 0 0 0.625rem;
    font-size: 1.5rem;
    font-weight: normal;
  }

  h4 {
    margin: 1.5rem 0 0.625rem;
    font-size: 1.25rem;
    font-weight: normal;
  }

  p {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  a {
    color: ${({ theme }) => theme.colors.linkColor};
  }

  .body-copy {
    margin: 0 0 1.5rem;
  }
`;
