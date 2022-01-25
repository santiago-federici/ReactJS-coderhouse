import { NavLink } from 'react-router-dom'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';


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

                    <CartWidget />

                    <div className="social-media-mobile">
                        <a href="https://m.facebook.com/profile.php?id=4"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/cbum/?hl=es-la"><i className="fab fa-instagram"></i></a>
                        <a href="https://twitter.com/maritobaracus"><i className="fab fa-twitter"></i></a>
                        <a href="https://wa.me/5492615162079"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </ul>
            </>
    )
}

export default MobileNavBar


