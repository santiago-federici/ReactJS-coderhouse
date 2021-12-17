import { useState } from "react"


export default function ItemCount({stock, addToCart}) {


    const [count, setCount] = useState(1);

    function plus() {
        count !== stock && setCount(count + 1)
    }

    function minus() {
        count !== 1 && setCount( count - 1)
    }


    return(
        <div>
            <div className="count-section">
                <button className="count-buttons" onClick={minus}>-</button>
                <h3 className="count-number">{count}</h3>
                <button className="count-buttons" onClick={plus}>+</button>
            </div>

            <button className="add-to-cart" onClick={() => addToCart(count)}>Add to cart</button>
        </div>
    )
}