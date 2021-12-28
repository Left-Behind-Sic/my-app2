import MyPosts from './MyPosts/MyPosts';
import css from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export default function Profile(props) {
  return (
    <div className={css.content}>
      <ProfileInfo />
      <MyPosts posts={props.state.posts}  />
    </div>
  );
}