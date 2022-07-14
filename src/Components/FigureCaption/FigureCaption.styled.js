import styled from 'styled-components';

export const StyledFigureCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5px 10px 10px;
  background: rgba(0, 0, 0, 0.7);
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  color: ${({ theme }) => theme.grays.white};

  font-family: 'Open Sans', sans-serif;

  h4 {
    margin-bottom: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.grays.white};
    font-size: 1.25rem;
    font-weight: normal;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.125rem;
  }

  a {
    color: ${({ theme }) => theme.grays.white};
    font-weight: 400;
  }
`;
