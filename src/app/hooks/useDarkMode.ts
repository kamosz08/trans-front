import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  return [storedValue, setValue];
};

export const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage('dark-theme', true);

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    if (enabled) { bodyClass.add(className); } else { bodyClass.remove(className); }
  }, [enabled]);

  return [enabled, setEnabled];
};
