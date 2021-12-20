
import MyPosts from './MyPosts/MyPosts';
import css from './profile.module.css';

const Profile = () =>{
    return(
        <div className={css.content}>
        <div>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
        </div>
        <div>
          avatar + description
        </div>
        <MyPosts />
      </div>
    )
}

export default Profile;