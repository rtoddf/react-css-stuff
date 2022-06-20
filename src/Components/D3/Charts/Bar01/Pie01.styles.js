import styled from 'styled-components';

export const StyledPie01 = styled.div`
  /*-----------------------------------------------------------------------------------*\
        #Tooltip 
    \*-----------------------------------------------------------------------------------*/
  .tooltip,
  .over_tooltip {
    position: absolute;
    padding: 8px;
    background: rgba(255, 255, 255, 0.75);
    color: #000;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
    font: 12px sans-serif;
    pointer-events: none;
    opacity: 0;
  }

  .tooltip p,
  .over_tooltip p {
    margin-bottom: 3px;
  }

  .tooltip td,
  .over_tooltip td {
    padding: 3px;
  }
`;
