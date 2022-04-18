import React from 'react';
import './default.scss';

function List({listItems}) {
    const listStructure = (listItems).map((item, id) => {
        return <li key={id}><a href={item.link}>{item.headline}</a></li>;
    });

    return (
        <ul>{listStructure}</ul>
    )
}

export default List;
