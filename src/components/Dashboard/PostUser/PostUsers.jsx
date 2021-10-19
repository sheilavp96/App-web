import editar from '../../../assets/editar.png';
import closeBtn from '../../../assets/x-button.png';
import { useState } from 'react';
const PostUsers = ({ post, setNewPosts }) => {
    // let arrayPost;
    const user_session = JSON.parse(sessionStorage.getItem('userSS'));
    const [value, setValue] = useState(post.post);
    const [showEditInput, setShowEditInput] = useState(false);

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
        console.log('editar post:', item.post);
        setShowEditInput(!showEditInput);
    };

    return (
        <li className='item-container'>
            <div className='user-text'>
                <p className='name-user'>{post.name}</p>
                {showEditInput ? <input value={value} /> : <span className='item-text'>{post.post}</span>}
            </div>
            {/* {user_session.email === post.user?.email && ( */}
            <div className='drop'>
                <button className='btn-eliminar btn-list' type='submit' onClick={() => editPost(post)}>
                    <img className='img-edicion' src={editar} />
                </button>
                <button className='btn-editar btn-list' type='submit' onClick={() => deletePost(post)}>
                    <img className='img-edicion' src={closeBtn} />
                </button>
            </div>
            {/*     )} */}
        </li>
    );
};

export default PostUsers;
