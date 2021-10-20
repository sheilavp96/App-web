import React, { useState, useEffect } from 'react';
import './registro.css';
import { useHistory } from 'react-router-dom';
import dummyUsers from './dummyUsers.json';
import load from '../assets/loading.png';
import DatosReg from './DatosReg';
import { nanoid } from 'nanoid';

const Registro = () => {
    const route = useHistory();
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');
    const [count, setCount] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    //todo--------DISIABLE

    const disableButton = () => {
        if (loading) {
            return true;
        }
        if (name === '') {
            return true;
        }
        if (email === '') {
            return true;
        }
        if (password === '') {
            return true;
        }
        if (age === '') {
            return true;
        }
        if (city === '') {
            return true;
        }
        if (count === '') {
            return true;
        }
        return false;
    };

    //todo------ LOCAL STORAGE-----------------
    //enviarlo al localStorage como un string;
    const setInlocalStorageUser = (item) => {
        localStorage.setItem('userLS', JSON.stringify(item));
    };

    const getUsersFromLocal = () => {
        // converte un string JSON a objeto;
        console.log(JSON.parse(localStorage.getItem('userLS')));
        return JSON.parse(localStorage.getItem('userLS'))['dummyUsers'];
    };

    useEffect(() => {
        // sessionStorage.removeItem('userSS');
        const users = localStorage.getItem('userLS');
        // console.log(users);
        if (!users) {
            console.log(dummyUsers);
            setInlocalStorageUser(dummyUsers);
        }
    }, [dummyUsers]);

    //todo----SHOW NOTIFICATION----------
    const showNotificationFunc = () => {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 30000);
    };

    //todo----- PROCESAR DATOS----------
    const procesarDatos = (e) => {
        e.preventDefault();
        //?------VALIDAR-------
        if (!name.trim()) {
            console.log('ingresa tu nombre');
            setError('Ingresa tu nombre');
            return;
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(name)) {
            setError('El nombre solo puede contener letras y espacios');
            return;
        }

        //? ----------------CORREO---------
        if (!email.trim()) {
            console.log('ingresa tu nombre');
            setError('Ingresa un correo valido');
            return;
        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
            setError('El correo no puede contener espacios');
            return;
        }

        //?-------- CONTRASEÑA---------------
        if (!password.trim()) {
            console.log('ingresa tu contraseña');
            setError('Ingresa tu contraseña');
            return;
        } else if (!/^.{4,12}$/.test(password)) {
            setError('La contraseña debe contener de 4 a 12 digitos');
            return;
        }
        setError('');
        /* setError(null);
        setName('');
        setEmail('');
        setPassword('');
        setAge({ Number });
 */
        setLoading(true);
        setTimeout(() => {
            const USERS_DATABASE = getUsersFromLocal();
            const NEW_USER = { name: name, email: email, password: password, age: age, city: city, count: count, id: nanoid() };
            const usersOnTheDatabase = { dummyUsers: [...USERS_DATABASE].concat(NEW_USER) };

            setInlocalStorageUser(usersOnTheDatabase);
            setLoading(false);
            setName('');
            setEmail('');
            setPassword('');
            setAge('');
            setCity('');
            setCount('');
            showNotificationFunc();
        }, 3000);
    };

    return (
        <>
            <div className='container-registro'>
                <h3 className='title-registro'>Registro</h3>
                {error && <div className='text-error'>{error}</div>}

                <form className='form-registro' onSubmit={procesarDatos}>
                    {/*<h3>Registro</h3> */}

                    <div className='container-datos'>
                        {/* NOMBRE------------------------------------------------------------ */}
                        <DatosReg
                            title='Nombre'
                            htmlf='name'
                            tipo='text'
                            ph='Ingrese su nombre'
                            evento={(e) => setName(e.target.value)}
                            valor={name}
                        />

                        {/* CORREO------------------------------------------------------------ */}
                        <DatosReg
                            title='Correo'
                            htmlf='email'
                            tipo='text'
                            ph='Ingrese su correo'
                            evento={(e) => setEmail(e.target.value)}
                            valor={email}
                        />

                        {/* CONTRASEÑA------------------------------------------------------------ */}
                        <DatosReg
                            title='Contraseña'
                            htmlf='password'
                            tipo='password'
                            ph='Ingrese su contraseña'
                            evento={(e) => setPassword(e.target.value)}
                            valor={password}
                        />

                        {/* EDAD------------------------------------------------------------*/}
                        <DatosReg title='Edad' htmlf='edad' tipo='number' ph='Ingrese su edad' evento={(e) => setAge(e.target.value)} valor={age} />

                        {/* Ciudad------------------------------------------------------------*/}
                        <DatosReg
                            title='Ciudad'
                            htmlf='ciudad'
                            tipo='text'
                            ph='Ingrese su ciudad'
                            evento={(e) => setCity(e.target.value)}
                            valor={city}
                        />

                        {/* EDAD------------------------------------------------------------*/}
                        <DatosReg
                            title='Facebook'
                            htmlf='social'
                            tipo='text'
                            ph='Ingrese su facebook'
                            evento={(e) => setCount(e.target.value)}
                            valor={count}
                        />

                        {/* ENVIAR------------------------------------------------------------ */}

                        <button disabled={disableButton()} className='btn-registro' type='submit'>
                            {loading ? (
                                <div className='loading'>
                                    <img src={load} className='img-load' />
                                    <p>Registrando...</p>
                                </div>
                            ) : (
                                <p> Enviar</p>
                            )}
                        </button>
                        {showNotification && <div className='send'>Su usuario ha sido registrado exitosamente!</div>}
                    </div>

                    {/* <div className='send'>Su usuario ha sido registrado exitosamente!</div> */}
                </form>

                {/* {loading && <div className='loading'>Loading...</div>} */}
            </div>
        </>
    );
};

export default Registro;
