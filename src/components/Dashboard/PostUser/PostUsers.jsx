import editar from '../../../assets/editar.png';
import closeBtn from '../../../assets/x-button.png';
import { useEffect, useState } from 'react';
import check from '../../../assets/check.png';
const PostUsers = ({ post, setNewPosts }) => {
    // let arrayPost;
    const user_session = JSON.parse(sessionStorage.getItem('userSS'));
    const [value, setValue] = useState(post.post);
    const [showEditInput, setShowEditInput] = useState(false);
    const [postAct, setPostAct] = useState('');

    const deletePost = (item) => {
        const arrayPost = JSON.parse(localStorage.getItem('userText'));

        const indexPost = arrayPost.findIndex((element) => element.post === item.post); //me devuelve el indice, en este caso es 0
        console.log(indexPost);
        const postDelete = arrayPost.splice(indexPost, 1);
        setNewPosts(arrayPost);
        console.log(postDelete);
        localStorage.setItem('userText', JSON.stringify(arrayPost));
    };

    const editPost = (item) => {
        console.log(item);
        setValue(item.post);
        console.log('editar post:', item.post);
        setShowEditInput(!showEditInput);
    };

    const handleChangeValues = (e) => {
        console.log(post);
        console.log(e.target.value);
        let newEditedPost = e.target.value;

        post.post = newEditedPost;

        setValue(newEditedPost);
    };

    const actualizarPost = () => {
        const allPost = JSON.parse(localStorage.getItem('userText'));
        console.log(typeof allPost);

        const indexPost = allPost.findIndex((element) => element.name === post.name);
        for (const elemento of allPost) {
            console.log(elemento);
            if (elemento.name === post.name) {
                allPost[indexPost].post = value;
                console.log(allPost);

                localStorage.setItem('userText', JSON.stringify(allPost));
            }
        }
        console.log(allPost);

        setShowEditInput(false);

        // console.log(post.name);
        // console.log(indexPost);
        //     console.log('se va a actualizar');
        //     console.log(typeof value);
    };

    return (
        <li className='item-container'>
            <div className='user-text'>
                <p className='name-user'>{post.name}</p>
                {showEditInput ? (
                    <div className='inputEdit'>
                        <input type='text' value={value} name='value' onChange={handleChangeValues} className='edit' />
                        <button className='ok'>
                            <img className='img-check' src={check} onClick={() => actualizarPost()} />
                        </button>
                    </div>
                ) : (
                    <span className='item-text'>{post.post}</span>
                )}
            </div>
            {user_session.email === post.user.email && (
                <div className='drop'>
                    <button className='btn-eliminar btn-list' type='submit' onClick={() => editPost(post)}>
                        <img className='img-edicion' src={editar} />
                    </button>
                    <button className='btn-editar btn-list' type='submit' onClick={() => deletePost(post)}>
                        <img className='img-edicion' src={closeBtn} />
                    </button>
                </div>
            )}
        </li>
    );
};

export default PostUsers;
