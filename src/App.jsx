import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting="Hola, bienvenido a mi página." />
        </div>
    )
}

export default App