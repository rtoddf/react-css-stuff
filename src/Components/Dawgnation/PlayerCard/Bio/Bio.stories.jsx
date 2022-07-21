import Bio from '.';

export default {
    title: 'Player Card/Bio',
    component: Bio,
    decorators: [
        (Story) => (
            <div style={{ 
                maxWidth: '342px', 
                margin: '0 auto',
            }}>
            <Story />
            </div>
        ),
    ],
}

const Template = args => <Bio {...args} />

export const Common = Template.bind({})
Common.args = {
    position: 'RB',
    highschool: 'Buchanan',
    classYear: '2020',
    city: 'Clovis',
    state: 'CA',
}