import CartWidget from "./CartWidget"
import "./NavBar.css"


function MobileNavBar() {

    function openHamb(){
        console.log("menu opened");
    }



    return (
            <div onClick={openHamb}>
                <span className="iconify menu-hamb" data-icon="ion:menu-sharp"></span>
            

                <ul className="mobile-navbar">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>

                    <CartWidget />
                </ul>
            </div>
    )
}

export default MobileNavBar