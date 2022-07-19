import Badge from '.';

export default {
    title: 'Player Card/Badge',
    component: Badge,
}

const Template = args => <Badge {...args} />

export const Common = Template.bind({})
Common.args = {
    playerNumber: 25,
}