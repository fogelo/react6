import classes from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

const Dialogs = () => {

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                <DialogItem name="Jhon" id="1"/>
                <DialogItem name="Sveta" id="2"/>
                <DialogItem name="Mary" id="3"/>
                <DialogItem name="Dima" id="4"/>
                <DialogItem name="Valera" id="5"/>
                <DialogItem name="Viktor" id="6"/>

            </div>
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Yo"/>
                <Message message="Who are you?"/>
            </div>

        </div>

    )
}
export default Dialogs;