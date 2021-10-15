import React from 'react';
import './dashboard.css';
import Post from './PostUser/Post';
import DatosUser from './DatosUser/DatosUser';
import Anuncios from './Anuncios/Anuncios';

const Dashboard = () => {
    return (
        <>
            <div className='container-dash'>
                <DatosUser className='datos' />
                <Post className='post' />
                <Anuncios className='anuncios' />
            </div>
        </>
    );
};

export default Dashboard;
