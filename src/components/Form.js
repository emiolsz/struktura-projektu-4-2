import React from 'react';

function Form(props) {
    return (
        <div className="form">
            {props.children}
        </div>
    );
}

export default Form;