import Stats from '.';

export default {
    title: 'Player Card/Stats',
    component: Stats,
}

const Template = args => <Stats {...args} />

export const Common = Template.bind({})
Common.args = {
    heightFt: 6,
    heightIn: 2,
    weight: 220,
}