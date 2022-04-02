import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Counter({ value }) {
    const initialValue = value
    const [Counter, setCounter] = useState(initialValue);

    const HandleClickPlusOne = (e) => {
        setCounter(Counter + 1 )
    }
    const HandleClickMenorOne = (e) => {
        setCounter(Counter - 1 )
    }
    const HandleClickReset = (e) => {
        setCounter(initialValue)
    }


    return (
        <>
            <h1> Counter App </h1>
            <h2> Numero:  {Counter} </h2>
            <br></br>
            <button onClick={HandleClickPlusOne}> Sumar +1</button>
            <br></br>
            <br></br>
            <button onClick={HandleClickMenorOne}> Restar -1</button>
            <br></br>
            <br></br>
            <button onClick={HandleClickReset}> Reset </button>
        </>
    );
}

Counter.propTypes = {
    value: PropTypes.number.isRequired
}

Counter.defaultProps = {
    value: 0
}

export default Counter;
