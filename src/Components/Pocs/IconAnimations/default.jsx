import React from 'react';
import Icon from '../../Common/Icon/default';
import iconMap from '../../Common/Icon/icon-map.json';

function IconAnimations() {
    return (
        <>
            <h3>Icons-Rotate Animations</h3>
            {(iconMap.social).map((iconClass, id) => {
                return (
                    <Icon key={id} iconClass={iconClass} animation="rotate" />
                )
            })}
            <h3>Icons-Pulse Animations</h3>
            {(iconMap.social).map((iconClass, id) => {
                return (
                    <Icon key={id} iconClass={iconClass} animation="pulse"  />
                )
            })}
        </>
    )
}

export default IconAnimations;
