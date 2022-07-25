import Icon from '.';
import { theme } from '../../styles/Theme';

export default {
    title: 'Icon',
    component: Icon,
    decorators: [
        (Story) => (
            <div style={{ 
                width: '400px',
                margin: '0 auto',
            }}>
                <Story />
            </div>
        ),
    ],
}

const Template = args => <Icon {...args} />

export const Primary = Template.bind({});
Primary.args = {
    iconClass: 'fab fa-facebook-f',
    animation: 'rotate',
}