import Description from '../Description';
import Grid from '../Grid/index';
import { StyledSectionContent } from './SectionContent.styled';
import Card from '../Card';

function SectionContent({ section }) {
    const menuItems = (section.items).map((item, index) => {
        return (
            <>
                <Card index={index} item={item} />
            </>
        )
    })

    return (
        <>
            <StyledSectionContent>
                <Description title={section.headline} description={section.copy} />
            </StyledSectionContent>
            <Grid cols="4">
                {menuItems}
            </Grid>
        </>
    )
}

export default SectionContent;