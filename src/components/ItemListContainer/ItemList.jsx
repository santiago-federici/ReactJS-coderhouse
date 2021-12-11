import { useEffect, useState } from "react";
import Item from "./Item";



export default function ItemList() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    const getProducts = () => {
        fetch("../src/JSON/products.json")
        .then(resp => resp.json())
        .then(data => setProducts(data))
        .finally(() => setLoading(false))
    }

    useEffect(() => {
        setTimeout(() => getProducts(), 2000)
    }, [])
    
    
    
    


    return(
        <div className="cards-container">
            

        { loading ? <div><div className="ring"></div><h2 className="loading-text">Loading...</h2></div>

        : 

        products.map( prod =>  <Item id={prod.id} name={prod.name} price={prod.price} img={prod.img}/> )}

        </div>
    )
}

