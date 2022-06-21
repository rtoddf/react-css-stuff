import styled from 'styled-components';

export const StyledMap = styled.div`
  .states :hover {
    fill: red;
  }

  .state-borders {
    fill: none;
    stroke: #000;
    stroke-width: 0.5px;
    stroke-linejoin: round;
    stroke-linecap: round;
    pointer-events: none;
  }
`;
