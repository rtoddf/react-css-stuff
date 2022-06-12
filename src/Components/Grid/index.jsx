import { StyledGrid } from './Grid.styles';

function Grid({children, cols, gap, justify}) {
    return (
        <StyledGrid data-col={cols} gap={gap} justify={justify}>
            { children }
        </StyledGrid>
    )
}

export default Grid;