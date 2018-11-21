import {fetchGet} from '../../util';

export const loginIn = (callback) => {
    fetchGet('/getuserInfo', (res) => {
        callback(res);
    });
}