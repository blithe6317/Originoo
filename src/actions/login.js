import { post } from '../util';
import { setJSON } from '../util/localStorage';

export const loginIn = ({ dispatch, params }) => {
    post('/login-in', params)
        .then(function (response) {
            return response.json()
        }).then(function (value) {
            dispatch({ type: 'login-in', value });
            setJSON('userInfo', value);
            dispatch({ type: 'login-show-modal', value: false });
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
}