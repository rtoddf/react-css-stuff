import Box from './Box';

export default {
    title: 'Geometries/Box',
    component: Box,
}

const Template = args => <Box {...args} />

export const Primary = Template.bind({});
Primary.args = {
    // lightColor1: '#ff0000'
};