import styled from 'styled-components';

const dude = (props) => {
  const amt = 1;

  const stuff = amt.map((a, i) => {
    return `&:nth-child(1) {
      grid-column: span ${(props) => props.combo[i]};
    }`;
  });

  return stuff;
};

export const StyledMosaic = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(8, [col] 1fr);
  grid-template-rows: repeat(2, [row] 250px);
  color: ${(props) => console.log(props.combo)};

  > div {
    display: grid;
    padding: 0 40px;
    background: ${(props) => props.colors[0].hex};
    color: ${(props) => props.colors[0].contrast};
    border-radius: ${({ theme }) => theme.borders.radius};

    &:nth-child(even) {
      background: ${(props) => props.colors[2].hex};
      color: ${(props) => props.colors[2].contrast};
    }

    &:nth-child(1) {
      grid-column: span ${(props) => props.combo[0]};
    }

    &:nth-child(2) {
      grid-column: span ${(props) => props.combo[1]};
    }

    &:nth-child(3) {
      grid-column: span ${(props) => props.combo[2]};
    }

    &:nth-child(4) {
      grid-column: span ${(props) => props.combo[3]};
    }

    &:nth-child(5) {
      grid-column: span ${(props) => props.combo[4]};
    }

    &:nth-child(6) {
      grid-column: span ${(props) => props.combo[5]};
    }

    > div {
      align-self: flex-end;
      font-family: 'Average', serif;

      p {
        font-size: 1.375rem;
        line-height: normal;
      }
    }

    .author {
      padding-top: 5px;
      font-size: 1rem;
      line-height: normal;
      text-align: right;
      font-style: italic;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, [col] 1fr);
    grid-template-rows: repeat(6, [row] 150px);

    > div {
      font-size: 1.25rem;

      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5),
      &:nth-child(6) {
        grid-column: span 1;
      }
    }
  }
`;
