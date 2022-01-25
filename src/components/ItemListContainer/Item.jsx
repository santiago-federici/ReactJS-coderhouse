import { Link } from "react-router-dom"


export default function Item({id, name, price, img}) {

    function removeNavbar() {
        document.querySelector(".navbar").style.display = "none"
    }

    return(
        <section className="card" key={id} style={{ background: `url(${img}) no-repeat 50% / cover` }}>
            <div className="card-info">
                <h2 className="card-product">{name}</h2>
                <p>${price}</p>
                <Link to={`/detail/${id}`}><button onClick={removeNavbar} className="more-details">More details</button></Link>
            </div>
        </section>
        
    )
}