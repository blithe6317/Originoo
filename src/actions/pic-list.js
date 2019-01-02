import { get } from '../util';

export const getPicList = ({ dispatch, params }) => {
    get('/pic-list', params)
        .then(function (response) {
            return response.json()
        }).then(function (value) {
            dispatch({ type: 'get-pic-list', value });
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
}