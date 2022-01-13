import './Cart.css'
import { useCartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'


export default function Cart() {

    const { cartList, emptyCart, trash } = useCartContext()


    


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
            
            {/* <h3>Total price: ${cartList}</h3> */}
            </div>
            :
            <div className="cart-main">
                <h2 className="nothing-here">The cart is empty</h2>
                <Link to="/products" className='go-to-products'>Go to products</Link>
            </div>}
        </div>
    )
}


