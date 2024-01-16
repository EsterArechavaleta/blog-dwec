import Navbar from "./Navbar";
import Inicio from "./Inicio";
import Crear from "./Crear";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detalles from "./Detalles";

function App() {
  return (
    <Router>
      <div className="App">
        {/* 1er componente.1er modulo */}
        <Navbar />
        <div className="content">
          {/* Llaves para incluir la variable de js por jsx */}
          {/* Segundo componente */}
         <Switch>
          {/*se usa para mostrar una ruta a la vez*/}

          <Route exact path = "/">
            {/* / para indicar que vamos a la raiz*/}
            <Inicio/>
          </Route>

          <Route path = "/create">
            {/* / para indicar que vamos a la raiz*/}
            <Crear/>
          </Route>

          <Route path = "/details">
            <Detalles/>
          </Route>

         </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
