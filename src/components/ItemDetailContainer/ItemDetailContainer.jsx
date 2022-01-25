import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams, Link } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import './ItemDetailContainer.css'

export default function ItemDetailContainer() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {idDetail} = useParams()


    useEffect(() => {

        const db= getFirestore()

        const getDetails = () => {

            const queryCollection = collection(db, 'products')
            getDocs(queryCollection)
            .then(resp => setProducts( resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .finally(setLoading(false))
        }

        setTimeout(() => getDetails(), 1500)

    }, [idDetail])



    function addNavbar() {
        document.querySelector(".navbar").style.display = "flex"
    }

    const productsFilter = products.filter( prodId => prodId.id == idDetail)


    return (
        
        loading ? <div className='spinner-container'><div className="spinner"></div></div>
        
        :
        
        <div className="detail-main">
            <Link to="/products"><p className="back-arrow" onClick={addNavbar}><span className="iconify" data-icon="eva:arrow-back-fill"></span></p></Link>
            {productsFilter.map( prod => <ItemDetail addNavbar={addNavbar} item={productsFilter} id={prod.id} name={prod.name} description={prod.description} price={prod.price} stock={prod.stock} img={prod.img}/>)}
            

        </div>
    )
}

