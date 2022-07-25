import Badge from '.';
import { theme } from '../../../../styles/Theme';
export default {
    title: 'Player Card/Badge',
    component: Badge,
    decorators: [
        (Story) => (
            <div style={{ 
                position: 'relative', 
                width: '400px',
                height: '75px',
                margin: '0 auto',
                backgroundColor: '#d31c1e',
            }}>
                <Story />
            </div>
        ),
    ],
}

const Template = args => <Badge {...args} />

export const Primary = Template.bind({})
Primary.args = {
    playerNumber: 25,
    color: theme.grays.white,
    borderColor: theme.grays.white,
    gradientColor1: theme.grays.black,
    gradientColor2: theme.colors.dawgNationRed,
}