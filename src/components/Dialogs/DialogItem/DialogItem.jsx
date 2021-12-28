import css from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';


export default function DialogItem (props) {
    return (
        <div className={css.dialog + ' ' + css.active}>
            <NavLink className={Data => Data.isActive ? css.active : css.item} to={`/dialogs/${props.id}`}> {props.name} </NavLink>
        </div>
    );
}