const setStorageItem = (key, item) => {
    localStorage.setItem(key, JSON.stringify(item));
};

const getStorageItem = (key) => {
    return localStorage.getItem(key) && JSON.parse(localStorage.getItem(key));
};

const removeStorageItem = (key) => {
    localStorage.removeItem(key);
};

export { setStorageItem, getStorageItem, removeStorageItem };
