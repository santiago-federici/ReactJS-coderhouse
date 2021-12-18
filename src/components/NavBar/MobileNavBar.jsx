import { Link, NavLink } from 'react-router-dom'
import { useEffect } from "react"
import "./NavBar.css"








function MobileNavBar() {

        
    
        
    
    function open(){
        document.querySelector(".mobile-navbar").style.display = "flex";
        document.querySelector(".close-hamb").style.display = "flex";
    }

    function close(){
        document.querySelector(".mobile-navbar").style.display = "none";
        document.querySelector(".close-hamb").style.display = "none";
    }

    return (
            <>
                <p onClick={open} className="menu-hamb"><span className="iconify" data-icon="ion:menu-sharp"></span></p>
                <p onClick={close} className="close-hamb"><span className="iconify" data-icon="eva:close-fill"></span></p>
            

                <ul className="mobile-navbar">
                    <NavLink activeclassname="active" to="/"><li className="navbar-item">Home</li></NavLink>
                    <NavLink activeclassname="active" to="/products"><li className="navbar-item">Products</li></NavLink>
                    <NavLink activeclassname="active" to="/about"><li className="navbar-item">About</li></NavLink>

                    <Link to="/cart"><span className="iconify shoppingCart" data-icon="la:shopping-cart"></span></Link>

                    <div className="social-media-mobile">
                        <i className="fab fa-facebook"><a href="#"></a></i>
                        <i className="fab fa-instagram"><a href="#"></a></i>
                        <i className="fab fa-twitter"><a href="#"></a></i>
                        <i className="fab fa-whatsapp"><a href="#"></a></i>
                    </div>
                </ul>
            </>
    )
}

export default MobileNavBar


