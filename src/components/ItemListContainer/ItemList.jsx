import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";



export default function ItemList() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategory} = useParams()



    

    useEffect(() => {

        if (idCategory){
            const getProducts = () => {
                fetch("../src/JSON/products.json")
                .then(resp => resp.json())
                .then(data => setProducts(data.filter(prod => prod.category === idCategory)))
                .finally(() => setLoading(false))
            }
            setTimeout(() => getProducts(), 2000)
        } else{
            const getProducts = () => {
                fetch("../src/JSON/products.json")
                .then(resp => resp.json())
                .then(data => setProducts(data))
                .finally(() => setLoading(false))
            }
            setTimeout(() => getProducts(), 2000)
        }
    }, [idCategory])
    
    
    
    


    return(
        <div className="cards-container">
            

        { loading ? <div><div className="ring"></div><h2 className="loading-text">Loading...</h2></div>

        : 

        products.map( prod =>  <Item id={prod.id} name={prod.name} price={prod.price} img={prod.img}/> )}

        </div>
    )
}

