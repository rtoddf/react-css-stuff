import { StyledGrid } from './Grid.styles';

function Grid({children, cols, justify}) {
    return (
        <StyledGrid data-col={cols} justify={justify}>
            { children }
        </StyledGrid>
    )
}

export default Grid;