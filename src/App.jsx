import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Cart from './components/Cart/Cart'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/products" element={<Products />} />
                <Route exact path="/products/:idCategory" element={<Products />} />
                <Route exact path="/detail/:idDetail" element={<ItemDetailContainer />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
        )
}


export default App