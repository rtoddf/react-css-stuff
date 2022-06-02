import { Link } from 'react-router-dom';
import Icon from '../Common/Icon/default';

function SocialIcons({links, animation}) {
    return (
        <>
            {links.map((iconInfo, id) => {
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
