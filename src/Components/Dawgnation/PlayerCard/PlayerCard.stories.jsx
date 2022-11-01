import PlayerCard from './index';

export default {
    title: 'Player Card/Card',
    component: PlayerCard,
    decorators: [
        (Story) => (
            <div style={{ 
                maxWidth: '342px', 
                margin: '0 auto',
                // backgroundColor: '#000' 
            }}>
            <Story />
            </div>
        ),
    ],
}

const Template = args => <PlayerCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    // heightFt: 6,
    // heightIn: 2,
    // weight: 220,
}