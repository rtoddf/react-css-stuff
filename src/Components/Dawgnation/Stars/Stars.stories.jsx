import Stars from '.';

export default {
    title: 'Player Card/Stars',
    component: Stars,
    decorators: [
        (Story) => (
            <div style={{ 
                maxWidth: '342px', 
                margin: '0 auto',
                padding: '10px',
                backgroundColor: '#d31c1e',
                textAlign: 'right',
            }}>
            <Story />
            </div>
        ),
    ],
}

const Template = args => <Stars {...args} />

export const Common = Template.bind({});
Common.args = {
    starRating: '4',
}