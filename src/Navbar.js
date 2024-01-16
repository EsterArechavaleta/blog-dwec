// Instruccion que crea la estructura d nuestro componente:
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navBar">
            <h1>El blog de DWEC</h1>
            <div className="links">
                {/* el div tiene que ir en el navbar, porque solo acepta un elemento padre */}
                <Link to="/">Inicio</Link>
                <Link to="/create">Nuevo blog</Link>
                <Link to="/details">Detalles</Link>
                {/*al poner Link nos evitamos llamada al servidor que hace con a yn href*/}
            </div>
        </nav>
     );
}
 
export default Navbar;