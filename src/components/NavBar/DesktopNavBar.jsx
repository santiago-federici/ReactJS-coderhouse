import CartWidget from "./CartWidget"
import "./NavBar.css"


function DesktopNavBar() {


    return(
        <ul className="desktop-navbar">
            <CartWidget />



            <li className="navbar-item"><a className="navbar-item-link" href="#">Home</a></li>
            <li className="navbar-item"><a className="navbar-item-link" href="#">About</a></li>
            <li className="navbar-item"><a className="navbar-item-link" href="#">Products</a></li>
            <li className="navbar-item"><a className="navbar-item-link" href="#">Contact</a></li>
        </ul>
    )
}

export default DesktopNavBar
