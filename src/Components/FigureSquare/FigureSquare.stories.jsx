import FigureSquare from '.';

export default {
    title: 'Square Figure',
    component: FigureSquare,
}

const Template = args => <FigureSquare {...args} />

export const Common = Template.bind({});
Common.args = {
    image: '../images/pocs/squareimages/ben-barnes.jpg',
    title: 'Some Title',
}