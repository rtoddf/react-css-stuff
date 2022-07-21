import Cap from '.';

export default {
    title: 'Player Card/Cap',
    component: Cap,
    decorators: [
        (Story) => (
            <div style={{ 
                maxWidth: '342px', 
                margin: '0 auto',
                backgroundColor: '#d31c1e',
            }}>
            <Story />
            </div>
        ),
    ],
}

const Template = args => <Cap {...args} />

export const Common = Template.bind({});
Common.args = {
    name: 'Kendall Milton',
    starRating: '4',
}