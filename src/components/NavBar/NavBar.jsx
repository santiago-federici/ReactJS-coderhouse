import { Link } from 'react-router-dom'
import DesktopNavBar from "./DesktopNavBar"
import MobileNavBar from "./MobileNavBar"
import "./NavBar.css"


const NavBar = () => {

    
    return(
        <nav className="navbar">
            <h1 className="logo">LOGO</h1>
            
            <DesktopNavBar />

            <MobileNavBar />

        </nav>

)
}
export default NavBar