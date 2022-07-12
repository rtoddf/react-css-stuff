import Description from '.';

export default {
    title: 'Description',
    component: Description,
}

const Template = args => <Description {...args} />

export const Common = Template.bind({})
Common.args = {
    title: 'Title',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum odio felis, vel aliquet mi vestibulum vitae. Ut pulvinar velit est, ut blandit turpis pretium eu. Fusce lobortis sodales tempor. Fusce felis odio, convallis quis faucibus sed, commodo sed dolor. Aliquam sit amet justo a massa vestibulum volutpat. Cras vel justo id sapien aliquet commodo et quis purus. In id lacinia nunc, a rutrum arcu. Sed at efficitur lectus.'
}