import React from 'react';
import { useState, useEffect } from 'react';
import './login.css';
import { withRouter } from 'react-router-dom';
import load from '../assets/loading.png';
import dummyUsers from '../Registro/dummyUsers.json';
import useAuth from './useAuth';

const Login = (props) => {
    //useState para emaily contraseña
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [acceder, setAcceder] = useState(false);

    const setInlocalStorageUser = (item) => {
        localStorage.setItem('userLS', JSON.stringify(item));
    };

    const getUsersFromLocal = () => {
        // converte un string JSON a objeto;
        console.log(JSON.parse(localStorage.getItem('userLS')));
        return JSON.parse(localStorage.getItem('userLS'))['dummyUsers'];
    };

    // useEffect(() => {
    //     sessionStorage.removeItem('userSS');
    // }, []);

    useEffect(() => {
        // sessionStorage.removeItem('userSS');
        const users = localStorage.getItem('userLS');
        // console.log(users);
        if (!users) {
            console.log(dummyUsers);
            setInlocalStorageUser(dummyUsers);
        }
    }, [dummyUsers]);

    //todo------- FUNCION PROCESAR DATOS------------------------
    const procesarDatos = (e) => {
        e.preventDefault();
        if (!email.trim()) {
            setError('Ingrese email');
            return;
        }
        if (!password.trim()) {
            setError('Ingrese password');
            return;
        }
        //valirdar que la pass sea mayor a 6 digitos
        if (password.length < 6) {
            setError('Password tiene que ser mayor a 6 caracteres');
        }

        // props.history.push('/dashboard');

        //todo----- LOG IN DEL USUARIO--------------------

        const valueEmail = email;
        const valuePass = password;

        const USERS_DATABASE = JSON.parse(localStorage.getItem('userLS'))['dummyUsers'];

        console.log(USERS_DATABASE);
        /* console.log(typeof USERS_DATABASE); */

        for (const user of USERS_DATABASE) {
            console.log(user);
            if (user.email === valueEmail && user.password === valuePass) {
                console.log(typeof user);
                console.log(user);
                console.log(`los valores conciden con es el usuario ${valueEmail} con contraseña ${valuePass}`);
                sessionStorage.setItem('userSS', JSON.stringify(user));
                setAcceder(true);
                setTimeout(() => {
                    setAcceder(false);
                    props.history.push('/dashboard');
                }, 3000);
                return;
            } else {
                console.log('los valores no coindicen');
            }
        }
    };

    //todo---------- FORM-----------------

    return (
        <div className='container-log'>
            <h3>Iniciar sesión</h3>

            <div className='row'>
                <form onSubmit={procesarDatos}>
                    {error && <div className='btn alert'>{error}</div>}
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Ingrese un email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Ingrese un password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='btn-login' type='submit'>
                        {acceder ? (
                            <div className='loading-log'>
                                <img src={load} className='img-load' />
                                <p>Redirigiendo...</p>
                            </div>
                        ) : (
                            <p> Acceder</p>
                        )}
                    </button>
                    {/* <button className='btn btn-info' type='button' onClick={() => setRegistro(!registro)}>
                            {registro ? '¿Ya estas registrado?' : '¿No tienes cuenta?'}
                        </button> */}
                </form>
            </div>
        </div>
    );
};

export default withRouter(Login);
