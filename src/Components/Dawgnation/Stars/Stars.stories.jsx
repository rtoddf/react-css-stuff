import Stars from '.';

export default {
    title: 'Player Card/Stars',
    component: Stars,
}

const Template = args => <Stars {...args} />

export const Common = Template.bind({});
Common.args = {
    starRating: '4',
}