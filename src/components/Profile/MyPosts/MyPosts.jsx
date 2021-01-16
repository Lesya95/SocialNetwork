import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.profilePage.postsData
        .map(post => <Post message={post.message} imgSrc={post.imgSrc} valueLike={post.valueLike}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={styles.container}>
            <h4>My post</h4>
            <div className={styles.newPost}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className="posts">
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;
