import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemListContainer/ItemCount'


export default function ItemDetail({item, id, name, img, price, description, stock, addNavbar}) {

    const [goToCart, setGoToCart] = useState(false);
    const { addToCart } = useCartContext();


    function onAdd(quantity) {
        setGoToCart(true);

        item = {...item, id, name, price, stock}

        addToCart({...item, quantity:quantity});
    }


    return (
            <div className="detail-container" key={id}>
            <div className="detail-img" style={{ background: `url(${img}) no-repeat 50% / cover` }}></div> 

            <div className="detail-container-info">
                <h2>{name}</h2>
                <p className="description">{description}</p>

                <div className="cart-section">
                    <span>${price}</span>

                    {goToCart ? <Link to="/cart"><button className="add-to-cart" onClick={addNavbar}>Go to cart</button></Link>
                    :
                    <ItemCount stock={stock} onAdd={onAdd}  />
                    }

                </div>
            </div>
        </div>
    )
}
