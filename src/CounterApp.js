import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getImagen } from './Basics/07-async-await';


const CounterApp = ({value = 0}) => {

    const [counter, setCounter] = useState(value);
    const [state, setState] = useState('No hay url')
    
    // handleAdd
    const handleAdd = () => {
        setCounter(counter + 1);
    }
    const handleReset = () => {
        setCounter (value);
    }
    const handleSubtract = () => {
        setCounter (counter - 1);
    }

    const printGif = async () => {
        const url = await getImagen();
        return url; 
    }

    useEffect(() => {
        getImagen().then(url => setState(url));
    }, [])
    
    return(

        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick = {handleAdd}>+1</button>
            <button onClick = {handleReset}>Reset</button>
            <button onClick = {handleSubtract}>-1</button>
            <hr/>
            <h2>Gif del día</h2>
            <div>
                <img src={ state } alt=""/>
            </div>
        </>
    );
}

CounterApp.propTypes= {
    value: PropTypes.number.isRequired
}


export default CounterApp;