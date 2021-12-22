import { NavLink } from 'react-router-dom';
import css from './Dialogs.module.css';

function DialogItem(props) {
    return (
        <div className={css.dialog + ' ' + css.active}>
            <NavLink to={`/dialogs/${props.id}`}> {props.name} </NavLink>
        </div>
    );
}

function Message(props) {
    return (
        <div className={css.message}> {props.message} </div>
    );
}

export default function Dialogs(props) {

    let dialogs = [
        { id: 1, name: 'Lol' },
        { id: 2, name: 'Lel' },
        { id: 3, name: 'Lal' },
        { id: 4, name: 'Lyl' },
        { id: 5, name: 'Lql' },
        { id: 6, name: 'Lil' }
    ]
    let dialogsElements = dialogs.map(d=> <DialogItem name={d.name} id={d.id} /> )

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi hi'},
        {id: 3, message: 'EY'},
        {id: 4, message: 'YE'},
        {id: 5, message: 'YEY'}
    ]
    let messagesElements = messages.map( m => <Message message={m.message} /> )


    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                {messagesElements}
            </div>
        </div>
    );
}