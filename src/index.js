import React from 'react';
//import state, { subscribe } from "./redux/state";
import store from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import {addPost} from "./redux/state";
import { BrowserRouter } from "react-router-dom";
//import {updateNewPostText} from "./redux/state";

// addPost('хай');


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            {/*<App posts={posts} messagesData={messagesData} dialogsData={dialogsData}/>*/}
            <BrowserRouter>
                <App state={state}
                     dispatch={store.dispatch.bind(store)} // связываем функцию addPost c ее расположение в store,
                    // нужно связывать так только тогда когда функция не вызывается, а прокидывается вглубь
                     />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root'));
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
