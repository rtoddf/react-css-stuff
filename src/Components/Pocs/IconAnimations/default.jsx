import Description from '../../Description';
import Icon from '../../Icon';
import iconMap from './icon-map.json';

function IconAnimations() {
    return (
        <>
            <Description title="Icons-Rotate Animations" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus." />
            {(iconMap.social).map((iconClass, id) => {
                return (
                    <Icon key={id} iconClass={iconClass} animation="rotate" />
                )
            })}
            <Description title="Icons-Pulse Animations" copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor aliquet lacus ut dignissim. In pellentesque lorem eu nisl pretium fermentum. Donec ut tellus imperdiet, vestibulum nisl sed, pellentesque purus." />
            {(iconMap.social).map((iconClass, id) => {
                return (
                    <Icon key={id} iconClass={iconClass} animation="pulse"  />
                )
            })}
        </>
    )
}

export default IconAnimations;
