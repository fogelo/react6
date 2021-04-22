import React from 'react';
//import state, { subscribe } from "./redux/state";
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import {addPost} from "./redux/state";
import { BrowserRouter } from "react-router-dom";
//import {Provider} from "./StoreContext";
import {Provider} from "react-redux"
//import {updateNewPostText} from "./redux/state";
// addPost('хай');


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            {/*<App posts={posts} messagesData={messagesData} dialogsData={dialogsData}/>*/}
            <BrowserRouter>
                <Provider store={store}><App/></Provider>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

reportWebVitals();
