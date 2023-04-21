import React from 'react';

function Label({for: f, name: n,}) {
    return (
        <label htmlFor={f}>{n}</label>
    );
}

export default Label;