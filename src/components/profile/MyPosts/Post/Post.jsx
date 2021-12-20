import css from './Post.module.css';


const Post = () => {
    return (
        <div className={css.item + ' ' + css.active}>
            <img src="https://www.imgonline.com.ua/examples/random-pixels-big.png" alt="" />
            Post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;