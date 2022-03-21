import React from 'react';
import Icon from '../../Common/Icon/default';

function socialIcons({links, animation}) {
    return (
        <>
            {links.map((iconClass, id) => {
                return (
                    <Icon key={id} iconClass={iconClass} animation={animation}  />
                )
            })}
        </>
    )
}

export default socialIcons;
