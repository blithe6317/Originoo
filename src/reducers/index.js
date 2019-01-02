import { combineReducers } from 'redux';
import appStore from './app';
import loginStore from './login';
import userCenterStore from './user-center';
import picListStore from './pic-list';

const rootReducer = combineReducers({
    appStore,
    loginStore,
    userCenterStore,
    picListStore
});

export default rootReducer;