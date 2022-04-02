import React from 'react';
import PropTypes from 'prop-types';

function Counter({ value }) {
    return ( 
        <> 
            <h1> Counter App </h1>
            <h2> Numero:  { value } </h2>
        </> 
    );
}

Counter.propTypes = {
    value: PropTypes.number.isRequired
}

Counter.defaultProps = {
    value : 0
}

export default Counter;
