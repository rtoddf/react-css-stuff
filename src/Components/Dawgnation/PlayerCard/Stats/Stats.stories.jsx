import Stats from '.';

export default {
    title: 'Player Card/Stats',
    component: Stats,
    decorators: [
        (Story) => (
            <div style={{ 
                maxWidth: '342px', 
                margin: '0 auto',
                backgroundColor: '#000' }}>
            <Story />
            </div>
        ),
    ],
}

const Template = args => <Stats {...args} />

export const Primary = Template.bind({})
Primary.args = {
    heightFt: 6,
    heightIn: 2,
    weight: 220,
}