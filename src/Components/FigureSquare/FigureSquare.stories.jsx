import FigureSquare from '.';

export default {
    title: 'Images/Square Figure',
    component: FigureSquare,
}

const Template = args => <FigureSquare {...args} />

export const Primary = Template.bind({});
Primary.args = {
    image: '../images/pocs/squareimages/ben-barnes.jpg',
    title: 'Some Title',
}