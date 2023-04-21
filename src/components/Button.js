import React from 'react';

function Button({name, convertCurrency}) {
    return (
        <button onClick={(e) => convertCurrency()}>{name}</button>
    );
}

export default Button;