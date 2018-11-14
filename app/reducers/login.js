const initStore = {
    userInfo: null,
    hasLoginModal: false
}


const loginStore = (state = initStore, action) => {
    switch (action.type) {
        case 'login-in':
            return {
                ...state,
                userInfo: action.value
            };
        case 'login-show-modal':
            console.log('login-show-modal:', action.value)
            return {
                ...state,
                hasLoginModal: action.value
            };
        default:
            return state;
    }
}

export default loginStore;