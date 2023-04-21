import React from 'react';

function Input({type, amountToChange: handleEvent}) {
    return (
        <input onChange={(e) => handleEvent(e)} type={type}/>
    );
}

export default Input;