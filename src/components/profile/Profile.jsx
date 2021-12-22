import MyPosts from './MyPosts/MyPosts';
import css from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export default function Profile() {
  return (
    <div className={css.content}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}