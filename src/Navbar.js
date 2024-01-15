// Instruccion que crea la estructura d nuestro componente:
const Navbar = () => {
    return ( 
        <nav className="navBar">
            <h1>El blog de DWEC</h1>
            <div className="links">
                {/* el div tiene que ir en el navbar, porque solo acepta un elemento padre */}
                <a href="/">Inicio</a>
                <a href="/create">Nuevo blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;