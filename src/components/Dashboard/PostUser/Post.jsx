import React, { useState, useEffect } from 'react';
import './post.css';
import dummyPost from '../dummy/dummyPost.json';

import PostUsers from './PostUsers';

const Post = () => {
    //todo--------------USESTATE-------------------
    const [newPost, setNewPost] = useState('');
    const [newPosts, setNewPosts] = useState([]);
    const [error, setError] = useState(null);

    //todo-----------LOCAL Y SESSION OBTENER USUARIOS-----------------
    const userCurrent = JSON.parse(sessionStorage.getItem('userSS'));
    console.log(typeof userCurrent);

    //todo----LOCAL STORAGE SUBIR PUBLICACIONES------------------
    const setInlocalStoragePost = (item) => {
        localStorage.setItem('userText', JSON.stringify(item));
    };
    const getPostFromDataBase = () => {
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
        const NEW_POST = { name: userCurrent.name, post: newPost };
        POST_DATABASE.unshift(NEW_POST);

        setInlocalStoragePost(POST_DATABASE);
        setNewPosts(POST_DATABASE);
        setNewPost('');
        setError(null);
    };

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
                        <div>
                            <PostUsers post={item} key={key} setNewPosts={setNewPosts} />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Post;
