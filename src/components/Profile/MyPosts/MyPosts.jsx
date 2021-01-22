import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElements = props.profilePage.postsData
        .map(post => <Post message={post.message} imgSrc={post.imgSrc} valueLike={post.valueLike} key={post.id}/>)

    const addNewPost = (values) => {
        props.addPost(values.newPost)
    }

    return (
        <div className={styles.container}>
            <h4>My post</h4>
            <NewPostReduxForm onSubmit={addNewPost} />
            <div className="posts">
                {postsElements}
            </div>
        </div>
    )
};

const NewPostForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <div className={styles.newPost}>
                <Field component={'textarea'} name={'newPost'} placeholder={'Enter new post'}/>
                <button>Add post</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({form: 'post'})(NewPostForm);

export default MyPosts;
