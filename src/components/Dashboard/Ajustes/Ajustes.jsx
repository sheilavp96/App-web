import React, { useState, useEffect } from 'react';
// import { withRouter } from 'react-router';
import './ajustes.css';
import BackDashboard from './BackDashboard';
import load from '../../../assets/loading.png';
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
    const [indexUser, setIndexUser] = useState(0);
    const [notificacion, setNotificacion] = useState(false);
    const [actualizar, setActualizar] = useState(false);

    let indexUserActive;
    useEffect(() => {
        //usuario activo en ss
        const userActive = JSON.parse(sessionStorage.getItem('userSS'));
        console.log(userActive);

        //datos de todos los usuarios
        const allUser = JSON.parse(localStorage.getItem('userLS'))['dummyUsers'];
        // console.log('all', allUser.dummyUsers);
        console.log(allUser);

        //indice del userActive en el array allUSERS
        indexUserActive = allUsers.findIndex((element) => element.id === userActive.id);
        setIndexUser(indexUserActive);
        console.log(indexUser);
        //
        setAllUsers(allUser);
        setUserActive(userActive);
        console.log(typeof allUser);
    }, []);

    useEffect(() => {
        let userObj = userActive;

        setUserInfo(userObj);
    }, [userActive]);
    console.log(userInfo);

    const handleChangeValues = (e) => {
        console.log(e);
        userInfo[e.target.name] = e.target.value;
        // console.log((userInfo[e.target.name] = e.target.value));
        setUserInfo({
            ...userInfo,
        });

        console.log(userActive);
        console.log(indexUser);
    };
    console.log(userInfo);

    // console.log(indexUser);

    const NotificacionFunc = () => {
        setNotificacion(true);
        setTimeout(() => {
            setNotificacion(false);
        }, 3000);
    };

    const actualizarDatos = (e) => {
        e.preventDefault();

        const eliminado = allUsers.splice(indexUser, 1, userInfo);
        const newArray = { dummyUsers: [...allUsers] };

        localStorage.setItem('userLS', JSON.stringify(newArray));
        sessionStorage.setItem('userSS', JSON.stringify(userInfo));
        setActualizar(true);
        setTimeout(() => {
            setActualizar(false);
            NotificacionFunc();
        }, 3000);
    };

    return (
        <div className='container-ajustes'>
            <BackDashboard />
            <form className='form-ajustes ' onSubmit={actualizarDatos}>
                {/*<h3>Registro</h3> */}

                <div className='item-ajustes'>
                    {/* NOMBRE------------------------------------------------------------ */}

                    <div className='datos-container'>
                        <label htmlFor='name'>Nombre</label>
                        <input type='text' placeholder='Ingrese su nombre' name='name' value={userInfo.name} onChange={handleChangeValues} />
                    </div>
                    {/* CORREO------------------------------------------------------------ */}

                    <div className='datos-container'>
                        <label htmlFor='email'>Correo</label>
                        <input type='text' placeholder='Ingrese su correo' name='email' value={userInfo.email} onChange={handleChangeValues} />
                    </div>
                    {/* CONTRASE??A------------------------------------------------------------ */}

                    <div className='datos-container'>
                        <label htmlFor='password'>Contrase??a</label>
                        <input
                            type='password'
                            placeholder='Ingrese su contrase??a'
                            name='password'
                            value={userInfo.password}
                            onChange={handleChangeValues}
                        />
                    </div>

                    {/* EDAD------------------------------------------------------------*/}

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

                    <div className='datos-container'>
                        <label htmlFor='social '>Facebook</label>
                        <input type='text' placeholder='Ingrese su red social' name='count' value={userInfo.count} onChange={handleChangeValues} />
                    </div>

                    {/* ENVIAR------------------------------------------------------------ */}
                </div>

                <button className='btn-registro' type='submit'>
                    {/* <p>Actualizar</p> */}
                    {actualizar ? (
                        <div className='loading-log'>
                            <img src={load} className='img-load' />
                            <p>Actualizando...</p>
                        </div>
                    ) : (
                        <p> Actualizar</p>
                    )}
                </button>

                {notificacion && <div className='send'>Su usuario ha sido actualizado exitosamente!</div>}
            </form>
        </div>
    );
};

export default Ajustes;
