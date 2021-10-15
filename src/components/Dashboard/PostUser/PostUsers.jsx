import editar from '../../../assets/editar.png';
import closeBtn from '../../../assets/x-button.png';

const PostUsers = ({ post }) => {
    //DELETE POST
    const deletePost = (item) => {
        const arrayPost = JSON.parse(localStorage.getItem('userText'));
        console.log(arrayPost);

        //         // console.log(item);
        const indexPost = arrayPost.findIndex((element) => element.post === item.post); //me devuelve el indice, en este caso es 0
        console.log(indexPost);
        arrayPost.splice(indexPost, 1);

        localStorage.setItem('userText', JSON.stringify(arrayPost));
    };
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
                <button className='btn-editar btn-list' type='submit' onClick={() => deletePost(post)}>
                    <img className='img-edicion' src={closeBtn} />
                </button>
            </div>
        </li>
    );
};

export default PostUsers;
