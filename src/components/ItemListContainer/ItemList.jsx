import { useEffect, useState } from "react";
import { getFetch } from "./getFetch";
import Item from "./Item";
// import Item from "./Item";



export default function ItemList() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        getFetch
        .then(resp => setProducts(resp))
        .then(err => console.log(err))
        .finally(() => setLoading(false))

    }, [])


    return(
        <div className="cards-container">
            

        { loading ? <div className="typewriter-container"><h4 className="typewriter-animation">Loading...</h4></div>

        : 

        products.map( prod =>  <Item id={prod.id} name={prod.name} price={prod.price} img={prod.img}/> )}

        </div>
    )
}

