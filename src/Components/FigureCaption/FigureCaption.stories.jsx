import FigureCaption from '.';

export default {
    title: 'Figure Caption',
    component: FigureCaption
}

const Template = args => <FigureCaption {...args} />

export const Common = Template.bind({});
Common.args = {
    title: 'Some Title',
    copy: 'Some copy',
}