import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({ setGasto, setCrearGasto }) => {

    //############ States ############################
    const [ nombre, setNombre ] = useState('');
    const [ cantidad, setCantidad ] = useState(0);
    const [ error, setError ] = useState(false);


    //############ Handlers ############################
    // Cuando el usuario agregar un gasto
    const agregarGasto = (event) => {
        event.preventDefault();
        
        // Validar 
        if (cantidad <= 0 || isNaN( cantidad ) || nombre.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        // Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // Pasar el gasto al componente principal
        setGasto(gasto);
        setCrearGasto(true);

        // Resetear formulario
        setNombre('');
        setCantidad(0);
    }

    //############ Return ############################
    return ( 
        <form onSubmit={ agregarGasto }>

            <h2> Agrega tus gastos aquí </h2>

            {/* Mensaje de error */}
            { error ? <Error msg="Ambos campos son obligatorios o Presupuesto incorrecto."/> : null }

            <div className="campo">
                <label>Nombre del Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Comida"
                    value={ nombre }
                    onChange={ e => setNombre( e.target.value ) }
                    />
            </div>
            
            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 500"
                    value={ cantidad }
                    onChange={ e => setCantidad( parseInt(e.target.value) ) }
                    />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
                />

        </form> 
    );
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}


export default Formulario;