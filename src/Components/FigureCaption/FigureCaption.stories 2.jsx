import FigureCaption from '.';
import CustomMDXDocumentation from './Custom-MDX-Documentation.mdx';

export default {
    title: 'Images/Figure Caption',
    component: FigureCaption,
    parameters: {
        docs: {
            // page: CustomMDXDocumentation,
        },
    },
}

const Template = args => <FigureCaption {...args} />

export const Common = Template.bind({});
Common.args = {
    title: 'Some Title',
    copy: 'Some copy',
}