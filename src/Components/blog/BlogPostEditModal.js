import React,{useState} from 'react';
import iconAdmin from '../../images/iconAdmin.jpg';
import iconGuest from '../../images/iconGuest.svg';
import iconUser from '../../images/iconUser.png';

const BlogPostEditModal = ({post, posts, date, toggleEditModal, id, updatePostsData}) => {

    const [text, setText] = useState(post.value)

    const handleChange = ({target}) => {
        setText(target.value);
    }

    const handleClick = () => {
        const index = posts.findIndex(post => post.id === id);
        if (index !== -1) {
            post.value = text;
            posts.splice(index, 1, post);
            updatePostsData(posts);
            toggleEditModal(false);
        } else {
            toggleEditModal(false);
            alert('Редактируемый пост удалён!');
        }
        
    }

    return(
        <div className="post__modal">
            <div className="post__modal-content">
                <img className="post__modal-icon" alt="Post user icon"
                    src={post.user === 'Artur Volokhin' ? iconAdmin :
                        post.user ? iconUser : iconGuest}
                />
                <div className="post__modal-header">
                    <span className="post__modal-user">{post.user ? post.user : 'Guest'}</span>
                    <span>{date}</span>  
                </div>
                <textarea 
                    className="post__modal-message" 
                    value={text}
                    onChange={handleChange}
                    autoFocus
                />
                <div className="post__modal-submit" onClick={handleClick}/>
                <div className="post__modal-cancel" onClick={() => toggleEditModal(false)}/>
            </div>

        </div>
    )
}

export default BlogPostEditModal;