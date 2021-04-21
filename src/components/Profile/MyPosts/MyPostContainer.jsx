import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";
//import store from "../../redux/store";



const MyPostContainer = () => {
    //let state = props.store.getState();

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                   let state = store.getState();
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }
                    return <MyPost updateNewPostText={onPostChange}
                                   addPost={addPost}
                                   posts={state.profilePage.posts}
                                   newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    )
}
export default MyPostContainer;
