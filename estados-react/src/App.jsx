import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const aumentar = () => {
    setCount(count + 1);
  };

  const disminuir = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
  <>
      <div className="contador-container">
        <h1 className="contador-titulo">Contador de Puntos</h1>
        <div className="contador-display">
            {count}
          </div>
      </div>
        
          
          <div className="contador-botones">
            <button className="boton-contador boton-disminuir" onClick={disminuir}>Disminuir</button>
            <button className="boton contador boton-aumentar" onClick={aumentar}>Aumentar</button>
            <button className="boton-contador boton-reset" onClick={reset}>Reset </button>
          </div>
      
  </>
      )
}

      export default App
