import Figure from '.';

export default {
    title: 'Images/Figure',
    component: Figure,
}

const Template = args => <Figure {...args} />

export const Primary = Template.bind({})
Primary.args = {
    image: '/images/placeholder.jpg',
    alt: 'alt tag',
    shape: ''
}

export const Circle = Template.bind({});
Circle.args = {
    image: '/images/layouts/card/kj-apa.jpg',
    alt: 'alt tag',
    shape: 'circle'
};