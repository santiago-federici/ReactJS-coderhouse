import React from 'react'
import ItemCount from '../ItemListContainer/ItemCount'

export default function ItemDetail({name, description, img, id, price}) {



    return (        
        <div className="detail-container" key={id}>
            <div className="detail-img" style={{ background: `url(${img}) no-repeat 50% / cover` }}>
            </div> 

            <div className="detail-container-info">
                <h2>{name}</h2>
                <p>{description}</p>

                <div className="cart-section">
                    <span>{price}</span>
                    <ItemCount />
                    <button className="add-cart">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
