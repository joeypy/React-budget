import React, { useEffect, useState } from 'react';

// Componentes
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';



function App() {

  //############ useState ############################
  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ restante, setRestante ] = useState(0);
  const [ mostrarPregunta, setMostrarPregunta ] = useState(true);
  const [ gastos, setGastos ] = useState([]);
  const [ gasto, setGasto ] = useState({});
  const [ crearGasto, setCrearGasto ] = useState(false);

  //############ useEffect ############################
  useEffect(() => {
    if(crearGasto){

      // Agrega el nuevo presupuesto 
      setGastos([ ...gastos, gasto ]);

      // Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad
      setRestante( presupuestoRestante );
    }
  }, [gasto]);

  //############ Handlers ############################
  

  //############ Return ############################
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido contenido-principal">
          { mostrarPregunta ? 
          (
            <Pregunta
            setPresupuesto={ setPresupuesto }
            setRestante={ setRestante } 
            setMostrarPregunta={ setMostrarPregunta }
            />
          ) :  (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  setCrearGasto={ setCrearGasto }
                  setGasto={ setGasto }
                  />
              </div>
              <div className="one-half column">
                <Listado 
                  gastos={ gastos }
                  />

                <ControlPresupuesto 
                  presupuesto={ presupuesto }
                  restante={ restante }
                  />
              </div>
            </div>
          )};

        </div>
      </header>
    </div>
  );
}

export default App;
