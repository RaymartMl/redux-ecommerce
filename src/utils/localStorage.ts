export function getLocalStorage(key: string, defaultValue: any) {
  const value = window.localStorage.getItem(key);
  return value !== null ? JSON.parse(value) : defaultValue;
}

export function updateLocalStorage(key: string, value: any) {
  window.localStorage.setItem(key, JSON.stringify(value));
}
