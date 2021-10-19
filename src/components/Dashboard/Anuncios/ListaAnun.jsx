import React from 'react';
import PropsAnuncio from './PropsAnuncio';
import related1 from '../../../assets/related-1.jpg';
import related2 from '../../../assets/related-2.jpg';
import related3 from '../../../assets/related-3.jpg';

const ListaAnun = () => {
    return (
        <>
            <PropsAnuncio img={related1} text='How to learn web development' author='Eren Jaeger' />
            <PropsAnuncio img={related2} text='The Unknown Powers of CSS' author='Reiner Braun' />
            <PropsAnuncio img={related3} text='Why JavaScript is Awesome' author='Spike Spiegel' />
            <PropsAnuncio img={related1} text='¿React Hooks? ' author='Yuji Itadori' />
        </>
    );
};

export default ListaAnun;
