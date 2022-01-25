import { Link } from "react-router-dom"
import "./Home.css"

export default function Home() {


    return(
        <main className="home-main">
            
            <div className="title-border">
                <h2 className="home-title">Looking to buy a new pc? You're in the right place!</h2>
            </div>

            <Link to="/products"><p className="go-to-products">Check our products here</p></Link>



            <a href="https://www.freepik.com/vectors/abstract" className="atribution">Abstract vector created by BiZkettE1 - www.freepik.com</a>
        </main>
    )
}