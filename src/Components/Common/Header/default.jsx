import React from 'react';
import Description from '../../Common/Description/default';
import Menu from '../Menu/default';

function Header({ section }) {
    return (
        <>
            <Description title={section.headline} copy={section.copy} />
            <Menu items={section.items} />
        </>
    )
}

export default Header;