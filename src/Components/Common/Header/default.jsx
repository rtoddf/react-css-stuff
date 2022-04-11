import React from 'react';
import Menu from '../Menu/default';

function Header(props) {
    const { section } = props;

    return (
        <>
            <h3>{section.headline}</h3>
            <p>{section.copy}</p>
            <Menu items={section.items} />
        </>
        
    )
}

export default Header;