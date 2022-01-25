import "./Categories.css"
import { Link, NavLink } from 'react-router-dom'



export default function Categories() {

    function open() {
        document.querySelector('.categories-container').classList.add('appear');
    }
        
    function close() {
        document.querySelector('.categories-container').classList.remove('appear');
    }


    return (
        <div className="categories-main">
            <p className="category-button" onClick={open}>Category <span className="iconify arrow-right" data-icon="bx:bxs-right-arrow"></span></p>

            <div className="categories-container">
                <ul className="categories">
                    <Link to="/products"><li>All</li></Link>
                    <NavLink to="/products/pc" activeclassname="active"><li>PCs</li></NavLink>
                    <NavLink to="/products/mouse" activeclassname="active"><li>Mouses</li></NavLink>
                    <NavLink to="/products/keyboard" activeclassname="active"><li>Keyboards</li></NavLink>
                </ul>
                <p onClick={close} className="arrow-left"><span className="iconify" data-icon="bx:bxs-left-arrow"></span></p>
            </div>

        </div>
    )
}
