export const setInStorage = (tokenStorageKey, tokenObj) => {
  try {
    localStorage.setItem(tokenStorageKey, JSON.stringify(tokenObj));
  } catch (e) {
    console.log(e);
  }
};

export const getFromStorage = (tokenStorageKey) => {
  try {
    const tokenObj = localStorage.getItem(tokenStorageKey);
    if (tokenObj) {
      return JSON.parse(tokenObj);
    }
    return '';

  } catch (e) {
    console.log(e);
    return '';
  }
};

export const removeFromStorage = (tokenStorageKey) => {
  try {
    localStorage.removeItem(tokenStorageKey);
  } catch (e) {
    console.log(e);
  }
};