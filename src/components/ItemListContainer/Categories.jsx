import "./Categories.css"
import { Link } from 'react-router-dom'



export default function Categories() {

    const categories = document.querySelector(".categories")
    const arrowRight = document.querySelector(".arrow-right")
    const arrowLeft = document.querySelector(".arrow-left")
    

    function openCategories() {

        categories.classList.add("categories-open")
        arrowRight.style.display = "none"
        arrowLeft.style.display = "flex"
    }

    function closeCategories() {
        categories.classList.remove("categories-open")
        arrowLeft.style.display = "none"
        arrowRight.style.display = "flex"
    }






    return (
        <div className="categories-container">
            <p className="category-button" onClick={openCategories}>Category <span className="iconify arrow-right" data-icon="bx:bxs-right-arrow"></span></p>

            <div className="arrow-left-container">
                <ul className="categories">
                    <Link to="/products/pc"><li>PCs</li></Link>
                    <Link to="/products/mouse"><li>Mouses</li></Link>
                    <Link to="/products/keyboard"><li>Keyboards</li></Link>
                </ul>
                <span className="iconify arrow-left" onClick={closeCategories} data-icon="bx:bxs-left-arrow"></span>
            </div>

        </div>
    )
}
