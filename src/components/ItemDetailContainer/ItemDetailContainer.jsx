import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

export default function ItemDetailContainer() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {idDetail} = useParams()



    
    
    useEffect(() => {
        
        const getProducts = () => {
            fetch("../src/JSON/products.json")
            .then(resp => resp.json())
            .then(data => setProducts(data.find(prod => prod.id === parseInt(idDetail))))
            .finally(() => setLoading(false))
        }
        getProducts()
        
    }, [idDetail])




    return (

        loading ? <></> 

        :

        <ItemDetail item={products}/>
    )
}
