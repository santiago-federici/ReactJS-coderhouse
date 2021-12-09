import ItemCount from './ItemCount.jsx'


export default function Item({id, name, price, img}) {



    return(
        <section className="card" key={id} style={{ background: `url(${img}) no-repeat 50% / cover` }}>
            <div className="card-info">
                <h2 className="card-product">{name}</h2>
                <p>{price}</p>
                
                <ItemCount />
            </div>
        </section>
    )
}