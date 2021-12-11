import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import './ItemDetailContainer.css'

export default function ItemDetailContainer() {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const oneProduct = () => {
        fetch("../src/JSON/oneProduct.json")
        .then(resp => resp.json())
        .then(data => setProduct(data))
        .finally(() => setLoading(false))
    }


    useEffect(() => {
        setTimeout(() => oneProduct(), 2000)
    }, [])




    return (

        loading ? <></>
        
        :

        product.map( prod =>  <ItemDetail
                                id={prod.id}
                                name={prod.name}
                                description={prod.description}
                                price={prod.price}
                                img={prod.img}/> )
    )
}
