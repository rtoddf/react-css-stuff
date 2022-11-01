import Bio from '.';
import { theme } from '../../../../styles/Theme';
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

export const Primary = Template.bind({})
Primary.args = {
    position: 'RB',
    highschool: 'Buchanan',
    classYear: '2020',
    city: 'Clovis',
    state: 'CA',
    color: theme.grays.white,
    backgroundColor: theme.colors.dawgNationRed,
    positionFontSize: '1rem',
    bioFontSize: '0.875rem',
}