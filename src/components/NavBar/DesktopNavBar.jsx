import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"


function DesktopNavBar() {


    return(
        <ul className="desktop-navbar">
            <CartWidget />

            <NavLink activeclassname="active" to="/"><li className="navbar-item">Home</li></NavLink>
            <NavLink activeclassname="active" to="/products"><li className="navbar-item">Products</li></NavLink>
            <NavLink activeclassname="active" to="/about"><li className="navbar-item">About</li></NavLink>
        </ul>
    )
}

export default DesktopNavBar
