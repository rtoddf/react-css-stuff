import styled from 'styled-components';

export const StyledFigure = styled.figure`
  max-width: 400px;
  margin: 0 -20px 10px;
  padding: ${({ shape }) => (shape === 'circle' ? '20px' : '0')};
  box-shadow: ${({ shape }) =>
    shape === 'rounded' ? `0 0 0 2px #fff, 0 0 0 6px #000` : ''};

  /* box-shadow: ${({ shape }) =>
    shape === 'rounded'
      ? `0 0 0 2px ${({ theme }) => theme.grays.white}, 0 0 0 6px ${({
          theme,
        }) => theme.grays.black}`
      : ''}; */

  ${(props) =>
    props.shape === 'rounded'
      ? `
      margin: 20px;
      padding: 0;
      overflow: hidden;
      border-radius: 40px;
      `
      : ''}

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
