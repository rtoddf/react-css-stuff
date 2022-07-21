import Foot from '.';

export default {
    title: 'Player Card/Foot',
    component: Foot,
    decorators: [
        (Story) => (
            <div style={{ 
                    maxWidth: '450px', 
                    margin: '0 auto',
                    backgroundColor: '#000'
                }}>
                <Story />
            </div>
        ),
    ],
}

const Template = args => <Foot {...args} />

export const Common = Template.bind({});
Common.args = {

}