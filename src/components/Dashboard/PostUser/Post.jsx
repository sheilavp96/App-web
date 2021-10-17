import React, { useState, useEffect } from 'react';
import './post.css';
import dummyPost from '../dummy/dummyPost.json';
import editar from '../../../assets/editar.png';
import closeBtn from '../../../assets/x-button.png';
import PostUsers from './PostUsers';
import { CLASS_TYPES } from '@babel/types';

const Post = () => {
    //todo--------------USESTATE-------------------
    const [newPost, setNewPost] = useState('');
    const [newPosts, setNewPosts] = useState([]);
    const [error, setError] = useState(null);
    // const [userC, setUserC] = useState({});

    //todo-----------LOCAL Y SESSION OBTENER USUARIOS-----------------
    const userCurrent = JSON.parse(sessionStorage.getItem('userSS'));
    console.log(typeof userCurrent);
    const userLS = JSON.parse(localStorage.getItem('userLS'))['dummyUsers'];
    // console.log(userLS);
    // setUserC(userCurrent);

    // let userCurrent = {};
    // for (const usuario of userLS) {
    //     // console.log(usuario);
    //     // console.log(typeof usuario);
    //     if (userS === usuario.email) {
    //         console.log(`el usuario es ${usuario.email}`);
    //         userCurrent = usuario;

    //         console.log(userCurrent);
    //     }
    // }

    //todo----LOCAL STORAGE SUBIR PUBLICACIONES------------------
    const setInlocalStoragePost = (item) => {
        localStorage.setItem('userText', JSON.stringify(item));
    };

    const getPostFromDataBase = () => {
        //     // converte un string JSON a objeto;
        // console.log(JSON.parse(localStorage.getItem('userText')));
        return JSON.parse(localStorage.getItem('userText'));
    };

    useEffect(() => {
        const userPublic = localStorage.getItem('userText');
        if (!userPublic) {
            setInlocalStoragePost(dummyPost.dummyPost);
            setNewPosts(dummyPost.dummyPost);
        } else {
            setNewPosts(getPostFromDataBase());
        }
    }, [dummyPost]);

    //todo--------------AGREGAR PUBLICACION FUNCION------

    const addPostLS = (e) => {
        e.preventDefault();
        console.log(e);
        if (!newPost.trim()) {
            console.log('elemento vacio');
            setError('Escriba algo....');
            return;
        }
        let POST_DATABASE = getPostFromDataBase();
        // console.log(POST_DATABASE);
        const NEW_POST = { name: userCurrent.name, post: newPost };
        POST_DATABASE.unshift(NEW_POST);
        // console.log(POST_DATABASE.unshift(NEW_POST));

        setInlocalStoragePost(POST_DATABASE);
        setNewPosts(POST_DATABASE);
        setNewPost('');
        setError(null);
        // console.log(newPost);
    };

    // console.log(textoOntheDatabase);
    return (
        <div className='container-publicaciones'>
            {/* AÑADIR PUBLICACIONS */}
            {error ? <p className='text-errors'>{error}</p> : null}

            <form onSubmit={addPostLS} className='add-publicacion'>
                <input
                    type='text'
                    placeholder='¿Qué esta pasando?'
                    onChange={(e) => setNewPost(e.target.value)}
                    value={newPost}
                    className='publicar'
                />
                <button className='enviar' type='submit'>
                    Enviar
                </button>
            </form>
            <div className='publicaciones'>
                <ul className='list'>
                    {newPosts.map((item, key) => (
                        <PostUsers post={item} key={key} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Post;
