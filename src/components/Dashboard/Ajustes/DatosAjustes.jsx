import React from 'react';

const DatosAjustes = (props) => {
    return (
        <div className='datos-container'>
            <label htmlFor={props.htmlf}>{props.title}</label>
            <input type={props.tipo} placeholder={props.ph} value={props.valor} onChange={props.cambio} />
        </div>
    );
};

export default DatosAjustes;
