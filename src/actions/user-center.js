import { get } from '../util';

export const getUserNewDown = ({ dispatch }) => {
    get('/user-new-download-info')
        .then(function (response) {
            return response.json()
        }).then(function (value) {
            dispatch({ type: 'get-user-new-download-info', value });
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
}