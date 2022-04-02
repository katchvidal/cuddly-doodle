import React from 'react';
import PropTypes from 'prop-types';
import Counter from './CounterApp';


function PrimeraApp( { props, subtitle } ) {

    const saludo = 'Hello World in Constante '  //  Valores Primitivos se imprimen entre llaves { } pero booleanos no lo imprime

    const persona = {
        name : 'Kyocera',
        lastname : 'Vidal',
        age : 8
    }

    const value = 1

    if ( !props ){
        throw new Error('Props are necesary')   //  Validacion Manual
    }

    return (
        <>
            <h1> Fragmentos en React  </h1>
            <h2> Imprimiendo Constantes JSX: { saludo }, Valores Primitivos </h2>
            <h3> Para imprimir Objetos hace falta el uso de JSON.stringlify { JSON.stringify( persona )} </h3>
            <h4> Recibiendo Props entre componentes: { props } </h4>
            <h4> Recibiendo default Props: {subtitle}</h4>
            <div>
            ------------------------------------------Counter App-------------------------------------------------------
                <Counter value={ value } />

            </div>
        </>
    )
}


PrimeraApp.propTypes = {
    props: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitle : ' Soy un Subtitulo '
}

export default PrimeraApp;