import Badge from '.';

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
            }}>
            <Story />
            </div>
        ),
    ],
}

const Template = args => <Badge {...args} />

export const Common = Template.bind({})
Common.args = {
    playerNumber: 25,
}