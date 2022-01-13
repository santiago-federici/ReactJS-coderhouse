import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'


export default function CartWidget() {
    const { cartList } = useCartContext()

    let totalQuantity = 0;

    for( let i = 0; i < cartList.length; i++){
        totalQuantity += cartList[i].quantity
    }


    return (
        <div>
            <Link to="/cart"><span className="iconify shoppingCart" data-icon="la:shopping-cart"></span>
                <span>{cartList.length < 1 ? "" : totalQuantity}</span>
            </Link>
        </div>
    )
}

