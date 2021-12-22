import css from './Post.module.css';


const Post = (props) => {
    return (
        <div className={css.item + ' ' + css.active}>
            <img src="https://www.imgonline.com.ua/examples/random-pixels-big.png" alt="" />
            {props.message}
            <div>
                <span>Likes: {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;