import { StyledList } from './List.styled';

function List({listItems}) {
    const listStructure = (listItems).map((item, id) => {
        return <li key={id}><a href={item.link}>{item.headline}</a></li>;
    });

    return (
        <StyledList>{listStructure}</StyledList>
    )
}

export default List;
