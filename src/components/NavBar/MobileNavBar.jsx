import { Link, NavLink } from 'react-router-dom'
import { useEffect } from "react"
import "./NavBar.css"








function MobileNavBar() {

    useEffect(() => {
        
        const mobNavbar = document.querySelector(".mobile-navbar")
        const menuHamb = document.querySelector(".menu-hamb")
        const closeHamb = document.querySelector(".close-hamb")


        menuHamb.addEventListener("click", open)
        closeHamb.addEventListener("click", close)
        
        function open(){
            mobNavbar.style.top = "0";
            closeHamb.style.top = "10";
        }

        function close(){
            mobNavbar.style.top = "-10000px";
            closeHamb.style.top = "-10000px";

        }
    }, [])


    return (
            <>
                <span className="iconify menu-hamb" data-icon="ion:menu-sharp"></span>
                <span className="iconify close-hamb" data-icon="eva:close-fill"></span>
            

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



