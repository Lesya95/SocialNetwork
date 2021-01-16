import React from "react";
import  styles from './Dialogs.module.css'
import DialogItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData
        .map(dialog => <DialogItems name={dialog.name} key={dialog.id} id={dialog.id} imageSrc={dialog.imageSrc}/>);

    let messagesElements = props.dialogsPage.messagesData
        .map(message => <Message message={message.message} key={message.id}/>)

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.messages}>
                <div className={styles.messagesBlock}>
                    {messagesElements}
                </div>
                <div className={styles.newMessage}>
                    <textarea onChange={onMessageChange}
                              className={styles.textarea}
                              ref={newMessageElement}
                              value={props.dialogsPage.newMessageText} />
                    <button className={styles.button} onClick={sendMessage}>Send</button>
                </div>
            </div>
            <div className={styles.dialogsItems}>
            {dialogsElements}
        </div>
        </div>
    )
}

export default  Dialogs;