import css from './Message.module.css';


export default function Message(props) {
    return(
        <div className={css.message}> {props.message} </div>
    )
}