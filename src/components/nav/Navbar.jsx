import { NavLink } from 'react-router-dom';
import css from './navbar.module.css';


const Navbar = () =>{
    return (
        <nav className={css.nav}>
        <div className={css.item}>
          <NavLink to='/profile' className={navData => navData.isActive ? css.active : css.item}>Profile</NavLink>
        </div>
        <div className={css.item}>
          <NavLink to='/dialogs' className={navData => navData.isActive ? css.active : css.item}>Messages</NavLink>
        </div>
        <div className={css.item}>
          <a>News</a>
        </div>
        <div className={css.item}>
          <a>Music</a>
        </div>
        <div className={css.item}>
          <a>Settings</a>
        </div>
      </nav>
    )
}

export default Navbar;