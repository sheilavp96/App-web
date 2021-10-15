import React, { useState, useEffect } from 'react';
import './ajustes.css';
import DatosAjustes from './DatosAjustes';

const initialState = {
    age: '',
    city: '',
    count: '',
    email: '',
    name: '',
    password: '',
};

const Ajustes = () => {
    const [userActive, setUserActive] = useState({});
    const [allUsers, setAllUsers] = useState([]);
    const [userInfo, setUserInfo] = useState(initialState);

    useEffect(() => {
        //usuario activo en ss
        const userActive = sessionStorage.getItem('userSS');
        console.log(userActive);
        //datos de todos los usuarios
        const allUsers = JSON.parse(localStorage.getItem('userLS'));
        console.log('all', allUsers.dummyUsers);

        setAllUsers(allUsers.dummyUsers);
        setUserActive(userActive);
    }, []);

    useEffect(() => {
        let userObj = {};
        for (const element of allUsers) {
            if (element.email === userActive) {
                userObj = element;
            }
        }
        setUserInfo(userObj);
    }, [userActive]);

    const handleChangeValues = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
        console.log(userInfo);
    };

    const actualizarDatos = (e) => {
        e.preventDefault();
        console.log('entro a la funcion');
        console.log(userInfo);
        console.log(allUsers);
        localStorage.removeItem('userLS');
    };

    return (
        <div className='container-ajustes'>
            <form className='form-ajustes ' onSubmit={actualizarDatos}>
                {/*<h3>Registro</h3> */}

                <div className='item-ajustes'>
                    {/* NOMBRE------------------------------------------------------------ */}
                    {/*< DatosAjustes
                        title='Nombre'
                        htmlf='name'
                        tipo='text'
                        ph='Ingrese su nombre'
                        nombre='name'
                        valor={userInfo.name}
                        cambio={handleChangeValues}
                    /> */}

                    <div className='datos-container'>
                        <label htmlFor='name'>Nombre</label>
                        <input type='text' placeholder='Ingrese su nombre' name='name' value={userInfo.name} onChange={handleChangeValues} />
                    </div>
                    {/* CORREO------------------------------------------------------------ */}
                    {/* <DatosAjustes
                        title='Correo'
                        htmlf='email'
                        tipo='text'
                        ph='Ingrese su correo'
                        nombre='email'
                        valor={userInfo.email}
                        cambio={handleChangeValues}
                    /> */}
                    <div className='datos-container'>
                        <label htmlFor='email'>Correo</label>
                        <input type='text' placeholder='Ingrese su correo' name='email' value={userInfo.email} onChange={handleChangeValues} />
                    </div>
                    {/* CONTRASEÑA------------------------------------------------------------ */}
                    {/* <DatosAjustes
                        title='Contraseña'
                        htmlf='password'
                        tipo='text'
                        ph='Ingrese su contraseña'
                        nombre='password'
                        valor={userInfo.password}
                        cambio={handleChangeValues}
                    /> */}
                    <div className='datos-container'>
                        <label htmlFor='password'>Contraseña</label>
                        <input
                            type='password'
                            placeholder='Ingrese su contraseña'
                            name='password'
                            value={userInfo.password}
                            onChange={handleChangeValues}
                        />
                    </div>

                    {/* EDAD------------------------------------------------------------*/}
                    {/* <DatosAjustes
                        title='Edad'
                        htmlf='edad'
                        tipo='number'
                        ph='Ingrese su edad'
                        nombre='age'
                        valor={userInfo.age}
                        cambio={handleChangeValues}
                    /> */}
                    <div className='datos-container'>
                        <label htmlFor='age'>Edad</label>
                        <input
                            type='number'
                            min='18'
                            max='100'
                            placeholder='Ingrese su edad'
                            name='age'
                            value={userInfo.age}
                            onChange={handleChangeValues}
                        />
                    </div>

                    {/* Ciudad------------------------------------------------------------*/}
                    <div className='datos-container'>
                        <label htmlFor='ciudad'>Ciudad</label>
                        <input type='text' placeholder='Ingrese su ciudad' name='city' value={userInfo.city} onChange={handleChangeValues} />
                    </div>

                    {/* EDAD------------------------------------------------------------*/}
                    {/*  <DatosAjustes
                        title='Facebook'
                        htmlf='social'
                        tipo='text'
                        ph='Ingrese su facebook'
                        nombre='count'
                        valor={userInfo.count}
                        cambio={handleChangeValues}
                    /> */}
                    <div className='datos-container'>
                        <label htmlFor='social '>Facebook</label>
                        <input type='text' placeholder='Ingrese su red social' name='count' value={userInfo.count} onChange={handleChangeValues} />
                    </div>

                    {/* ENVIAR------------------------------------------------------------ */}

                    <button className='btn-registro' type='submit'>
                        Actualizar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Ajustes;
