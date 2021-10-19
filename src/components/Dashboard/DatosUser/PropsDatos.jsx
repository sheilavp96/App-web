import React from 'react';

const PropsDatos = (props) => {
    return (
        <div className='item-info'>
            <img className='img' src={props.img} />
            <p className='item'>{props.info}</p>
        </div>
    );
};

export default PropsDatos;
