import React from 'react';
import Description from '../../Common/Description/default';
import Menu from '../Menu/default';

function Header(props) {
    const { section } = props;

    return (
        <>
            <Description title={section.headline} copy={section.copy} />
            <Menu items={section.items} />
        </>
        
    )
}

export default Header;