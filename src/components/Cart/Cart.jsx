import './Cart.css'
import { useCartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore, Timestamp } from 'firebase/firestore'
import { useState } from 'react'

export default function Cart() {

    const { cartList, emptyCart, trash, totalPrice } = useCartContext()
    const [transactionId, setTransactionId] = useState('')
    const [infoForm, setInfoForm] = useState({name: '', email: '', repeatEmail:'', phone:''})
    const [email, setEmail] = useState(false)

    
    const emailOne = document.querySelector(".email-one")
    const emailTwo = document.querySelector(".email-two")
    
    function userInfo(e) {
        setInfoForm({...infoForm, [e.target.name]: e.target.value}) 
    }
    
    const createOrder = (e) => {
        e.preventDefault()
        
        if(emailTwo.value === emailOne.value){
            setEmail(false)
            
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

        } else {
            setEmail(true)
        }
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

                    <p className="finish-purchase">Finish your purchase!</p>


                    <input type="text" name="name" placeholder="Your Name" value={infoForm.name} required/>
                    <input className="email-one" type="email" name="email" placeholder="email@example.com" value={infoForm.email} required/>
                    <input className="email-two" type="email" name="repeatEmail" placeholder="repeat your email" value={infoForm.repeatEmail} required/>
                    {email ? <span className="wrong-email">Check the emails</span> : ''}
                    <input type="tel" name="phone" placeholder="Phone number" value={infoForm.phone} required/>

                    <h3>Total price: ${totalPrice()}</h3>
                    <button className="buy-btn">Buy</button>


                    {(transactionId.length ? <h3>Transaction ID: <br/>{transactionId}</h3> : <div></div>)}
                    
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


