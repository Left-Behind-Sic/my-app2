import Post from './Post/Post';
import css from './MyPosts.module.css';


export default function MyPosts(props) {

    
    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)


    return (
        <div className={css.postsBlocks}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea cols="30" rows="3"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                {postsElements}
            </div>
        </div>
    );
}