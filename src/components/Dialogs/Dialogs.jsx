import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = () => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/1">Jhon</NavLink></div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Sveta</NavLink></div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Mary</NavLink></div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Dima</NavLink></div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/5">Valera</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/6">Viktor</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>How are you?</div>
            </div>
        </div>

    )
}
export default Dialogs;