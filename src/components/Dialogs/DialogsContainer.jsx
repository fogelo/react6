// import classes from "./Dialogs.module.css"
// import { NavLink } from "react-router-dom";
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
import { sendMessagesCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessagesCreator());
        },
        sendMessage:(body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;