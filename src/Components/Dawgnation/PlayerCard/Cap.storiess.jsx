import Cap from '.';

export default {
    title: 'Cap',
    component: Cap,
}

const Template = args => <Cap {...args} />

export const Common = Template.bind({});
Common.args = {
    name: 'Mary',
    starRating: '4',
}