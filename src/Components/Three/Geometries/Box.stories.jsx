import Box from './Box';

export default {
    title: 'Geometries/Box',
    component: Box,
}

const Template = args => <Box {...args} />

export const Common = Template.bind({});
Common.args = {};