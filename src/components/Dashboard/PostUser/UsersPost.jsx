import React, { useState, useEffect } from 'react';
import './userpost.css';
import dummyPost from '../dummy/dummyPost.json';
import editar from '../../../assets/editar.png';
import closeBtn from '../../../assets/x-button.png';

const UsersPost = ({ post }) => {
    return (
        <li className='item-container'>
            <div className='user-text'>
                <p className='name-user'>{post.name}</p>
                <span className='item-text'>{post.post}</span>
            </div>
            <div className='drop'>
                <button className='btn-eliminar btn-list' type='submit'>
                    <img className='img-edicion' src={editar} />
                </button>
                <button className='btn-editar btn-list' type='submit'>
                    <img className='img-edicion' src={closeBtn} />
                </button>
            </div>
        </li>
    );
};

const Publicaciones = () => {
    //todo-----------LOCAL Y SESSION OBTENER USUARIOS-----------------
    const userS = sessionStorage.getItem('userSS');
    // console.log(userS);
    const userLS = JSON.parse(localStorage.getItem('userLS'))['dummyUsers'];
    // console.log(userLS);

    let userCurrent = {};
    for (const usuario of userLS) {
        // console.log(typeof usuario);
        if (userS === usuario.email) {
            // console.log(`el usuario es ${usuario.email}`);
            userCurrent = usuario;
            // console.log(userCurrent);
        }
    }

    //todo--------------USESTATE-------------------
    const [post, setPost] = useState('');
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    //todo----LOCAL STORAGE SUBIR PUBLICACIONES------------------
    const setInlocalStoragePost = (item) => {
        localStorage.setItem('userText', JSON.stringify(item));
    };

    const getPostFromDataBase = () => {
        //     // converte un string JSON a objeto;
        //     // console.log(JSON.parse(localStorage.getItem('userText')));
        return JSON.parse(localStorage.getItem('userText'));
    };

    useEffect(() => {
        const userPublic = localStorage.getItem('userText');
        if (!userPublic) {
            setInlocalStoragePost(dummyPost.dummyPost);
            setPosts(dummyPost.dummyPost);
        } else {
            setPosts(getPostFromDataBase());
        }
    }, [dummyPost]);

    //todo--------------AGREGAR PUBLICACION FUNCION------

    const addPostLS = (e) => {
        e.preventDefault();
        console.log(e);
        let POST_DATABASE = getPostFromDataBase();
        const NEW_POST = { name: userCurrent.name, post: post };
        POST_DATABASE.unshift(NEW_POST);

        setInlocalStoragePost(POST_DATABASE);
        setPosts(POST_DATABASE);
        setPost('');
    };

    // console.log(textoOntheDatabase);
    return (
        <div className='container-publicaciones'>
            {/* AÑADIR PUBLICACIONS */}
            <form onSubmit={addPostLS} className='add-publicacion'>
                <input type='text' placeholder='¿Qué esta pasando?' onChange={(e) => setPost(e.target.value)} value={post} className='publicar' />
                <button className='enviar' type='submit'>
                    Enviar
                </button>
            </form>
            <div className='publicaciones'>
                <ul className='list'>
                    {posts.map((item, key) => (
                        <UsersPost post={item} key={key} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Publicaciones;
