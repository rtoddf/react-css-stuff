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
                {section.headline !== '' && (
                    <h3>{section.headline}</h3>
                )}
                {section.copy !== '' && (
                    <p>{section.copy}</p>
                )}
            </StyledSectionContent>

            <Grid cols="4">
                {menuItems}
            </Grid>
        </>
    )
}

export default SectionContent;