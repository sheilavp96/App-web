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
    };

    return (
        <div className='container-ajustes'>
            <form className='form-ajustes'>
                {/*<h3>Registro</h3> */}

                <div className='item-ajustes'>
                    {/* NOMBRE------------------------------------------------------------ */}
                    <DatosAjustes title='Nombre' htmlf='name' tipo='text' ph='Ingrese su nombre' valor={userInfo.name} cambio={handleChangeValues} />

                    {/* CORREO------------------------------------------------------------ */}
                    <DatosAjustes
                        title='Correo'
                        htmlf='email'
                        tipo='text'
                        ph='Ingrese su correo'
                        valor={userInfo.email}
                        cambio={handleChangeValues}
                    />

                    {/* CONTRASEÑA------------------------------------------------------------ */}
                    <DatosAjustes
                        title='Contraseña'
                        htmlf='password'
                        tipo='text'
                        ph='Ingrese su contraseña'
                        valor={userInfo.password}
                        cambio={handleChangeValues}
                    />

                    {/* EDAD------------------------------------------------------------*/}
                    <DatosAjustes title='Edad' htmlf='edad' tipo='number' ph='Ingrese su edad' valor={userInfo.age} cambio={handleChangeValues} />

                    {/* Ciudad------------------------------------------------------------*/}
                    <DatosAjustes
                        title='Ciudad'
                        htmlf='ciudad'
                        tipo='text'
                        ph='Ingrese su ciudad'
                        valor={userInfo.city}
                        cambio={handleChangeValues}
                    />

                    {/* EDAD------------------------------------------------------------*/}
                    <DatosAjustes
                        title='Facebook'
                        htmlf='social'
                        tipo='text'
                        ph='Ingrese su facebook'
                        valor={userInfo.count}
                        cambio={handleChangeValues}
                    />

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
