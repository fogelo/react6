import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from "./redux/state";
import { BrowserRouter } from "react-router-dom";

// addPost('хай');


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            {/*<App posts={posts} messagesData={messagesData} dialogsData={dialogsData}/>*/}
            <BrowserRouter>
                <App state={state} addPost={addPost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root'));
}

