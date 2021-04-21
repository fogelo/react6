// import classes from "./Dialogs.module.css"
// import { NavLink } from "react-router-dom";
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";
import { sendMessagesCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import React from "react";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
//import store from "../../redux/store";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {   (store) => {
            //let state = store.getState().dialogsPage;
            let onSendMessageClick = () => {
                store.dispatch(sendMessagesCreator());
            }
            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={store.getState().dialogsPage}/>
        }
    }
    </StoreContext.Consumer>

}

export default DialogsContainer;