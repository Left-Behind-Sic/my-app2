const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'hi', likesCount: 12},
                {id: 2, message: 'hello', likesCount: 10},
                {id: 3, message: 'zing', likesCount: 100}
            ],
            newPostText: 'lolnewposttext'
        },


        messagesPages: {
            dialogs: [
                {id: 1, name: 'Lol'},
                {id: 2, name: 'Lel'},
                {id: 3, name: 'Lal'},
                {id: 4, name: 'Lyl'},
                {id: 5, name: 'Lql'},
                {id: 6, name: 'Lil'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi hi'},
                {id: 3, message: 'EY'},
                {id: 4, message: 'YE'},
                {id: 5, message: 'YEY'}
            ]
        }
    },

    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;  //наблюдатель 
    },


    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }

}

export function addPostActionCreator() {
    return {
        type: ADD_POST
    }
};

export function updateNewPostTextActionCreator(text) {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}


export default store;

window.store = store;