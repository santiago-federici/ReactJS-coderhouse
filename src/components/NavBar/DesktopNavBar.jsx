import { Link, NavLink } from 'react-router-dom'
import "./NavBar.css"


function DesktopNavBar() {


    return(
        <ul className="desktop-navbar">
            <Link to="/cart"><span className="iconify shoppingCart" data-icon="la:shopping-cart"></span></Link>


            <NavLink activeclassname="active" to="/"><li className="navbar-item">Home</li></NavLink>
            <NavLink activeclassname="active" to="/products"><li className="navbar-item">Products</li></NavLink>
            <NavLink activeclassname="active" to="/about"><li className="navbar-item">About</li></NavLink>
        </ul>
    )
}

export default DesktopNavBar
