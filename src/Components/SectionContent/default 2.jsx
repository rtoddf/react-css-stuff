import Description from '../Description';
import Grid from '../Grid/index';
import { StyledSectionContent } from './SectionContent.styled';
import Card from '../Card';

function SectionContent({ section }) {    
    const menuItems = (section.items).map((item, index) => {
        return (
            <Card
                key={index}
                item={item}
                title={item.title}
                img={item.image}
                imgSrc='internal'
                copy={item.copy}
                link={item.link} />
        )
    })

    return (
        <>
            <StyledSectionContent>
                <Description title={section.headline} copy={section.copy} />
            </StyledSectionContent>
            <Grid cols="4">
                {menuItems}
            </Grid>
        </>
    )
}

export default SectionContent;