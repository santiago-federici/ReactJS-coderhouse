import { createContext, useState } from "react";


export const CartContext = createContext([])

export default function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([]);

    function addToCart(item){

        setCartList([...cartList, item]);
    }

    function emptyCart() {
        setCartList([])
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, emptyCart}}>
            {children}
        </CartContext.Provider>
    )
}