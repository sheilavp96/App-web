import React, { useState, useEffect } from 'react';
// import { withRouter } from 'react-router';
import './ajustes.css';
// import load from '../../../assets/loading.png';
// ' sets/loading.png';

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
    /* const [back, setBack] = useState(false);

    setBack(true);
    setTimeout(() => {
        setBack(false);
        props.history.push('/dashboard');
    }, 3000);
 */
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
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.age]: e.target.value,
            [e.target.password]: e.target.value,
            [e.target.city]: e.target.value,
            [e.target.count]: e.target.value,
        });
        console.log(userInfo);
        console.log(userActive);
        /*  const userActualizado = { dummyUsers: [...allUsers].concat(userInfo) };
        localStorage.setItem('userLS', JSON.stringify(userActualizado)); */
    };

    const actualizarDatos = (e) => {
        e.preventDefault();
        console.log('entro a la funcion');
        console.log(userInfo);
        console.log(allUsers);
        // localStorage.setItem('userLS', JSON.stringify(userInfo));
        // localStorage.removeItem('userLS');
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
                        {/* {back ? (
                            <div className='loading-log'>
                                <img src={load} className='img-load' />
                                <p>Actualizando...</p>
                            </div>
                        ) : (
                            <p> Actualizar</p>
                        )} */}
                        <p>Actualizar</p>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Ajustes;
