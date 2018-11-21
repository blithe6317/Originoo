import 'whatwg-fetch'

export const fetchGet = (url, callback) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('data is', data)
            if (callback) {
                callback(data);
            }
        })
        .catch(error => console.log('error is', error));
};