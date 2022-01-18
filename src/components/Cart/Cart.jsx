import './Cart.css'
import { useCartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import { addDoc, collection, documentId, getDocs, getFirestore, query, Timestamp, where, writeBatch } from 'firebase/firestore'
import { useState } from 'react'

export default function Cart() {

    const { cartList, emptyCart, trash, totalPrice } = useCartContext()
    const [transactionId, setTransactionId] = useState('')
    const [infoForm, setInfoForm] = useState({name: '', email: '', phone:''})


    function userInfo(e) {
        
        setInfoForm({...infoForm, [e.target.name]: e.target.value})
    }


    const createOrder = (e) => {
        e.preventDefault()

        let order = {}
            
            order.buyer = infoForm,
            order.total = totalPrice(),
            order.date = Timestamp.fromDate(new Date()),
            order.products = cartList.map(prod => {
                const name = prod.name;
                const id = prod.id;
                const quantity = prod.quantity;
                const subtotal = prod.price * prod.quantity;
    
                return{name, id, quantity, subtotal}
            })
        


        const db = getFirestore()
        const orderCollection = collection(db, 'orders')


        addDoc(orderCollection, order)
        .then(resp => setTransactionId(resp.id))
        .catch(err => console.log(err))



        // const updateCollection = collection(db, 'products')
        // const updateStock = query(updateCollection, where(documentId, 'in', cartList.map(prod => prod.id)))

        // const batch = writeBatch(db)
        // getDocs(updateStock)
        // .then(resp => resp.docs.forEach(res => batch.update(res.ref, {stock: resp.data().stock - cartList.find(prod => prod.id === resp.id).quantity})))

        // batch.commit()
    }




    return (
        <div>

            {cartList.length ? 
            
            <div className="cart-main">
                <div className="prod-cart-container">{cartList.map(prod => 
                    <div className="prod-cart-items">
                        <h3>{prod.name}</h3>
                        <h3>${prod.price}</h3>
                        <h3>{prod.quantity}</h3>
                        <h3 className="price-quantity">${prod.price * prod.quantity}</h3>
                        <button key={prod.id} className="trash-can" onClick={() => trash(prod.id)}><span className="iconify" data-icon="akar-icons:trash-can"></span></button>
                    </div>)}
                </div>
                <button onClick={emptyCart} className="empty-cart-button">Empty cart</button>


                
                <form action="" onSubmit={createOrder} onChange={userInfo} className="info-form">

                    <p>Finish your purchase!</p>


                    <input type="text" name="name" placeholder="Your Name" value={infoForm.name}/>
                    <input type="email" name="email" placeholder="email@example.com" value={infoForm.email}/>
                    <input type="tel" name="phone" placeholder="Phone number" value={infoForm.phone}/>



                    <h3>Total price: ${totalPrice()}</h3>
                    <button className="buy-btn">Buy</button>

                    

                    {(transactionId.length ? <h3>Transaction ID: {transactionId}</h3> : <div></div>)}
                    

                </form>

            </div>
            :
            <div className="cart-main">
                <h2 className="nothing-here">The cart is empty</h2>
                <Link to="/products" className='go-to-products'>Go to products</Link>
            </div>}
        </div>
    )
}


