import CartWidget from "./CartWidget"


const NavBar = () => {
    
    return(
        <nav>
            <h1>BAKKEN</h1>
            <ul>
                <CartWidget />


                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

)
}
export default NavBar