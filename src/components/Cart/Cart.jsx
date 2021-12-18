import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export default function Cart() {

    const { cartList, emptyCart } = useContext(CartContext)


    return (
        <div>
            {cartList.map(prod => <ul><li>{prod.name}    {prod.price}    {prod.quantity}</li></ul>)}
            <button onClick={emptyCart}>Empty cart</button>
        </div>
    )
}
