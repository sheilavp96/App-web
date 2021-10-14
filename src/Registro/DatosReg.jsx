import React from 'react';

const DatosReg = (props) => {
    return (
        <div className='datos-container'>
            <label htmlFor={props.htmlf}>{props.title}</label>
            <input type={props.tipo} placeholder={props.ph} onChange={props.evento} value={props.valor} />
        </div>
    );
};

export default DatosReg;
