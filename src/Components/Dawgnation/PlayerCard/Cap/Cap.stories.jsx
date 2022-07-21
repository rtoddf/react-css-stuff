import Cap from '.';

export default {
    title: 'Player Card/Cap',
    component: Cap,
}

const Template = args => <Cap {...args} />

export const Common = Template.bind({});
Common.args = {
    name: 'Kendall Milton',
    starRating: '4',
}