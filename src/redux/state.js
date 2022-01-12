let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'hi', likesCount: 12 },
                { id: 2, message: 'hello', likesCount: 10 },
                { id: 3, message: 'zing', likesCount: 100 }
            ],
            newPostText: 'lolnewposttext'
        },


        messagesPages: {
            dialogs: [
                { id: 1, name: 'Lol' },
                { id: 2, name: 'Lel' },
                { id: 3, name: 'Lal' },
                { id: 4, name: 'Lyl' },
                { id: 5, name: 'Lql' },
                { id: 6, name: 'Lil' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hi hi' },
                { id: 3, message: 'EY' },
                { id: 4, message: 'YE' },
                { id: 5, message: 'YEY' }
            ]
        }
    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
        console.log('state changed');
    },
    addPost(postMessage) {

        let newPost = {
            id: 4,
            message: postMessage,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this.rerenderEntireTree(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.rerenderEntireTree(this._state);
    },

    subscribe(observer) {
        this.rerenderEntireTree = observer;  //наблюдатель 
    }

}







export default store;

window.store = store;