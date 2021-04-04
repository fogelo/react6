import classes from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    // Объекты, которые собраны в массив

let dialogsElements = props.dialogsData.map (d => <DialogItem name={d.name} id={d.id}/>)

    // m - это объект ({id: 1, message: 'Hi'}), который содержится в переменной messageData. Значит message. Их
    // можно писать сокращенно

    let messagesElements = props.messagesData.map (m => <Message message={m.message}/>)



// //Обьекты, которые нужно собрать в массив
//     let j = {
//         id: 1,
//         name: 'Jhon'
//     }
//     let j = {
//         id: 2,
//         name: 'Sveta'
//     }

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElements}
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
                {/*<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
                {/*<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>*/}
                {/*<DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>*/}
                {/*<DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>*/}
                {/*<DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>*/}
            </div>

            <div className={classes.messages}>
                {messagesElements}
                {/*<Message message={messagesData[0].message} id={messagesData[0].id}/>*/}
                {/*<Message message={messagesData[1].message} id={messagesData[1].id}/>*/}
                {/*<Message message={messagesData[2].message} id={messagesData[2].id}/>*/}
                {/*<Message message={messagesData[3].message} id={messagesData[3].id}/>*/}
                {/*<Message message={messagesData[4].message} id={messagesData[4].id}/>*/}
            </div>

        </div>

    )
}

export default Dialogs;