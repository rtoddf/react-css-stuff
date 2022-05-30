import PanelSection from '../../Layouts/PanelSection/default';

function Header({ section }) {
    console.log('section: ', section)

    const menuItems = (section.items).map((item, index) => {
        return (
            <PanelSection key={index} item={item} />
        )
    })

    return (
        <>
            <div className="description">
                {section.headline !== '' && (
                    <h3>{section.headline}</h3>
                )}
                {section.copy !== '' && (
                    <p>{section.copy}</p>
                )}
            </div>

            <div className="grid menu" data-col="4">
                {menuItems}
            </div>
        </>
    )
}

export default Header;