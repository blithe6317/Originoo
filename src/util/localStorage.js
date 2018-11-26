export const get = (key) => {
    if (localStorage.getItem(key)) {
        return localStorage.getItem(key);
    }
    return null;
}

export const getJSON = (key) => {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
    return null;
}

export const set = (key, value) => {
    localStorage.setItem(key, value);
}

export const setJSON = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}