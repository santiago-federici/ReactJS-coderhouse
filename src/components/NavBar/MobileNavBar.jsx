import { useEffect } from "react"
import CartWidget from "./CartWidget"
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
            console.log("HI");
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
                    <li className="navbar-item"><a className="navbar-item-link" href="#">Home</a></li>
                    <li className="navbar-item"><a className="navbar-item-link" href="#">About</a></li>
                    <li className="navbar-item"><a className="navbar-item-link" href="#">Products</a></li>
                    <li className="navbar-item"><a className="navbar-item-link" href="#">Contact</a></li>

                    <CartWidget />

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



