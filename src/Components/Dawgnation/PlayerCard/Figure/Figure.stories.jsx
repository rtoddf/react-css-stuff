import Figure from '.';

export default {
    title: 'Player Card/Figure',
    component: Figure,
    decorators: [
        (Story) => (
            <div style={{ 
                maxWidth: '450px', 
                margin: '0 auto',
            }}>
            <Story />
            </div>
        ),
    ],
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