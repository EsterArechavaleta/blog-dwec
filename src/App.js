
import Navbar from './Navbar';
import Inicio from './Inicio';

function App() {
  
  return (
    <div className="App">
      {/* 1er componente.1er modulo */}
      <Navbar />
      <div className="content">
        {/* Llaves para incluir la variable de js por jsx */}
        {/* Segundo componente */}
        <Inicio />        
      </div>
    </div>
  );
}

export default App;
