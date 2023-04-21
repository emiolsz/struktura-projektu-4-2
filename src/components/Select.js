import React from 'react';

function Select({currencyChange: handleCurrency}) {
    return (
        <select onChange={(e) => handleCurrency(e)} id="currency">
            <option value="EUR">Euro</option>
            <option value="USD">Dolar amerykański</option>
            <option value="CHF">Frank szwajcarski</option>
        </select>
    );
}

export default Select;