import { getJSON } from '../util/localStorage';

const initStore = {
    userInfo: getJSON('userInfo'),
    hasLoginModal: false,
    hasRegisterModal: false
}

const loginStore = (state = initStore, action) => {
    switch (action.type) {
        case 'login-in':
            return {
                ...state,
                userInfo: action.value
            };
        case 'login-show-modal':
            return {
                ...state,
                hasLoginModal: action.value
            };
        case 'register-show-modal':
            return {
                ...state,
                hasRegisterModal: action.value
            };
        default:
            return state;
    }
}

export default loginStore;