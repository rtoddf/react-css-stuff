import { StyledGrid } from './Grid.styles';

function Grid({children, cols}) {
    return (
        <StyledGrid data-col={cols}>
            { children }
        </StyledGrid>
    )
}

export default Grid;