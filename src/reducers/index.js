import {combineReducers} from 'redux';
import appStore from './app';
import loginStore from './login'

const rootReducer = combineReducers({
    appStore,
    loginStore
});

export default rootReducer;