import React from 'react'
import ItemCount from '../ItemListContainer/ItemCount'

export default function ItemDetail({item}) {



    return (
        <div className="detail-container" key={item.id}>
            <div className="detail-img" style={{ background: `url(${item.img}) no-repeat 50% / cover` }}>
            </div> 

            <div className="detail-container-info">
                <h2>{item.name}</h2>
                <p>{item.description}</p>

                <div className="cart-section">
                    <span>{item.price}</span>
                    <ItemCount />
                    <button className="add-cart">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
