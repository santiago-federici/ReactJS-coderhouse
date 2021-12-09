import { useState } from "react"


export default function ItemCount() {


    const initial = 1
    const stock = 5
    const [count, setCount] = useState(initial);

    function plus() {

        count < stock ? setCount(prev => prev + 1) : console.log("Se ha alcanzado el máximo de stock de este producto")
    }

    function minus() {
        
        count > initial ? setCount(prev => prev - 1) : console.log("No es posible comprar menos de una unidad")
        
    }


    return(
        <div className="count-section">
            <button className="plus-minus-buttons" onClick={plus}>+</button>
            <p>{count}</p>
            <button className="plus-minus-buttons" onClick={minus}>-</button>
        </div>
    )
}