import classes from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

const Dialogs = () => {

    // Объекты, которые собраны в массив
    let dialogsData = [
        {id: 1, name: 'Jhon'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Mary'},
        {id: 4, name: 'Dima'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Viktor'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Who are you?'},
        {id: 5, message: 'Where do you live?'},

    ]
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
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>

            <div className={classes.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
                <Message message={messagesData[3].message} id={messagesData[3].id}/>
                <Message message={messagesData[4].message} id={messagesData[4].id}/>
            </div>

        </div>

    )
}

export default Dialogs;