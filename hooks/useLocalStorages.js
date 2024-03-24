export default function useLocalStorage(key, initialState) {
  function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getItem(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  function clear(key) {
    localStorage.removeItem(key);
  }

  return [getItem, setItem, clear];
}
