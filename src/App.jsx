import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from './components/Cart/Cart'

const App = () => {
    return (
        <BrowserRouter>

            <NavBar />
        <Routes>
            <Route exact path="/" element={<ItemListContainer />} /> // Acá puede ir el Home. Dentro del home, poner otros componentes
            <Route exact path="/categoria" element={<ItemListContainer />} /> //Desp acá, puede ir el products, y ahi el itemListContainer y los card
            <Route exact path="/detalle" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            
            
        </Routes>


        </BrowserRouter>
    )
}

export default App