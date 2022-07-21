import styled from 'styled-components';

export const StyledCard = styled.article`
  padding: 0 20px 10px;
  background: ${({ theme }) => theme.grays.white};
  border: 1px solid ${({ theme }) => theme.grays.five};
  border-radius: 6px;
  color: #333;
  box-shadow: 0 2px 26px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  h4 {
    margin: 0 -20px;
    padding: 0.625rem 1.25rem;
    background-color: ${({ theme }) => theme.grays.three};
    color: ${({ theme }) => theme.grays.six};
    border-bottom: 1px solid ${({ theme }) => theme.grays.five};
  }

  p {
    color: ${({ theme }) => theme.grays.four};
    line-height: 1.25rem;
  }

  a {
    text-decoration: none;
  }
`;
