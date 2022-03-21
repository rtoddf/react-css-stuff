import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../Common/Icon/default';

function SocialIcons({links, animation}) {
    console.log('links: ', links)

    return (
        <>
            {links.map((iconInfo, id) => {
                console.log('iconInfo: ', iconInfo)
                return (
                    <Link key={id} to={iconInfo.link}>
                        <Icon key={id} iconClass={iconInfo.icon} animation={animation}  />
                    </Link>
                )
            })}
        </>
    )
}

export default SocialIcons;
