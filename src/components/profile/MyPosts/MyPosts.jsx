import Post from './Post/Post';
import css from './MyPosts.module.css';


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea cols="30" rows="3"></textarea>
                <button>Add post</button>
            </div>
            <div className={css.posts}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />                
            </div>
        </div>
    )
}


export default MyPosts;
