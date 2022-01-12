import Post from './Post/Post';
import css from './MyPosts.module.css';
import React from 'react';


export default function MyPosts(props) {


    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();


    function addPost() {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
        props.updateNewPostText('');
    }

    function onPostChange() {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }


    return (
        <div className={css.postsBlocks}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea cols="30" rows="3" ref={newPostElement} value={props.newPostText} onChange={onPostChange}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                {postsElements}
            </div>
        </div>
    );
}