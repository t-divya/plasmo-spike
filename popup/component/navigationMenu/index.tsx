import MenuItem from "../menuItem"


function NavigationMenu() {
    return (
        <div>
            <MenuItem textSettings="Text Setting" messageOverview="message" to="/text-settings" />
            <MenuItem textSettings="Overlay Tint" messageOverview="message 1" to="/overlay-tint" />
            <MenuItem textSettings="Highlighter" messageOverview="message 2" to="/highlighter" />
        </div>

    )



}

export default NavigationMenu