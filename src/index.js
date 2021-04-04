import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'It is my first post', likesCount: '10'},
    {id: 2, message: 'It is my second post', likesCount: '15'},
    {id: 3, message: 'It is my third post', likesCount: '8'},
    {id: 4, message: 'It is my fourth post?', likesCount: '3'},
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Who are you?'},
    {id: 5, message: 'Where do you live?'},
]

let dialogsData = [
    {id: 1, name: 'Jhon'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Mary'},
    {id: 4, name: 'Dima'},
    {id: 5, name: 'Valera'},
    {id: 6, name: 'Viktor'}
]
//Рисуется тег App
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messagesData={messagesData} dialogsData={dialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
