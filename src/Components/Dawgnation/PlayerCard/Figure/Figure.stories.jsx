import Figure from '.';

export default {
    title: 'Player Card/Figure',
    component: Figure,
}

const Template = args => <Figure {...args} />

export const Common = Template.bind({})
Common.args = {
    image: '/images/layouts/tags/kendall-milton.jpg',
    alt: 'Kendall Milton',
    shape: 'rounded'
}

export const Circle = Template.bind({});
Circle.args = {
    image: '/images/layouts/tags/kendall-milton.jpg',
    alt: 'Kendall Milton',
    shape: 'circle'
};