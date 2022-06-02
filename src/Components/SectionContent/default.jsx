import Grid from '../Grid/index';
import { StyledSectionContent } from './SectionContent.styled';
import PanelSection from '../Layouts/PanelSection/default';

function SectionContent({ section }) {
    const menuItems = (section.items).map((item, index) => {
        return (
            <PanelSection key={index} item={item} />
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