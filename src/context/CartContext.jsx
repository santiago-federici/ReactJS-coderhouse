import { createContext, useState, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export default function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([]);



    function addToCart(item) {
        const index = cartList.findIndex(i => i.id === item.id)

        if (index > -1){
            const oldQuantity = cartList[index].quantity

            cartList.splice(index, 1)
            setCartList([...cartList, {...item, quantity: item.quantity + oldQuantity}])
        } else{
            setCartList([...cartList, item])
        }
    }

    function emptyCart() {
        setCartList([])
    }

    function trash(prod) {
        let foundProduct =  cartList.find(x =>  x.id === prod)
        let productIndex = cartList.indexOf(foundProduct)
        cartList.splice([productIndex], 1)

        if(cartList.length){
            setCartList([...cartList])
        } else{
            setCartList([])
        }
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, emptyCart, trash}}>
            {children}
        </CartContext.Provider>
    )
}