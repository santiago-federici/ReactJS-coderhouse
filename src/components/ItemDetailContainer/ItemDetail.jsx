import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemListContainer/ItemCount'

export default function ItemDetail({item, addNavbar}) {

    const [goToCart, setGoToCart] = useState(false)


    function addToCart(quantity) {
        console.log(quantity);
        setGoToCart(true)
    }


    return (
        <div className="detail-container" key={item.id}>
            <div className="detail-img" style={{ background: `url(${item.img}) no-repeat 50% / cover` }}>
            </div> 

            <div className="detail-container-info">
                <h2>{item.name}</h2>
                <p className="description">{item.description}</p>

                <div className="cart-section">
                    <span>{item.price}</span>


                    {goToCart ? <Link to="/cart"><button className="add-to-cart" onClick={addNavbar}>Go to cart</button></Link>
                    :
                    <ItemCount stock={item.stock} addToCart={addToCart}  />
                    }


                </div>
            </div>
        </div>
    )
}
