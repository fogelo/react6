const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        {id: 1, message: 'It is my first post', likesCount: '10'},
        {id: 2, message: 'It is my second post', likesCount: '15'},
        {id: 3, message: 'It is my third post', likesCount: '8'},
        {id: 4, message: 'It is my fourth post?', likesCount: '3'},
    ],
    newPostText: 'it.com'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: '0',
            };
            // -push это метод массива, который в конец добавляет новый элемент
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
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
export default profileReducer;