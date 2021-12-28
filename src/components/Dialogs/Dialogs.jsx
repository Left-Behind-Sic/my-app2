import css from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';



export default function Dialogs(props) {

    
    let dialogsElements = props.state.dialogs.map(d=> <DialogItem name={d.name} id={d.id} /> )

    
    let messagesElements = props.state.messages.map( m => <Message message={m.message} /> )


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