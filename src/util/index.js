import 'whatwg-fetch'

export const get = (url, params) => {
    let newUrl = url;
    let count = 0;
    if (params) {
        newUrl += '?'
        for (let key in params) {
            let value = params[key];
            if (typeof params[key] === 'object') {
                value = JSON.stringify(value);
            }
            count++;
            newUrl += ((count > 1 ? '&' : '') + key + '=' + value)
        }
    }
    return fetch(newUrl, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    })
};

export const post = (url, params) => fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(params)
});
