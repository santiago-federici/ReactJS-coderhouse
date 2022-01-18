import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams, Link } from 'react-router-dom'
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
        setTimeout(() => getProducts(), 1000)
        
    }, [idDetail])







    function addNavbar() {
        document.querySelector(".navbar").style.display = "flex"
    }





    return (

        loading ? <div className='spinner-container'><div className="spinner"></div></div>

        :

        <div className="detail-main">
            <Link to="/products"><p className="back-arrow" onClick={addNavbar}><span className="iconify" data-icon="eva:arrow-back-fill"></span></p></Link>
            <ItemDetail item={products} addNavbar={addNavbar}/>
        </div>
    )
}
