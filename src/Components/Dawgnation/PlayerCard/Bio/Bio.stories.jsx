import Bio from '.';

export default {
    title: 'Player Card/Bio',
    component: Bio,
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