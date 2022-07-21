import styled from 'styled-components';

export const StyledFigure = styled.figure`
  margin: 0 -20px 10px;
  padding: ${({ shape }) => (shape === 'circle' ? '20px' : '0')};

  img {
    ${(props) =>
      props.shape === 'circle'
        ? `
        border: 1px solid white;
        box-shadow: 0 2px 26px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50%;
        `
        : ''}
  }
`;
