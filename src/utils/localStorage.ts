export function getLocalStorage(key, defaultValue) {
  const value = window.localStorage.getItem(key);
  return value !== null ? JSON.parse(value) : defaultValue;
}

export function updateLocalStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}
