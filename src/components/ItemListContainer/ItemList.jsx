import { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'



const ItemList = memo(() => {

    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategory} = useParams()
    


    useEffect(() => {

        const db= getFirestore()

        if(idCategory){
            const getProducts = () => {
                const queryCollection = query(collection(db, 'products'), where('category', '==', idCategory))
                getDocs(queryCollection)
                .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
                .catch(err => console.log(err))
                .finally(setLoading(false))
            }
            setTimeout(() => getProducts(), 2000)
        } else{
            const getProducts = () => {
                const queryCollection = collection(db, 'products')
                getDocs(queryCollection)
                .then(resp => setProducts( resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
                .catch(err => console.log(err))
                .finally(setLoading(false))
            }
            setTimeout(() => getProducts(), 2000)
        }

    }, [idCategory])


    console.log(products)
    

    return(
        <div className="cards-container">
            

        { loading ? <div><div className="ring"></div><h2 className="loading-text">Loading...</h2></div>

        :
        
        products.map( prod =>  <Item id={prod.id} name={prod.name} price={prod.price} img={prod.img}/> )}
        

        </div>
    )
})


export default ItemList
