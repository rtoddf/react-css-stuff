import { StyledHeader } from './Header.styled';
import PanelSection from '../Layouts/PanelSection/default';

function Header({ section }) {
    const menuItems = (section.items).map((item, index) => {
        return (
            <PanelSection key={index} item={item} />
        )
    })

    return (
        <>
            <StyledHeader>
                {section.headline !== '' && (
                    <h3>{section.headline}</h3>
                )}
                {section.copy !== '' && (
                    <p>{section.copy}</p>
                )}
            </StyledHeader>

            <div className="grid menu" data-col="4">
                {menuItems}
            </div>
        </>
    )
}

export default Header;