const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'It is my first post', likesCount: '10'},
                {id: 2, message: 'It is my second post', likesCount: '15'},
                {id: 3, message: 'It is my third post', likesCount: '8'},
                {id: 4, message: 'It is my fourth post?', likesCount: '3'},
            ],
            newPostText: 'it.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Jhon'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Mary'},
                {id: 4, name: 'Dima'},
                {id: 5, name: 'Valera'},
                {id: 6, name: 'Viktor'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Who are you?'},
                {id: 5, message: 'Where do you live?'},
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
        console.log('state is changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
// Методы, которые меняют наш state
//     addPost() {
//
//         let newPost = {
//             id: 5,
//             message: this._state.profilePage.newPostText,
//             likesCount: '0',
//         };
//         // -push это метод массива, который в конец добавляет новый элемент
//         this._state.profilePage.posts.push(newPost);
//         this._state.profilePage.newPostText = '';
//         this._callSubscriber(this._state);
//     },
//     updateNewPostText(newText) {
//
//         this._state.profilePage.newPostText = newText;
//         this._callSubscriber(this._state);
//
//     },

    // Наш state всегда меняется только через диспач экшенов
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: '0',
            };
            // -push это метод массива, который в конец добавляет новый элемент
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 5, message: body});
            this._callSubscriber(this._state);
        }
            }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export const sendMessagesCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}
// let rerenderEntireTree = () => {
//     console.log('state is changed');
// }
//
// let state = {
//
//     profilePage: {
//         posts: [
//             {id: 1, message: 'It is my first post', likesCount: '10'},
//             {id: 2, message: 'It is my second post', likesCount: '15'},
//             {id: 3, message: 'It is my third post', likesCount: '8'},
//             {id: 4, message: 'It is my fourth post?', likesCount: '3'},
//         ],
//         newPostText: 'it.com'
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Jhon'},
//             {id: 2, name: 'Sveta'},
//             {id: 3, name: 'Mary'},
//             {id: 4, name: 'Dima'},
//             {id: 5, name: 'Valera'},
//             {id: 6, name: 'Viktor'}
//         ],
//         messages: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How are you?'},
//             {id: 3, message: 'Yo'},
//             {id: 4, message: 'Who are you?'},
//             {id: 5, message: 'Where do you live?'},
//         ],
//     }
// }
//
// window.state = state;// теперь можно ввести в консоле в браузере state и посмотреть что находится в state
//
// export const addPost = () => {
//
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: '0',
//     };
//     // -push это метод массива, который в конец добавляет новый элемент
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText='';
//     rerenderEntireTree(state);
//     }
//
// export const updateNewPostText = (newText) => {
//
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
//
// }
//
// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }
//
// export default state;
export default store;
window.store = store; // теперь можно ввести в консоле в браузере store и посмотреть что находится в state