import React from 'react';
import './App.css';
import BarraDeNavegacion from './componentes/BarraDeNavegacion';
import ContenedorDeItems from './componentes/ContenedorDeItems';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
            <BarraDeNavegacion />
            <ContenedorDeItems mensaje="¡Bienvenido a nuestra tienda!" />
        </div>
    );
}

export default App;